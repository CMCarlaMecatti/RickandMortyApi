import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';

function Card({id, name, status, species, origin, gender, image, onClose, myFavorites, addFav, removeFav}) {
   
   const[isFav, setIsFav] = useState(false);
   
   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });}, [myFavorites, id]);
   
   
   const handleFavorite= () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      if(!isFav){
         setIsFav(true);
         addFav({id, name, status, species, origin, gender, image});
      }
   }

   return (
      
      <div className= {style.box}>
         { isFav ? (
      <button onClick={handleFavorite}>❤️</button>) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}  > <h2 className={style.name} >{name}  </h2></Link>
         <h2 >{status} </h2>
         <h2>{species} </h2>
         {origin ? <h2>{origin.name}</h2> : null}
         <h2>{gender} </h2>
         <img  className={style.img} src={image} alt='personaje'  /> 
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
       myFavorites: state.myFavorites
   }

}

const mapDispatchToProps = (dispatch) =>{
   return {
       addFav: (character)=> dispatch(addFav(character)),
       removeFav: (id)=> dispatch(removeFav(id))
   }

}



export default connect(
   mapStateToProps, //me permite acceder al estado global.
   mapDispatchToProps  //me permite despachar acciones.
)(Card);