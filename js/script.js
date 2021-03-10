async function animeList(){

   const nome = document.querySelector('.selection input');

   try {
      const apiContent = await fetch('https://api.jikan.moe/v3'+`/search/anime?q=${nome.value}`);
      const data = await apiContent.json();    
      show(data.results);
   } catch (error) {
      console.error(error);
   }

   function show(info){
      let output = '';

      for(content of info){

         output += `

            <div class="flex__item">
               <a href="${content.url}">
                  <h1>${content.title}</h1>
                  <h2>Episodes: ${content.episodes} Type: ${content.type}</h2> 
                  
                  <div class="info">
                     <p>Score: ${content.score}</p>
                  </div>

                  <img src="${content.image_url}">
                  
                  <div class="sinopse">
                     <p>${content.synopsis}</p>
                  </div>   
               </a>
            </div>                  
            
         `

      }
      document.querySelector('.lista__animes').innerHTML = output;
   }   
}