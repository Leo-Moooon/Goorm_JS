const h2 = document.querySelector('h2');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    if(input.value !== "") {
        h2.innerText = input.value;
        input.value = "";
    }
});