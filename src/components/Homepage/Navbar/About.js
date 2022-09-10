import React from "react";
import "../Homepage.css";
import "../../../style.css";

export default function About(props) {
  return (
    <div className={`about--container ${props.toggle ? "dark--one" : "light--one"}`}>
      <h3>About Us:</h3>
      <p className={`about--para`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor
        pretium viverra suspendisse potenti nullam ac. Malesuada proin libero
        nunc consequat interdum varius sit amet mattis. Pretium quam vulputate
        dignissim suspendisse in est ante. Etiam tempor orci eu lobortis.
        Faucibus nisl tincidunt eget nullam non nisi est. Egestas fringilla
        phasellus faucibus scelerisque eleifend donec pretium. Placerat
        vestibulum lectus mauris ultrices eros in cursus. Ultricies lacus sed
        turpis tincidunt. Ut consequat semper viverra nam. Molestie at elementum
        eu facilisis.
      </p>
    </div>
  );
}
