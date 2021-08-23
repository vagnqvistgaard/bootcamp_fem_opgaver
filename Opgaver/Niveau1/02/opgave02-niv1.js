//
document.addEventListener("DOMContentLoaded", () => {

    function beregnForhold(a, b) {
        return a / b;
    }

    function beregnForhold2(a, b) {
        if (b == 0) {
            return null;
        }
        else {
            return a / b;
        }
    }

    let resultat = beregnForhold(4, 3);

    let resultat2 = beregnForhold2(4, 0);

    console.log(resultat);
    console.log(resultat2);





});