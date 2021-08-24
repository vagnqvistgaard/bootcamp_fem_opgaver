//lyyyyyysende knapper....

document.addEventListener("DOMContentLoaded", () => {

    let buttonList = document.querySelectorAll('button');
    // buttonList == NodeList, og den tillader ingen events....

    let parentObj = document.querySelector('#buttons');

    parentObj.addEventListener('click', (e) => {

        for (let i = 0; i < buttonList.length; i++) {
            buttonList[i].style.backgroundColor = '#eee'; //nulstil alle knapper;
        }

        if (e.target.localName == 'button') {    //komp. for klik udenfor buttons;
            e.target.style.backgroundColor = 'lightgreen';
        }
    })
});