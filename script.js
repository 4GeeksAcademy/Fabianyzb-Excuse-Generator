// Arreglos de elementos para crear excusas aleatorias
let who = ["El perro", "Mi abuela", "La tortuga", "Mi canario"];
let action = ["se comió", "orinó en", "aplastó", "rompió"];
let what = ["mi tarea", "las llaves", "el carro", "mi licencia"];
let when = [
  "antes de la clase",
  "justo a tiempo",
  "cuando terminé",
  "durante mi almuerzo",
  "mientras jugaba al pc",
];

function generateExcuse() {
  // Generar índices aleatorios para cada arreglo
  let randomWhoIndex = Math.floor(Math.random() * who.length);
  let randomActionIndex = Math.floor(Math.random() * action.length);
  let randomWhatIndex = Math.floor(Math.random() * what.length);
  let randomWhenIndex = Math.floor(Math.random() * when.length);

  // Construir la excusa aleatoria
  let excuse = `${who[randomWhoIndex]} ${action[randomActionIndex]} ${what[randomWhatIndex]} ${when[randomWhenIndex]}.`;

  // Establecer la excusa en el elemento HTML
  document.getElementById("excuse").innerHTML = excuse;
}
