import './App.css';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
const URL = 'http://localhost:3001/rickandmorty/login/';


function App() {
const navigate= useNavigate();
const [access, setAccess]= useState(false)

const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'Password5';

const login= async (userData)=> {
   
   try {
      const { email, password } = userData;
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
   }
      
    catch (error) {
      console.log(error.message)
   }
  
}

useEffect(() => {
   !access && navigate('/');
}, [access]);


  const [characters , setCharacters] = useState([])

  const onSearch= async (id) => {
  try {const {data}= await axios(`http://localhost:3001/rickandmorty/character/${id}`);
  if (data.name) {
     setCharacters((oldChars) => [...oldChars, data]);
   } 
 }
  catch (error) {
   alert('¡No hay personajes con este ID!');
  } 
     
}

const onClose= (id) => {
   const characterFilter = characters.filter((character)=> character.id !== id);
   setCharacters(characterFilter)

};


   const location = useLocation()

   return (
      <div className='App'>
         {  
         location.pathname !== '/' ? <Nav onSearch={onSearch} /> : null
           }
         <Routes>
      <Route path='/about' element={<About/>} ></Route>
      <Route  path='/favorites'  element= {<Favorites/>}></Route>
      <Route path='/home'  element={<div className='conteinerCards'>
         <Cards onClose={onClose} characters={characters} />
         </div>}  ></Route>
      <Route path='/detail/:id' element={<Detail/>} ></Route>
      <Route path='/' element={<Form login={login} />} />
   </Routes>
         
         
      </div>
   );
}

export default App;
