import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';

const cartHandler = async (req, res) => {
  const adapter = new FileAsync('src/data/inventory/db.json');
  const db = await low(adapter);

  const {
    query: { code },
    method,
  } = req;

  switch (method) {
    case 'PUT':
      try {
        // const cart = await db.get('cart').find({ code }).value();
        const cart = await db.get('cart').find({ code }).assign({ code: 'new code' }).write();
        // if cart update value
        // if no cart add value
        res.status(204).send(cart);
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
