import React, {useState} from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = props => {

   const [categories, setCategories] = useState(['Hello']);

   return (
      <div>
         <h1 className="animate__animated animate__backInDown">Buscador De Gifs</h1>

         <AddCategory propSetCategories={setCategories} />

         <hr/>

         <br/>

         <ol>
            {
               categories.map(category => {
                  return <GifGrid key={category} category={category} />
               })
            }
         </ol>
      </div>
   )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
