// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const ul$$ = document.createElement('ul');
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

for (const countrie of countries) {
    const li$$ = document.createElement('li');
    li$$.textContent = countrie;
    ul$$.appendChild(li$$)
}
document.body.appendChild(ul$$)


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementWithClass$$ = document.querySelector('.fn-remove-me');

elementWithClass$$.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const ul2$$ = document.createElement('ul');
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
for (const car of cars) {
    const li2$$ = document.createElement('li');
    li2$$.textContent = car;
    ul2$$.appendChild(li2$$)
}
const divWithClass$$ = document.querySelector('[data-function="printHere"]'); 
divWithClass$$.appendChild(ul2$$);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const ul3$$ = document.createElement('ul');

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const countrie of countries2) {
    const div$$ = document.createElement('div');

    const h4$$ = document.createElement('h4');
    h4$$.textContent = countrie.title
    div$$.appendChild(h4$$); 
    console.log(countrie.imgUrl);

    const img$$ = document.createElement('img');
    img$$.src = countrie.imgUrl
    div$$.appendChild(img$$);
    ul3$$.appendChild(div$$)
    ul3$$.appendChild(div$$)
}
document.body.appendChild(ul3$$)


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.
const buttonForRemove$$ = document.createElement('button');
buttonForRemove$$.style = 'padding: 5px; width: 80px; background-color: lightblue; border-radius: 5px';
buttonForRemove$$.textContent = 'click me 😏'
buttonForRemove$$.addEventListener('click', function(){
    const findDivs$$ = document.querySelectorAll('div');
    findDivs$$[findDivs$$.length-1].remove()
    buttonForRemove$$.textContent = 'OH MY GOD!! 🙆🏻‍♂️'
    buttonForRemove$$.style = 'background-color: yellow'

})
document.body.appendChild(buttonForRemove$$);



// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

