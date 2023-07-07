import style from './SearchBar.module.css'
import { useState } from "react";

export default function SearchBar({onSearch } ) {
const [id, setId] = useState('');

const handleChange = (event) => {
   
   setId(event.target.value)

}

   return (
      <div className={style.containerNav} >
          <input type='search' onChange={handleChange} value={id} className={style.input} />
         <button className={style.button} onClick={()=> {onSearch(id); setId('') }  }><img className={style.img} src='https://street47.vtexassets.com/assets/vtex/assets-builder/street47.store-theme/4.0.128/icons/search_black___27abbd09e42624c77da7595302d041e6.svg'/></button> 
      </div>
   );
}
