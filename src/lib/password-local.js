import Local from 'passport-local';

import { findUser } from './user';

// eslint-disable-next-line import/prefer-default-export
export const localStrategy = new Local.Strategy((
  username,
  password,
  done,
) => {
  findUser({ username, password })
    .then((user) => {
      done(null, user);
    })
    .catch((error) => {
      done(error);
    });
});
