/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generador() {
  let who = ["The cat", "The bus driver", "My aunt", "A rat"];

  let action = ["stole", "broke", "lost", "threw"];

  let what = ["my homework", "my laptop", "the ID card"];

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whofr = Math.floor(Math.random() * who.length);

  let actionfr = Math.floor(Math.random() * action.length);

  let whatfr = Math.floor(Math.random() * what.length);

  let whenfr = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[whofr] +
    " " +
    action[actionfr] +
    " " +
    what[whatfr] +
    " " +
    when[whenfr] +
    "!";
}

document.querySelector("#boton").addEventListener("click", generador);
