import Budget from '../models/budget';
import dbConnect from '../utils/dbConnect';

export async function getBudget() {
  try {
    await dbConnect();
    const budget = await Budget.find({});
    return budget;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getBudgetItem(id) {
  try {
    await dbConnect();
    const budgetItem = await Budget.findById(id);
    return budgetItem;
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateBudgetItem(id, values) {
  try {
    await dbConnect();
    const budgetItem = await Budget.findByIdAndUpdate(id, { ...values }, { new: true });
    return budgetItem;
  } catch (err) {
    throw new Error(err);
  }
}

export async function addBudgetItem(item) {
  try {
    await dbConnect();
    const budgetItem = new Budget(item);
    await budgetItem.save();
    return budgetItem;
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteBudgetItem(id) {
  try {
    await dbConnect();
    const deletedItem = await Budget.findByIdAndRemove(id);
    return deletedItem;
  } catch (err) {
    throw new Error(err);
  }
}
