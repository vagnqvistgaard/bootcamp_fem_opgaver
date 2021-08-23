//skjul html-elementer vha js...

document.addEventListener("DOMContentLoaded", () => {

    let elementButton = document.querySelector('.knap');
    let elementText = document.querySelector('#text');

    function skjulElementViaCssSelector(cssSelector) {
        cssSelector.style.display = 'none';
    }

    //skjulElementViaCssSelector(elementButton);

    skjulElementViaCssSelector(elementText);




});
