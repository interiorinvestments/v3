import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import {
  Box,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import {
  Document, Page,
} from 'react-pdf/dist/esm/entry.webpack';

const PdfViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const box = useRef(null);

  const handleChange = (e, value) => {
    setPageNumber(value);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width={700} />
      </Document>
      <Box pl={12}>
        <Pagination count={numPages} page={pageNumber || 1} onChange={handleChange} size="large" variant="text" />
        <div ref={box} />
      </Box>
    </div>
  );
};

PdfViewer.propTypes = {
  pdf: PropTypes.string.isRequired,
};
export default PdfViewer;
