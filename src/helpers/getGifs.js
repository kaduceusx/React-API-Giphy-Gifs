
export const getGifs = async(category) =>{
   //api.giphy.com/v1/gifs/search

   //uL39WtcMhQGJMwyk4mKRpIXNwZqHERLi

   //api.giphy.com/v1/gifs/search?api_key=uL39WtcMhQGJMwyk4mKRpIXNwZqHERLi&q=Rick&limit=10

   const url = `https://api.giphy.com/v1/gifs/search?api_key=uL39WtcMhQGJMwyk4mKRpIXNwZqHERLi&q=${encodeURI(category)}&limit=10`;

   const respuesta = await fetch(url);

   const {data} = await respuesta.json();

   const gifs = data.map(img => {
      return {
         id: img.id,
         title: img.title,
         images: img.images.downsized_medium.url
      }
   })

   return gifs;


};