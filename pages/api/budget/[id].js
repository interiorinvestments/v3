import { getItem, updateItem } from 'lib/item';

const budgetHandler = async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const item = await getItem(id);
        return res.status(200).send(item);
      } catch (err) {
        console.error(err);
        return res.status(400).send(err);
      }
    case 'PUT':
      try {
        const { budgetQuantity, price } = req.body;
        const budgetTotal = budgetQuantity * price;
        const updatedItem = await updateItem(id, { budgetQuantity, budgetTotal });
        return res.status(202).json(updatedItem);
      } catch (err) {
        console.error(err);
        return res.status(400).send(err);
      }
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default budgetHandler;
