import React, { useState, useEffect } from "react";
import styles from "./Layout.module.css";
import detectiveImg from "../../assets/images/detective.avif";

var text = new Array(
  "This is Agent C from the future.\nSomething has been into the systems of TPA (Temporal Protection Authority).",
  "We still don't know if it's a deed of a person or something else. All we have is this code: \nu005400520024",
  "But this is horrifying. The thing is trying to change major historical events.",
  "And also, don't get surprised if you don't find the history as you know it, because it is not as you know it.",
  "It is not as you know it. . ."
);
var speed = 75;
var index = 0;
var length = text[0].length;
var textPos = 0;
var contents = "";

function rePlay() {
  textPos = 0;
  if (index >= text.length - 1) {
    window.location.reload();
  }
  typewriter();
  dontShowButtons();
}

function nextText() {
  textPos = 0;
  index++;
  if (index !== text.length) {
    length = text[index].length;
    dontShowButtons();
    typewriter();
  }
  if (index >= text.length - 1) {
    //document.getElementById("next").onclick = "";
  }
}
function typewriter() {
  contents = " ";
  var destination = document.querySelector(".typedtext");
  destination.innerHTML = contents + text[index].substring(0, textPos);

  if (textPos++ === length) {
    setTimeout(showButtons, 1000);
  } else {
    setTimeout(typewriter, speed);
  }
}
function showButtons() {
  document.querySelector(".buttons").style.display = "flex";
}
function dontShowButtons() {
  document.querySelector(".buttons").style.display = "none";
}

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={detectiveImg} alt="Detective" />
          <div className={styles.caption}>Agent C</div>
        </div>
        <div className={styles.textBox} onDoubleClick={typewriter}>
          <div id="typedtext" className={styles.typedtext}></div>
          <div id="buttons" className={styles.buttons}>
            <button id="replay" onClick={rePlay}>
              <i className={styles.symbol}>replay</i> Replay
            </button>
            <button id="next" onClick={nextText}>
              Next <i className={styles.symbol}>navigate_next</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
