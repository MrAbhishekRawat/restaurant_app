import { Fragment } from "react";
import mealPic from '../../assets/foodPic.jpg';
import classes from '../Layout/Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import MealSummary from "../Meals/MealSummary";

const Header = (props)=>{
return(
    <Fragment>
        <header className= {classes.header}>
        <h2>Bhojan</h2>
        <HeaderCartButton   />
        </header>
        <div className={classes['main-image']}>
         <img src = {mealPic} alt=" Variety of food"/>
        </div>
        <div><MealSummary /></div>
    </Fragment>
)
}

export default Header;