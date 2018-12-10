import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import EmailIcon from '@material-ui/icons/Email';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import GoMarkGithub from 'react-icons/lib/go/mark-github';

const styles = theme => ({});


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
        textAlign: 'center',
    },
    link: {
        color: '#fff',
        textDecoration: "none",
    },
    chipContainer: {
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        justifyContent: 'center'
    },
    chip: {
        margin: 10,
    }
  }

  handleEmailClick = () => {
      //TODO
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

        <br />

        <div style={this.style.chipContainer}>
            <Chip
                avatar={<Avatar> <EmailIcon /> </Avatar>}
                label="rlafferty@hotmail.com"
                onClick={this.handleEmailClick}
                style={this.style.chip}
            />
            <Chip
                avatar={<Avatar> <FaLinkedinSquare /> </Avatar>}
                label="LinkedIn"
                onClick={this.handleLinkedInClick}
                style={this.style.chip}
            />
            <Chip
                avatar={<Avatar> <GoMarkGithub /> </Avatar>}
                label="Github"
                onClick={this.handleGithubClick}
                style={this.style.chip}
            />
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Contact);
