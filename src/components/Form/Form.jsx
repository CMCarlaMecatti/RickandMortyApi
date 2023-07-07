import { useState } from "react"
import validation from "../Validation/Validation"
import style from './Form.module.css'

const Form= ({login}) => {
 const  [errors, setErrors] = useState({});
 const [userData, setUserData] = useState(
    {
        email:"" ,
        password:""
    }
 );
 
const handleChange= (event) => {
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
      })

      setErrors(validation({ 
        ...userData,
        [event.target.name]: event.target.value
    }))

};

const handleSubmit = (event) => {
 event.preventDefault();
 login(userData)
}

    return(
    <div className={style.container}>
        <div className={style.form_box}>
        <form  onSubmit={handleSubmit} >
        <div className={style.input_box}>
        <label className={style.label} htmlFor="email">Email:</label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} className={style.input} />
        {errors.email && <p className={style.p} >{errors.email}</p> }</div>
        
        <div className={style.input_box}>
        <label className={style.label} htmlFor="password">Password:</label>
        <input className={style.input} type="password" name="password"  value={userData.password} onChange={handleChange} />
        {errors.password && <p className={style.p} >{errors.password}</p> }</div>
        
        <button className={style.button}>Submitt</button>
    </form>
    </div>
    </div>
 )
}

export default Form