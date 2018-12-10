import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({});


class Work extends React.Component {
  render() {
    return (
      <div>
        <Typography>Coming Soon</Typography>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Work);
