import { useEffect, useState } from 'react';
import {
  Check as CheckIcon,
  CheckSquare as CheckSquareIcon,
  File as FileIcon,
  FileText as FileTextIcon,
} from 'react-feather';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import Label from 'components/common/Label';
import PropTypes from 'prop-types';
import formatCurrency from 'utils/formatCurrency';

const useStyles = makeStyles((theme) => ({
  root: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  actionIcon: {
    marginRight: theme.spacing(1),
  },
  back: {
    marginTop: theme.spacing(2),
  },
}));

const ProposalInfo = ({
  proposal, setProposal, className, ...rest
}) => {
  const classes = useStyles();
  const [invoice, setInvoice] = useState(false);

  useEffect(() => {
    const getData = async () => {
      if (proposal.PL_INVFULL === 'Y') {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER}/api/invoice`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                odbcString: 'DSN=illi',
                proposalNum: proposal.PL_FILE,
              }),
            },
          );
          const invoiceNum = await response.json();
          setInvoice(invoiceNum[0].RI_INVOICE);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getData();
  }, [proposal.PL_INVFULL, proposal.PL_FILE]);
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        title="Proposal"
        action={<Label color="primary">{proposal.status}</Label>}
      />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>#</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {proposal.PL_FILE}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Date</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {proposal.PL_CRDATE}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Client</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {proposal.PL_BUYNAME}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>Amount</TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {formatCurrency(proposal.PL_SELL * 100)}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Description
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="textSecondary">
                {proposal.PL_DESC}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Box p={1} display="flex" flexDirection="column" alignItems="flex-start">
        <Button
          href={`https://custom.interiorinvestments.com/content/onlinemanagement/td-proposal.asp?Proposal=${proposal.PL_FILE.trim()}&Company=II&Location=ILLincolnshire`}
          target="_blank"
        >
          <FileIcon className={classes.actionIcon} />
          Proposal
        </Button>
        {proposal.PL_ORDATE !== '1899-12-30' && (
          <Button
            href={`https://custom.interiorinvestments.com/content/onlinemanagement/td-confirmation.asp?Proposal=${proposal.PL_FILE.trim()}&Company=II&Location=ILLincolnshire`}
            target="_blank"
          >
            <CheckIcon className={classes.actionIcon} />
            Confirmation
          </Button>
        )}
        {proposal.PL_ALLDATE !== '1899-12-30' && (
          <Button
            href={`https://custom.interiorinvestments.com/content/onlinemanagement/td-acknowledgement.asp?Proposal=${proposal.PL_FILE.trim()}&Type=Install&Company=II&Location=ILLincolnshire`}
            target="_blank"
          >
            <CheckSquareIcon className={classes.actionIcon} />
            Acknowledgement
          </Button>
        )}
        {proposal.PL_INVFULL === 'Y' && (
          <Button
            href={`https://custom.interiorinvestments.com/content/onlinemanagement/td-invoice.asp?Invoice=,${invoice}&Proposal=${proposal.PL_FILE.trim()}&Company=II&Location=ILLincolnshire`}
            target="_blank"
            disabled={!invoice}
          >
            <FileTextIcon className={classes.actionIcon} />
            Invoice
          </Button>
        )}
        <Button
          className={classes.back}
          onClick={() => setProposal(false)}
          variant="outlined"
          color="secondary"
        >
          Back
        </Button>
      </Box>
    </Card>
  );
};
ProposalInfo.propTypes = {
  proposal: PropTypes.object.isRequired,
  setProposal: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ProposalInfo;
