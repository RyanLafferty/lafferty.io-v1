import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Document, Page, setOptions } from 'react-pdf';

setOptions({
  cMapUrl: 'cmaps/',
  cMapPacked: true,
});

const styles = theme => ({});

class PDFViewer extends Component {  
  render() {  
    return (
      <div>
        <Document
          file="resume-wave-old.pdf"
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PDFViewer);
