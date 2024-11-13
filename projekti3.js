function display() {
    let screen = document.querySelector('ruutu');
    let buttons = document.querySelectorAll('.btn');
}
console.log('Screen element:', screen);
console.log('Buttons:', buttons);
console.log('Clear button:', clear);
console.log('Equal button:', equal);

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        let value = e.target.dataset.num;
        if (value !== undefined) {
            screen.value += value;
        }
    });
});

function clr() 
     { 
         document.getElementById("lasku").value = "" 
     } 
