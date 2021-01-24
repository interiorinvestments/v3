import { getCart } from 'lib/cart';

const cartHandler = async (req, res) => {
  const {
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const cart = await getCart();
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
