import React, { useEffect, useState } from "react";
import db from "../firebase";
import "../styles/StoryReel.css";
import Story from "./Story";

function StoryReel() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    db.collection("story").onSnapshot((snapshot) =>
      setStory(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  return (
    <div className="storyReel">
      {story.map((post) => (
        <Story
          key={post.id}
          profileSrc={post.data.profileSrc}
          title={post.data.title}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default StoryReel;

/* <Story
        image="https://tse4.mm.bing.net/th?id=OIP.QydG1WVjPnWcazdh7iQzcwHaF1&pid=Api&P=0&w=202&h=160"
        profileSrc=""
        title="hello"
      />
      <Story
        image="https://cdn2.justwineapp.com/assets/article/2019/04/cannabis-infused-beer-drink-420-thc-beer-cbd-beer-marijuana-edibles-justbeer-1200x630.jpg"
        profileSrc=""
        title="hello"
      />
      <Story image="" profileSrc="" title="hello1" />
      <Story
        image="https://cdn2.justwineapp.com/assets/article/2019/04/cannabis-infused-beer-drink-420-thc-beer-cbd-beer-marijuana-edibles-justbeer-1200x630.jpg"
        profileSrc=""
        title="hello"
      />
      <Story
        image="https://tse4.mm.bing.net/th?id=OIP.QydG1WVjPnWcazdh7iQzcwHaF1&pid=Api&P=0&w=202&h=160"
        profileSrc=""
        title="hello5"
      /> */
