import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "./components/List";
import PostDetail from "./components/Details";

function App() {
  return (
    <>
      <Routes>
          <Route exact path="/*" component={PostList} />
          <Route path="/posts/:postId" component={PostDetail} />
      </Routes>
    </>
  );
}

export default App;
