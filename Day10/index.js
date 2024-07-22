// Activity 1 : Basic Event Handling
// task-1
const btn1 = document.getElementById('btn-1');
const txt1 = document.getElementById('txt-1');
const oldText = txt1.innerText;
let changer = false;
btn1.addEventListener('click', ()=>{
    changer = !changer;
    /* if(changer){
            txt1.innerHTML = "<h2> TEXT-CHANGED </h2>";
        } else {
            txt1.innerHTML = oldText;
        }
    */
    txt1.innerHTML = (changer)?"<h2> TEXT-CHANGED </h2>":oldText;
    
});

// task-2
const btn2 = document.getElementById('btn-2');
const img1 = document.getElementById('img-1');
// changer = false;
btn2.addEventListener('dblclick', ()=>{
    // (!changer)?img1.classList.add('hide'):img1.classList.remove('hide');
    // changer = !changer;
    img1.classList.toggle('hide');
})



// Activity 2: Mouse Events
// task-3
const txt2 = document.getElementById('txt-2');
txt2.addEventListener('mouseover', ()=>{
    txt2.style.backgroundColor = 'red';
}) 
// task-4
txt2.addEventListener('mouseout', ()=>{
    txt2.style.backgroundColor = 'gray';
}) 


// Activity 3 : Keyboard Events
// task-5
const inp1 = document.getElementById('inp-1');
const p1 = document.getElementById('p-1');
inp1.addEventListener('keydown', (e)=>{
    p1.innerText = "Key Down : "+ e.key;
})

// task-6
const p2 = document.getElementById('p-2');

inp1.addEventListener('keyup', (e) => {
    p2.innerText = "Key Up : "+e.key;
});



// Activity 4 : 
// task-7
const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
        //console.log(`${key}: ${value}`);
        const newElement = document.createElement('p');
        newElement.innerText = `${key}: ${value}`;
        document.body.appendChild(newElement);
    });
});

// task-8
document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('options');
    const displayParagraph = document.getElementById('selectedValue');

    selectElement.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        displayParagraph.textContent = `Selected value: ${selectedValue}`;
    });
    selectElement.addEventListener('click',(e)=>{
        const selectedValue = e.target.value;
        displayParagraph.textContent = `Selected value: ${selectedValue}`;
    })
});


// task-10
document.addEventListener('DOMContentLoaded', () => {
    const parentElement = document.getElementById('parentElement');
    const displayParagraph = document.getElementById('selectedValue');
    const addElementButton = document.getElementById('addElement');

    // Event listener for the parent element
    parentElement.addEventListener('change', (event) => {
        if (event.target && event.target.classList.contains('dynamic-select')) {
            const selectedValue = event.target.value;
            displayParagraph.textContent = `Selected value: ${selectedValue}`;
        }
    });

    // Add new select element dynamically
    addElementButton.addEventListener('click', () => {
        const newSelect = document.createElement('select');
        newSelect.className = 'dynamic-select';

        const option1 = document.createElement('option');
        option1.value = 'Option 3';
        option1.textContent = 'Option 3';

        const option2 = document.createElement('option');
        option2.value = 'Option 4';
        option2.textContent = 'Option 4';

        newSelect.appendChild(option1);
        newSelect.appendChild(option2);

        parentElement.appendChild(newSelect);
    });
});


// feature request
// ref to all the tasks




