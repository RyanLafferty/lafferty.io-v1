import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PDFViewer from './../components/PDFViewer';

const styles = theme => ({});


class Resume extends React.Component {
  render() {
    return (
      <div>
        <PDFViewer />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Resume);
