import generateJoke from './generateJoke.js';
import './style.scss';

const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', (e)=>{
   generateJoke();
})

generateJoke();