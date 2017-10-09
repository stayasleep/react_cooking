import React from 'react';
import {connect} from 'react-redux';
import {Col} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import renderInput from '../utilities/renderInput';


let Dishes =(props) =>{
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
                                <form onSubmit={props.handleSubmit((values)=> {props.onEdit(values)})}>
                                    <Field className="form-control edit-dish-name" type="text" name="edit_name" component={renderInput}/>
                                    <Field name="edit_ingred" className="form-control edit-ingredients" type="text"  component={renderInput}/>
                                    <Field name="edit_time" className="form-control edit-time" type="text"  component={renderInput} />
                                    <Field name="edit_desc" className="form-control edit-desc" type="text"  component={renderInput}/>
                                    <div className="btns-box">
                                        <button type="submit" className="submit btn btn-lg btn-outline-dark" >Submit</button>
                                        <button type="button" className="reset btn btn-lg btn-outline-info" onClick={props.cancelEntryEdit.bind(this,index)}>Cancel</button>
                                    </div>
                                </form>
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