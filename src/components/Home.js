import React from "react";
import Main from "./Homepage/Main";
import Footer from "./Homepage/Footer";

export default function Home(props) {
  return (
    <section>
      <Main toggle={props.toggle} triggerToggle={props.triggerToggle} />
      <Footer toggle={props.toggle} />
    </section>
  );
}
