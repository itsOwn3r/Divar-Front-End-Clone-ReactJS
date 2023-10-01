import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cat from "./components/Categories/Cat";
import SubCat from "./components/Categories/SubCat";
import Ads from "./components/Ads/Ads";
import Login from "./components/LogInUp/Login";
import My from "./components/Home/User/My";
import Posts from "./components/Home/User/Posts";
import Add from "./components/Home/Add";
import AddPost from "./components/Home/AddPost2";
import Search from "./components/Home/Search";
import Chats from "./components/Home/Chat/Chats";
import Chat from "./components/Home/Chat/Chat";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/cat" element={<Cat />} />

        <Route exact path="/add" element={<Add />} />
        <Route exact path="/add/:post" element={<AddPost />} />

        <Route exact path="cat/:id" element={<SubCat />} />

        <Route exact path="v/:id" element={<Ads />} />

        <Route path="/chat" element={<Chats />} />
        <Route path="/chat/:id" element={<Chat />} />


        <Route path="/my" element={<My />} />

        <Route path="/my/posts" element={<Posts />} />

        <Route path="/s/:query" element={<Search />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
