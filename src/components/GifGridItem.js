import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({ img }) => {
  console.log('IMG:' ,img);
  return (
    <div className='card animate__animated animate__bounce'>
        <img src= { img.url } alt= { img.title }/>
        <p> { img.title }</p>
    </div>
  )
}

GifGridItem.propTypes = {
  img: PropTypes.object.isRequired
}
//ENZYME REQUIERE SIEMRPE QUE LOS COMPONENTES A EVALUAR SEAN EXPORTADOS 
// POR DEFAULT
export default GifGridItem;