// App.jsx
import React from "react";
import Nav from "./components/Nav";
import Home from "./router/Home";
import About from "./router/About";
import Skill from "./router/Skill";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Nav />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skill"><Skill /></section>
      <Footer/>
    </div>
  );
}

export default App;
