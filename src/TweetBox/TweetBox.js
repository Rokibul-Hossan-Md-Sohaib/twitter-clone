import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import image from "../Images/rk.jpg"
import "./TweetBox.css";
import db from "../firebase";

const TweetBox = () => {
    const [tweetMessage , setTweetMessage ]=useState("")
    const [tweetImage , setTweetImage ]=useState("")

    const sendTweet =e =>{
        e.preventDefault();
        db.collection('post').add({
            displayName: "rock rokib",
            username:"rocy",
            verified:true,
            text: tweetMessage,
            image:tweetImage,
            avater:"https://gravatar.com/avatar/133cd0e3eec0e589e7d3e1bd0077873f?s=400&d=robohash&r=x"
        })
        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className ="tweetBox">
            <form>
                <div className ="tweetBox_input">
                <Avatar src={image}/>
               
                <input
                onChange={e => setTweetMessage (e.target.value)}
                 value ={tweetMessage}
                placeholder="What is your mind" type="text"/>
                
                </div>
                <input 
                onChange={e => setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox_image" 
                placeholder="Option: Enter image URL"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
            
        </div>
    );
};

export default TweetBox;