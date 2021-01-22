import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import path from 'path';

const file = path.resolve('db.json');
const adapter = new FileAsync(file);

const cartHandler = async (req, res) => {
  const db = await low(adapter);

  const {
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const cart = await db.get('cart').value();
        res.status(200).send(cart);
      } catch (err) {
        console.error(err);
        res.status(400).send(err);
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default cartHandler;
