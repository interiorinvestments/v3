import { createUser } from 'lib/user';

export default async function register(req, res) {
  try {
    await createUser(req.body);
    res.status(200).send({ done: true });
  } catch (error) {
    res.status(500).end(error.message);
  }
}
