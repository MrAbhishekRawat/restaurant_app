import { Fragment } from "react";
import mealPic from '../../assets/foodPic.jpg';
import classes from '../Layout/Header.module.css';
import HeaderCartButton from "./HeaderCartButton";


const Header = (props)=>{
return(
    <Fragment>
        <header className= {classes.header}>
        <h2>PehlaNiwala</h2>
        <HeaderCartButton onClick={props.onShowCart}  />
        </header>
        <div className={classes['main-image']}>
         <img src = {mealPic} alt=" Variety of food"/>
        </div>
    </Fragment>
)
}

export default Header;