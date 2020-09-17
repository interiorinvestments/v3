import argon2 from 'argon2';

import User from '../models/user';
import dbConnect from '../utils/dbConnect';

export async function createUser({ username, password }) {
  try {
    await dbConnect();
    const hashedPass = await argon2.hash(password);
    const user = new User({
      username,
      password: hashedPass,
    });
    await user.save();
    return { username: user.username };
  } catch (error) {
    throw new Error(error);
  }
}

export async function findUser({ username, password }) {
  try {
    await dbConnect();
    const user = await User.findOne({ username });
    // Check for user and correct password
    if (user && (await argon2.verify(user.password, password))) {
      return { username: user.username };
    }
    throw new Error('Incorrect username or password');
  } catch (error) {
    throw new Error(error);
  }
}
