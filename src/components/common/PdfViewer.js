import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { Box, Button, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Document, Page,
} from 'react-pdf/dist/esm/entry.webpack';

const PdfViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <Grid container>
        <Box mx={3}>
          <Button onClick={() => setPageNumber(pageNumber - 1)}>back</Button>
        </Box>
        <Box mx={3}>
          <span>
            Page
            {' '}
            {pageNumber}
            {' '}
            of
            {' '}
            {numPages}
          </span>
        </Box>
        <Box mx={3}>
          <Button onClick={() => setPageNumber(pageNumber + 1)}>next</Button>
        </Box>
      </Grid>
    </div>
  );
};

PdfViewer.propTypes = {
  pdf: PropTypes.object.isRequired,
};
export default PdfViewer;
