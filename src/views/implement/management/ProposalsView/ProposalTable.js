import { forwardRef } from 'react';
import {
  ArrowDownward,
  ChevronLeft,
  ChevronRight,
  Clear,
  FirstPage,
  LastPage,
  Search,
} from '@material-ui/icons';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};

const ProposalTable = ({ data, setProposal }) => (
  <div style={{ maxWidth: '100%' }}>
    <MaterialTable
      icons={tableIcons}
      columns={[
        { title: 'Proposal #', field: 'PL_FILE', type: 'numeric' },
        { title: 'Date', field: 'PL_CRDATE', type: 'date' },
        { title: 'Client Name', field: 'PL_BUYNAME' },
        { title: 'Description', field: 'PL_DESC' },
        { title: 'Amount', field: 'PL_SELL', type: 'currency' },
        { title: 'Status', field: 'status' },
      ]}
      data={data}
      title="Proposals"
      onRowClick={(e, rowData) => setProposal(rowData)}
      isLoading={data.length === 0}
    />
  </div>
);

ProposalTable.propTypes = {
  data: PropTypes.array.isRequired,
  setProposal: PropTypes.func.isRequired,
};

export default ProposalTable;
