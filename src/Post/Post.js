import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import imageA from "../Images/rk.jpg";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = ({displayName, username, verified, text,image,avater}) => {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={imageA} />
            </div>
              <div className="post_body">
                  <div className="post_header">
                      <div className="post_headertext">
                          <h3>
                              Rokibul Hossan{" "}
                              <span className="post_headerSpecial">
                                  <VerifiedUserIcon className="post_badge"/> @rock69
                              </span>
                          </h3>
                      </div>
                      <div className="post_headerDescription">
                          <p> This Twitter  Clone Is Made By Rokibul Hossan </p>
                      </div>
                  </div>
                  <img src="https://media.giphy.com/media/cOtqHCHuZH9kZlNOaI/giphy.gif"
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
};

export default Post;