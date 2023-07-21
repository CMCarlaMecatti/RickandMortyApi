import Card from '../Card/Card';
import {connect} from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Favorites = ({myFavorites}) => {
  
  const[aux, setAux]= useState(false)
  
  
  
  const dispatch = useDispatch()
  const handleOrder= (event) => {
   dispatch(orderCards(event.target.value));
   setAux(true)
  }   

  const handleFilter= (event) => {
    dispatch(filterCards(event.target.value))
  }
  
  return(
          <>
           <select onChange={handleOrder} >
          <option value="A">Ascendente</option>
         <option value="D">Descendente</option>
         </select>  
         
         <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
          <option value="All">All Characters</option>
         </select>
          
          
          {
            myFavorites?.map( fav =>{
              return (
                   <Card
                   key={fav.id}
                   id={fav.id}
                   name={fav.name}
                   species={fav.species}
                   gender={fav.gender}
                   origin={fav.origin.name}
                   image={fav.image}
                   
                   
                   />

              )
            })
          }
        
          </>
  )
   
}

const mapStateToProps= (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(
    mapStateToProps, 
    null  
 )(Favorites);