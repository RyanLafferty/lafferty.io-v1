import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({});


class Invalid extends React.Component {
  render() {
    return (
      <div>
        <Typography>Invalid Path</Typography>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Invalid);
