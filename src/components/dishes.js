import React from 'react';
import {connect} from 'react-redux';
import {Col} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import renderInput from '../utilities/renderInput';
import DishForm from '../containers/form';


const Dishes =(props) =>{
    console.log('dish prop',props);
    return(
        <Col xs={8}>
            <div className="dish-container">
                {props.dishes.filter((dish,index)=>{
                    return dish.dish_name[0].toUpperCase() === props.tab;
                }).map((recipe,index)=>{
                    console.log('inside map',recipe);
                    //return(
                        {return !props.edit[index] ? (
                        <div key={index} className="recipe-box">
                            <div className="dish-name">
                                {`${index+1}) ${recipe.dish_name}`}
                            </div>
                            <div className="dish-time">
                                {recipe.cook_time}
                            </div>
                            <div className="dish-ingredients">
                                {recipe.ingredients}
                            </div>
                            <div className="dish-desc">
                                {recipe.description}
                            </div>
                            <div className="dish-options">
                                <button onClick={props.handleEntryEdit.bind(this,index)}>Edit</button>
                                <button onClick={props.confirmActivity.bind(this,recipe)}>Delete</button>
                            </div>
                        </div>
                        ) : (
                            <div key={index} className="recipe-box">
                               <DishForm
                                   key={index}
                                   initialValues={{edit_name:`${recipe.dish_name}`, edit_time:`${recipe.cook_time}`,edit_desc:`${recipe.description}`, edit_ingred:`${recipe.ingredients}`}}
                                   onEdit={props.onEdit}
                                   cancelEntryEdit={props.cancelEntryEdit}
                                   index={index}
                               />
                            </div>
                        )
                        }

                   // )
                })
                }
            </div>
        </Col>
    )
};



export default Dishes;

