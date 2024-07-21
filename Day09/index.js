// Activity 1 : Selecting and Manipulating Elements.
console.log("/n Activity 1");
// task-1
document.getElementById("heading").innerHTML = "You can do it.";

// task-2
const heading = document.querySelector(".heading");
heading.style.backgroundColor = "yellow";

// Activity 2 : Creating and Appending Elements.
console.log("/n Activity 2");
// task-3
const newDiv = document.createElement("div");
newDiv.textContent = "Hello There...hope you are doing extreamly well";
document.body.appendChild(newDiv);

//task-4
const newUL = document.createElement("ul");
newUL.id = 'list'
document.body.appendChild(newUL);

let addLI;
let i=1;
addLI = (text) => {
  newLI = document.createElement("li");
  const textnode = document.createTextNode(text);
  textnode.id = `element-${i}`;
  newLI.appendChild(textnode);
  document.getElementById('list').appendChild(newLI);
  i++;
};
addLI("hello bhai");
addLI("Do your best");
addLI("Don't give up");





// Activity 3 : Removing Elements.
console.log("/n Activity 3");
// task-5
newDiv.remove();

// task-6
const lastChild = newUL.lastChild;
newUL.removeChild(lastChild);



// Activity 4 : Modifying Attributes and Classes.
console.log("/n Activity 4");
// task-7
const newSpan = document.createElement("span");
newSpan.id = 'parah';
newSpan.innerText = 'UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU'
newSpan.style.backgroundColor="azure";
document.body.appendChild(newSpan);

document.getElementById('parah').style.backgroundColor = 'pink';

//task-8
document.getElementById('element-1').classList.add('danger');
document.getElementById('element-1').classList.remove('safe');


// Activity 5 : Event Handling.
console.log("/n Activity 5");

const changer = ()=>{
    newSpan.textContent = "Changed";
}
const btn = document.getElementById('btn');
btn.addEventListener('click', changer);

const borderer = ()=>{
    btn.style.border = "2px solid orange";
}
btn.addEventListener('mouseover', borderer);





// Feature Requests
// feature f1
document.getElementById("heading").innerHTML = "Go All Out";

// feature f2
// refer to Activity-1/task-2

// feature f3
// refer to Activity-3/task-4


// feature f4
// refer to Activity-4/task-7


// feature f5
btn.addEventListener('click', ()=>{
    newSpan.style.fontWeight = 800;
    newSpan.style.padding = "5px 10px";
    newSpan.style.borderRadius = "10px";
});




