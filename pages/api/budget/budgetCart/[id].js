import {
  addBudgetItem, deleteBudgetItem, getBudgetItem, updateBudgetItem,
} from 'lib/budget';

const cartHandler = async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'PUT':
      try {
        const { body } = req;
        const { budgetQuantity, price } = body;
        const foundItem = await getBudgetItem(id);
        if (foundItem) {
          const budgetTotal = budgetQuantity * price;
          const updatedItem = await updateBudgetItem(id, { budgetQuantity, budgetTotal });
          return res.status(202).send(updatedItem);
        }
        const budgetTotal = budgetQuantity * price;
        body.budgetTotal = budgetTotal;
        const newItem = await addBudgetItem(body);
        return res.status(202).send(newItem);
      } catch (err) {
        console.error(err);
        return res.status(400).send(err);
      }
    case 'DELETE':
      try {
        const deletedItem = await deleteBudgetItem(id);
        return res.status(202).send(deletedItem);
      } catch (err) {
        console.error(err);
        return res.status(400).send(err);
      }
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default cartHandler;
