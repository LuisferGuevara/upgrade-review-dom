// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const ul$$ = document.createElement("ul");
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

for (const countrie of countries) {
  const li$$ = document.createElement("li");
  li$$.textContent = countrie;
  ul$$.appendChild(li$$);
}
document.body.appendChild(ul$$);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementWithClass$$ = document.querySelector(".fn-remove-me");

elementWithClass$$.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const ul2$$ = document.createElement("ul");
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
for (const car of cars) {
  const li2$$ = document.createElement("li");
  li2$$.textContent = car;
  ul2$$.appendChild(li2$$);
}
const divWithClass$$ = document.querySelector('[data-function="printHere"]');
divWithClass$$.appendChild(ul2$$);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const ul3$$ = document.createElement("ul");

const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

function byeBye(param){
    param.remove()
}

for (const country of countries2) {
  const div$$ = document.createElement("div");
  const remove$$ = document.createElement('button')      
  const h4$$ = document.createElement("h4");
  h4$$.textContent = country.title;
  remove$$.textContent = "click me 😏";
  div$$.appendChild(h4$$);
  console.log(country.imgUrl);

  remove$$.addEventListener('click', () => byeBye(div$$))

  const img$$ = document.createElement("img");
  img$$.src = country.imgUrl;
  div$$.appendChild(img$$);
  ul3$$.appendChild(div$$);
  div$$.appendChild(remove$$)
}
document.body.appendChild(ul3$$);

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.
const buttonForRemove$$ = document.createElement("button");
buttonForRemove$$.style =
  "padding: 5px; width: 80px; background-color: lightblue; border-radius: 5px";
buttonForRemove$$.textContent = "click me 😏";
function removeButton() {
  const findDivs$$ = document.querySelectorAll("div");
  findDivs$$[findDivs$$.length - 1].remove();
  buttonForRemove$$.textContent = "OH MY GOD!! 🙆🏻‍♂️";
  buttonForRemove$$.style = "background-color: yellow";
}
buttonForRemove$$.addEventListener("click", () => removeButton());
document.body.appendChild(buttonForRemove$$);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.

// const button1$$ = document.createElement('button')
// button1$$.textContent = 'Remove Fist Element'
// button1$$.style = 'padding: 5px; width: ; background-color: chocolate; border-radius: 5px; margin: 10px; color:white'
// button1$$.addEventListener('click', function(){
//     const findDivs$$ = document.querySelectorAll('div');
//     findDivs$$[0].remove()
//     button1$$.textContent = 'BYE BYE FIRST!! 🙆🏻‍♂️'
//     button1$$.style = "padding: 5px; background-color: yellow; border-radius: 5px; margin: 10px; color:black"

// })
// const button2$$ = document.createElement('button')
// button2$$.textContent = 'Remove Second Element'
// button2$$.style = 'padding: 5px; width: ; background-color:#fabada; border-radius: 5px; margin: 10px; color:white'
// button2$$.addEventListener('click', function(){
//     const findDivs$$ = document.querySelectorAll('div');
//     findDivs$$[1].remove()
//     button2$$.textContent = 'BYE BYE SECOND!! 🙆🏻‍♂️'
//     button2$$.style = "padding: 5px; background-color: yellow; border-radius: 5px; margin: 10px; color:black"

// })
// const button3$$ = document.createElement('button')
// button3$$.textContent = 'Remove Third Element'
// button3$$.style = 'padding: 5px; width: ; background-color: tomato; border-radius: 5px; margin: 10px; color:white'
// button3$$.addEventListener('click', function(){
//     const findDivs$$ = document.querySelectorAll('div');
//     findDivs$$[2].remove()
//     button3$$.textContent = 'BYE BYE SECOND!! 🙆🏻‍♂️'
//     button3$$.style = "padding: 5px; background-color: yellow; border-radius: 5px; margin: 10px; color:black"

// })

// document.body.appendChild(button1$$)
// document.body.appendChild(button2$$)
// document.body.appendChild(button3$$)

for (const country of countries2) {
  let createDiv = document.createElement("div");
  createDiv.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl} />`;

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Here to Remove 😈";

  createDiv.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    createDiv.remove();
  });

  document.body.appendChild(createDiv);
}
