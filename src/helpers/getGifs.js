const getGifs = async (category, limit) => {

    const url =  `https://api.giphy.com/v1/gifs/search?api_key=UUVVO6ByduA0KBamTvooBQbjfvvfLfFs&q=${category}&limit=${limit}`
    const resp = await fetch(url);
    // console.log(resp);
    const { data } = await resp.json();  
  
    const gifUrl = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }))
  
    //console.log('gifUrl',gifUrl);

    return gifUrl;
  }

  export default getGifs;