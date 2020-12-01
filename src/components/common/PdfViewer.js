import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import {
  Box,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
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

  const handleChange = (e, value) => {
    setPageNumber(value);
  };

  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <Box pl={12}>
        <Pagination count={numPages} page={pageNumber} onChange={handleChange} size="large" variant="rounded" />
      </Box>
    </div>
  );
};

PdfViewer.propTypes = {
  pdf: PropTypes.object.isRequired,
};
export default PdfViewer;
