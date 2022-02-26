import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"
function Widgets(){
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets_widgetContainer">
        <h2> What's happening </h2>
      <TwitterTweetEmbed tweetId={"1497137892296388609"} />
      <TwitterTimelineEmbed
            sourceType="profile"
            screenName="narendramodi"
            options={{ height: 400 }}
          />
      </div>
    </div>
  );
}

export default Widgets;
