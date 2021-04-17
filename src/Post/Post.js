import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import "./Post.css";
import imageA from "../Images/rk.jpg";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = forwardRef(({ 
    avater ,
    displayName, 
    username ,
    verified, 
    text,
    image} , ref) => {
    return (
        <div className="post" ref ={ref}>
            <div className="post_avatar">
                <Avatar src={avater} />
            </div>
              <div className="post_body">
                  <div className="post_header">
                      <div className="post_headertext">
                          <h3>
                              {displayName}{" "}
                              <span className="post_headerSpecial">
                                {verified &&  <VerifiedUserIcon className="post_badge"/> }
                                {username}
                              </span>
                          </h3>
                      </div>
                      <div className="post_headerDescription">
                          <p>{text} </p>
                      </div>
                  </div>
                  <img src={image}
                  alt=""/>
                  <div className="post_footer">
                    <ChatBubbleIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                  </div>
              </div>
        </div>
    );
});

export default Post;