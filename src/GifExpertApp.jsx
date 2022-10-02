import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch'])

  // console.log(categories);

  const onAddCategory = ( newCategory ) => {
    // console.table(newCategory);
    // setCategories([...categories,'Attack on Titans']);

    if ( categories.includes(newCategory) ) return ;

    setCategories( cat => [ ...cat, newCategory ]);
  }

  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>
        
        {/* Input */}
        {/* <AddCategory setCategories={ setCategories }></AddCategory> */}
        <AddCategory onNewCategory={(value) => onAddCategory(value)} ></AddCategory>
        {/* <button onClick={ onAddCategories }>Agregar</button> */}
        
        {/* Listado de tarjetas */}
        
          { 
            categories.map( (category) => (
                  <GifGrid key={category} category={category} />
              )) 
          } 
    </>    
  )
}
