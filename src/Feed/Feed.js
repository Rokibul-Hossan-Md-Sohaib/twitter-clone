import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import TweetBox from '../TweetBox/TweetBox';
import "./Feed.css"
import imageA from "../Images/rk.jpg";
import db from '../firebase';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const [post, setPost] =useState([])

    useEffect(() => {
        
      db.collection("post").onSnapshot(snapshot =>
          setPost(snapshot.docs.map(doc => doc.data()))
          
         )
         
     
        },[]);
    return (
        <div className="feed">
          <div className="feed_header" >
            <h2> Home</h2>
            </div>
            <TweetBox></TweetBox>
           <FlipMove>
            {post.map(data =>(
            <Post 
            key={post.text}
            displayName={data.displayName}
            username={data.username}
             verified={true}
            text={data.text}
            avater={data.avater}
            image={data.image}

            />
             ))} 
             </FlipMove>
            <Post 
            avater="https://gravatar.com/avatar/133cd0e3eec0e589e7d3e1bd0077873f?s=400&d=robohash&r=x"
            image="https://media.giphy.com/media/w4CIKkZDQWIoWLsxKZ/giphy.gif"/>
           
        </div>
    );
}; 

export default Feed;