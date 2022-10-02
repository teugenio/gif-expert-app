import { useEffect, useState } from 'react';
// import getGifs from '../helpers/getGifs';
import useFetchGifs from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

// const gifs = [1,2,3,4,5,6,7,8,9,10]

export const GifGrid = ({category}) => {

  //const [counter, setCounter] = useState(10);

  const { images, isLoading } = useFetchGifs(category);

  console.log(isLoading);

  return (
    <>
        <h3>{category}</h3>
        { isLoading && ( <h2>Cargando...</h2> )}
        {/* <h5>{ counter }</h5> */}
        {/* <ol> */}

        <div className="card-grid">
          {   
            images.map( ( image ) => (
              <GifItem key={ image.id } {...image }/>
            ))
          }
        </div>
        {/* </ol> */}
        
        {/* <button onClick={ () => setCounter(counter+1) }></button> */}
    </>
  )
}
