import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({});

class Contact extends React.Component {
  style = {
    root: {
        maxWidth: 1000,
    },
    link: {
        color: '#fff',
        textDecoration: "none",
    },
  }

  render() {
    return (
      <div style={this.style.root}>
        <Typography variant="headline">
          If you are interested in getting a hold of me consider contacting me through one of the methods below:
        </Typography>
        <br />
        <Typography variant="headline">
          Email: rlafferty1@hotmail.com
        </Typography>
        <Typography variant="headline" href="https://www.linkedin.com/in/ryan-lafferty-28a5a9bb/">
          <a href="https://www.linkedin.com/in/ryan-lafferty-28a5a9bb/" style={this.style.link}>
            LinkedIn
          </a>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Contact);
