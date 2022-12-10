//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const body = document.querySelector("body");
const div21 = document.createElement("div");
body.append(div21)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div22 = document.createElement("div");
const p22 = document.createElement("p")
div22.appendChild(p22)
body.append(div22)

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div23 = document.createElement("div");
for(i=0; i<6; i++) {
	const p23 = document.createElement("p");
	div23.append(p23);
	}
body.append(div23);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const p24 = document.createElement("p");
p24.innerText = "Soy dinámico!"
body.append(p24);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const locate25 = document.querySelector(".fn-insert-here");
locate25.innerText = 'Wubba Lubba dub dub'

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul26 = document.createElement("ul");
for(i=0; i<apps.length; i++) {
	const li26 = document.createElement("li");
	li26.innerText = apps[i];
	ul26.append(li26);
}
body.append(ul26);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const remove27 = document.querySelectorAll(".fn-remove-me");
for (i = 0; i < remove27.length; i++ ) {
	remove27[i].remove();
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	//Recuerda que no solo puedes insertar elementos con .appendChild.

const p28 = document.createElement("p");
p28.innerText = "Voy en medio!";
document.body.insertBefore(p28, div22);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const div29 = document.querySelectorAll(".fn-insert-here")
for (div of div29) {
	div.innerText = "Voy dentro!"
}

