//opgaven: få knappen til at skifte farve UDEN if's....

document.addEventListener("DOMContentLoaded", () => {

    let someButton = document.querySelector('#my-button');
    //console.log(someButton);
    let someColors = ['#eee', '#7f7'];

    someButton.addEventListener('click', () => {
        someButton.style.backgroundColor = someColors[1];
        someColors.reverse();

    });







}); // Afslutter: DOMContentLoaded    