import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({propSetCategories}) => {

   const [input, setInput] = useState('   ');

   const handleInputChange = (e) => {
      setInput (e.target.value);
   }

   const handleSubmit = (e) =>{

      e.preventDefault();

      if(input.trim().length > 2){
         propSetCategories(categ => [input, ...categ]);
         setInput('');
      }

   }

   return (
      <div >
      
         <form onSubmit={handleSubmit}>

            <input 
               type="text"
               placeholder="Buscar"
               value={input}
               onChange={ handleInputChange } 
            />

         </form>
         
      </div>
   )
}

AddCategory.propTypes = {
   propSetCategories: PropTypes.func.isRequired
}

export default AddCategory


