import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Hobbies from "../../containers/hobbies/Hobbies";
import Footer from "../../components/footer/Footer";

function Home(props) {
  return (
    <div className="page-transition">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Hobbies theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
