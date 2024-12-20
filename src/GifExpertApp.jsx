import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";


export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Punch Man' ]);
  
    const onAddCategory = (newCategory) =>{
      if(categories.includes(newCategory))return; 
      setCategories( [newCategory,...categories] )
    }

  return (
    <>
        {/*Titulo*/ }
        <h1>GifExpertApp</h1>

        {/* Input */ }
          <AddCategory 
            onNewValue={event =>onAddCategory(event)}
            />

        {/* Listado de Items */ }
            {
              categories.map(category => (
                  <GifGrid 
                    key={ category }
                    category={ category }/> 
              ))
            }

          {/* Gif item */ }
    </>
  )
}
