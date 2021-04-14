import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import image from "../Images/rk.jpg"
import "./TweetBox.css"

const TweetBox = () => {
    return (
        <div className ="tweetBox">
            <form>
                <div className ="tweetBox_input">
                <Avatar src={image}/>
                <input placeholder="What is your mind" type="text"/>
                {/* <input placeholder="What is your mind" type="text"/> */}

                </div>
                <input className="tweetBox_image" placeholder="Option: Enter image URL"/>
                <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>
            
        </div>
    );
};

export default TweetBox;