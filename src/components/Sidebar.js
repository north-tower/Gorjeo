import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import  BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import  MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PermIdentityIcon  from "@mui/icons-material/PermIdentity";
import {Button} from "@mui/material";
import './sidebar.css';


function Sidebar(){
    // const vals = [['Home', <HomeIcon />], ['Explore', <SearchIcon />], ['Notification', <NotificationsIcon />]]
    return(
        <div className="sidebar">
            <TwitterIcon className="sidebar_twitterIcon" />
            <SidebarOption active Icon= <HomeIcon /> text="Home" />
            <SidebarOption Icon= <SearchIcon /> text="Explore" />
            <SidebarOption Icon = <NotificationsIcon /> text="Notifications" /> 
            <SidebarOption Icon = <MailOutlineIcon /> text="Messages" /> 
            <SidebarOption Icon = <BookmarkBorderIcon /> text="Bookmarks" /> 
            <SidebarOption Icon = <ListAltIcon /> text="Lists" />
            <SidebarOption Icon = <PermIdentityIcon /> text="Profile" /> 
            <SidebarOption Icon = <MoreHorizIcon /> text="More" /> 

            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button> 
        </div>
    )
}

export default Sidebar;