import React from "react"
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import '../../styles/style.scss'

export const NavBar = () => {
  return (
    <nav>
      <AppBar position="static" className="appBar-header">
        <ul className="navbar-items-list">
          <li id="item-logo">
            <Link to="/">
              <logo>
                <img src="" />
              </logo>
            </Link>
          </li>
          <li id='item-title'>
            <Typography variant="h4">
            Audio 1337
            </Typography>
          </li>
        </ul>
      </AppBar>
    </nav>
  )
}
