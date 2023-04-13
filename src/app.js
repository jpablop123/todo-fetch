/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let Andy = document.getElementById("myexcuse");

window.onload = function juanp() {
  let quien = ["daniel", "odont", "milo", "roland"];
  let que = ["se comio", "se orino", "dano", "rompio"];
  let quecosa = ["mi tarea", "las llaves", "el carro"];
  let cuando = [
    "antes de clase",
    "a tiempo",
    "cuando termine",
    "en almuerzo",
    "mientras rezaba",
  ];
  let variableloca = Math.random() * 3;

  let quienIndx = Math.floor(variableloca);
  let queIndx = Math.floor(variableloca);
  let quecosaIndx = Math.floor(variableloca);
  let cuandoIndx = Math.floor(variableloca);

  return (
    quien[quienIndx] +
    " " +
    que[queIndx] +
    " " +
    quecosa[quecosaIndx] +
    " " +
    cuando[cuandoIndx]
  );
};
Andy.innerHTML = juanp();
