import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import Link from '@material-ui/core/Link';

import NavigationBar from './navBar/NavigationBar'
import LoginButton from '../login/loginButton'
import RegisterButton from '../login/registerButton'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 2,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function StickyHeader(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
        <NavigationBar />  
        <IconButton>
          <SearchIcon />
        </IconButton>
        <LoginButton />
        <RegisterButton />
    </React.Fragment>
  );
}

StickyHeader.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};