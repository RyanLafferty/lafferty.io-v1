import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import EmailIcon from 'material-ui-icons/Email';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import GoMarkGithub from 'react-icons/lib/go/mark-github';


const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
      }),
});

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

  handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ryan-lafferty-28a5a9bb/');
  }

  handleGithubClick = () => {
    window.open('https://github.com/ryanlafferty');
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div style={this.style.root}>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h3">
            If you are interested in getting a hold of me consider contact through one of the methods below:
          </Typography>
        </Paper>

        <Chip
            avatar={<Avatar> <EmailIcon /> </Avatar>}
            label="rlafferty@hotmail.com"
        />
        <Chip
            avatar={<Avatar> <FaLinkedinSquare /> </Avatar>}
            label="LinkedIn"
            onClick={this.handleLinkedInClick}
        />
        <Chip
            avatar={<Avatar> <GoMarkGithub /> </Avatar>}
            label="Github"
            onClick={this.handleGithubClick}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Contact);
