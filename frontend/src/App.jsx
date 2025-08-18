// App.jsx
import React from "react";
import Nav from "./components/Nav";
import Home from "./router/Home";
import About from "./router/About";
import Skill from "./router/Skill";
import Projects from "./router/Projects";
import Contact from "./router/Contact";

function App() {
  return (
    <div>
      <Nav />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skill"><Skill /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
