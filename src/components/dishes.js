import React from 'react';
import {Button, Col} from 'react-bootstrap';
import EditForm from '../containers/form';


const Dishes =(props) =>{
    console.log('dish prop',props);
    return(
        <Col xs={8}>
            <div className="dish-container">
                {props.dishes.filter((dish,index)=>{
                    return dish.dish_name[0].toUpperCase() === props.tab;
                }).map((recipe,index)=>{
                    console.log('inside map',recipe);
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
                                <Button onClick={props.handleEntryEdit.bind(this,index)} bsStyle="link">Edit</Button>
                                <Button onClick={props.confirmActivity.bind(this,recipe)} bsStyle="link">Delete</Button>
                            </div>
                        </div>
                        ) : (
                            <div key={index} className="recipe-box">
                               <EditForm
                                   key={index}
                                   initialValues={{edit_name:`${recipe.dish_name}`, edit_time:`${recipe.cook_time}`,edit_desc:`${recipe.description}`, edit_ingred:`${recipe.ingredients}`}}
                                   onEdit={props.onEdit}
                                   cancelEntryEdit={props.cancelEntryEdit}
                                   index={index}
                               />
                            </div>
                        )
                        }
                })
                }
            </div>
        </Col>
    )
};



export default Dishes;

