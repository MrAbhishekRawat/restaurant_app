import { Fragment } from "react";
import mealPic from '../../assets/644208.jpg';
import classes from '../Layout/Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props)=>{
return(
    <Fragment>
        <header className= {classes.header}>
        <h>Bhojan</h>
        <HeaderCartButton   />
        </header>
        <div className={classes['main-image']}>
         <img src = {mealPic} alt=" Naruto face"/>
        </div>
    </Fragment>
)
}

export default Header;