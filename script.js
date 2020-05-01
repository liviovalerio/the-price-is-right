let input =  document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let tentatives = 0;
let nbrChoisis;

function verifier(nbr) {
    let instruction = document.createElement('div');
    if(nbr < nbrAleatoire) {
        instruction.textContent += "#"+tentatives+" ("+nbr+") C'est plus!";
        instruction.className = 'instruction plus';
    } else if (nbr > nbrAleatoire) {
        instruction.textContent += "#"+tentatives+" ("+nbr+") C'est moins!";
        instruction.className = 'instruction moins';
    } else {
        instruction.textContent += "#"+tentatives+" ("+nbr+") Félication vous avez trouvé le juste prix!!";
        instruction.className = 'instruction fini';
        input.disabled = true;
    }
    document.querySelector('#instructions').prepend(instruction);
}

// cacher l'erreur
error.style.display = 'none';

// Générer un nombre aléatoire entre 0 et 1000
let nbrAleatoire = Math.floor(Math.random() * 1000);
console.log(nbrAleatoire)
// Vérifier que l'utilisateur entre bien un nombre
input.addEventListener('keyup', () => {
    (isNaN(input.value)) ? error.style.display = 'inline' : error.style.display = 'none'
})

//Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    if(isNaN(input.value) || input.value === '') {
        input.style.borderColor = 'red';
    } else {
        tentatives++;
        input.style.borderColor = 'silver';
        nbrChoisis = input.value;
        input.value = '';
        verifier(nbrChoisis);
    }
})
