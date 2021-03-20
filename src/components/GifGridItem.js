import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = (img) => {

   console.log(img.img);

   return (
      <div className="card animate__tada">
         <img src={img.img.images} alt={img.img.tile} />
         <p>{img.img.title}</p>
      </div>
   )
}

GifGridItem.propTypes = {

}

export default GifGridItem
