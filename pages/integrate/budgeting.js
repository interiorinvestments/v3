import { makeStyles } from '@material-ui/core';
import AuthGuard from 'components/common/AuthGuard';
import Page from 'components/common/Page';
import DashboardLayout from 'layouts/DashboardLayout';
// import { getBudget } from 'lib/budget';
// import { getItems } from 'lib/item';
// import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react';
import BudgetingView from 'views/integrate/BudgetingView';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: 'calc(100vh - 64px)',
    paddingBottom: theme.spacing(3),
  },
}));

const BudgetingPage = () => {
  const classes = useStyles();
  // const [items, setItems] = useState(null);
  // const [budget, setBudget] = useState(null);

  // const fetchItems = async () => {
  //   try {
  //     const data = await getItems();
  //     const newItems = data.map((item) => {
  //       const _id = item._id.toString();
  //       return { ...item.toObject(), _id };
  //     });
  //     setItems(newItems);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const fetchBudget = async () => {
  //   try {
  //     const budgetData = await getBudget();
  //     const newBudget = budgetData.map((budgetItem) => {
  //       const _id = budgetItem._id.toString();
  //       return { ...budgetItem.toObject(), _id };
  //     });
  //     setBudget(newBudget);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(async () => {
  //   fetchItems();
  //   fetchBudget();
  // }, []);

  return (
    <DashboardLayout>
      <Page className={classes.root} title="Budgeting">
        <AuthGuard>
          <BudgetingView />
        </AuthGuard>
      </Page>
    </DashboardLayout>
  );
};

// BudgetingPage.propTypes = {
//   items: PropTypes.array.isRequired,
//   budget: PropTypes.array.isRequired,
// };

// export const getServerSideProps = async () => {
//   try {
//     const data = await getItems();
//     const budgetData = await getBudget();
//     // convert mongoose objectID to string
//     const budget = budgetData.map((budgetItem) => {
//       const _id = budgetItem._id.toString();
//       return { ...budgetItem.toObject(), _id };
//     });
//     // convert mongoose objectID to string
//     const items = data.map((item) => {
//       const _id = item._id.toString();
//       return { ...item.toObject(), _id };
//     });

//     return { props: { items, budget } };
//   } catch (err) {
//     console.error(err);
//     return { props: {} };
//   }
// };

export default BudgetingPage;
