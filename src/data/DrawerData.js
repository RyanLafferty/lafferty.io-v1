import React from 'react';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import ChatIcon from '@material-ui/icons/Chat';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import EmailIcon from '@material-ui/icons/Email';


export const listItems = (
  <div>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>

    <Link to="/work" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
            <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Work" />
      </ListItem>
    </Link>

    <Link to="/projects" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
    </Link>

    <Link to="/blog" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <ChatIcon />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItem>
    </Link>

    <Link to="/about" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </Link>

    <Link to="/resume" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <InsertDriveFileIcon />
        </ListItemIcon>
        <ListItemText primary="Resume" />
      </ListItem>
    </Link>

    <Link to="/contact" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
    </Link>
  </div>
);