const joke = document.getElementById('joke');
const error = document.getElementById('error');


function generateJoke() {
   
      joke.innerText = 'loading....'
   
   const config = {
      headers: {
         Accept: 'application/json'
      }
   }

   fetch('https://icanhazdadjoke.com/', {
      headers: {
         Accept: 'application/json'
      }
   })
      .then(res => {
         if (!res.ok) {
           return new Error(res.statusText)
         }

         return res.json()
      })
      .then((data) => {
        
         joke.innerText = data.joke;

      })
      .catch((err) => {
         joke.innerText = '';
         error.style.display = 'block';
         console.log(err)
      })
}

export default generateJoke;