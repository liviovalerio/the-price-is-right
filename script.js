let input =  document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// cacher l'erreur
error.style.display = 'none';

// Générer un nombre aléatoire entre 0 et 1000
let nbrAleatoire = Math.floor(Math.random() * 1001);

// Vérifier que l'utilisateur entre bien un nombre
input.addEventListener('keyup', () => {
    (isNaN(input.value)) ? error.style.display = 'inline' : error.style.display = 'none'
})
