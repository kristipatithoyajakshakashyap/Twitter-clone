import React,{useState} from 'react';
import './TweetBox.css';
import { Avatar, Button }  from '@material-ui/core';
import db from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function TweetBox(){
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const sendTweet = async(e) =>{
    e.preventDefault();
    const collectionRef = collection(db, "posts");
    const payload = {
      displayName: 'Kashyap',
      username: 'Thoyajaksha Kashyap',
      image: tweetImage,
      text: tweetMessage,
      avatar: "https://i.pinimg.com/474x/91/27/a5/9127a595d3a3421d984edc45230f6d9a.jpg"
    }
    await  addDoc(collectionRef, payload);

    setTweetMessage("");
    setTweetImage("");
  }
  return (
    <div className="tweetBox">
      <form>
          <div className="tweetBox_input">
              <Avatar src="https://i.pinimg.com/474x/91/27/a5/9127a595d3a3421d984edc45230f6d9a.jpg" />
            <input
              onChange={e => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="What's happening?"
              type="text" />
          </div>
          <input
           onChange={e => setTweetImage(e.target.value)}
           value={tweetImage}
           className="tweetBox_imageInput"
           placeholder="Enter image URL"
           type="text" />
         <Button
           onClick={sendTweet}
           type="submit"
           className="tweetBox_tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
