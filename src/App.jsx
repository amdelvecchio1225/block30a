import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "./components/List";
import PostDetail from "./components/Details";

function App() {
  return (
    <>
      {/* //C: you seem to be using react router 5 syntax for the routes here. make
      sure to be using react router 6 syntax //C: for your path for PostList
      there is no need for a *. you can simply put "/" //C: the base url for the
      api already ends with posts so do you really need to add it for your
      second route here? */}
      <Routes>
        <Route exact path="/" component={PostList} />
        <Route path="/posts/:postId" component={PostDetail} />
      </Routes>
    </>
  );
}

export default App;
