import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

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
