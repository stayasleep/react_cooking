import React from 'react';
import {Col} from 'react-bootstrap';

const Dishes =(props) =>{
    return(
        <Col xs={8}>
            <div className="dish-container">
                {props.dishes.filter((dish,index)=>{
                    return dish.dish_name[0].toUpperCase() === props.tab;
                }).map((recipe,index)=>{
                    console.log('inside map',recipe);
                    return(
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
                                <button>Edit</button>
                                <button onClick={props.confirmActivity.bind(this,recipe)}>Delete</button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </Col>
    )
};

export default Dishes;