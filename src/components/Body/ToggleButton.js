import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import "./Body.css";
import "../../style.css";

export default function ToggleButton(props) {
  return (
    <DarkModeToggle
      onChange={props.triggerToggle}
      checked={props.toggle}
      size={60}
    />
  );
}
