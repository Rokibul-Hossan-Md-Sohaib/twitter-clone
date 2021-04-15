import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder=" Search Twitter" type="text" />
            </div>
            <div className="widgets_widgetContainer">
                <h2> What's happening </h2>
            <TwitterTweetEmbed tweetId={'1382403878704926724'}/>
            <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="rockzz"
            option={{height:400}}/>
             <TwitterShareButton
    url={'https://www.facebook.com/rock.rokib'}
    options={{ text: "#reactjs is awesome", via: "rock.rokib" }} /*ekhane amr witter er HossanRokibul bosate hobe tahole amar sob post show korbe*/

  />
            </div>
        </div>
    );
};

export default Widgets;