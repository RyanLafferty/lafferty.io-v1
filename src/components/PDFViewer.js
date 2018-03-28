import React, { Component } from 'react';
import { Document, Page, setOptions } from 'react-pdf/dist/entry.noworker';

setOptions({
  cMapUrl: 'cmaps/',
  cMapPacked: true,
});


class PDFViewer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div >
        <Document
          file="resumeGeneric.pdf"
        >
          <Page pageNumber={1} width={this.state.width * 0.70} />
        </Document>
      </div>
    );
  }
}

export default PDFViewer;
