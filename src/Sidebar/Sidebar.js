import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import Sidebaroption from './Sidebaroption';
import { Button } from '@material-ui/core';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar_twitterIcon"/>

            <Sidebaroption active Icon={HomeIcon} text="Home"/>
            <Sidebaroption Icon={SearchIcon} text="Explore"/>
            <Sidebaroption Icon={NotificationsIcon} text="Notificatios"/>
            <Sidebaroption Icon={MailOutlineIcon} text="Messages"/>
            <Sidebaroption Icon={BookmarkBorderIcon } text="Bookmarks"/>
            <Sidebaroption Icon={ListAltIcon} text="List"/>
            <Sidebaroption Icon={PermIdentityIcon} text="Profile"/>
            <Sidebaroption Icon={MoreHorizIcon} text="More"/>
            <Button variant="outlined" className="sidebar-tweet" fullWidth>Tweet</Button>
           
            </div>
    );
};

export default Sidebar;