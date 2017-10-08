import React from 'react';
import {Col} from 'react-bootstrap';

const Dishes =(props) =>{
    return(
        <Col xs={8}>
            <div className="dish-container">
                {props.dishes.filter((dish,index)=>{
                    return dish[0].toUpperCase() === props.selected;
                }).map((recipe,index)=>{
                    return(
                        <div key={index} className="recipe-box">
                            <div className="dish-name">
                                {recipe.dish_name}
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
                        </div>
                    )
                })
                }
            </div>
        </Col>
    )
};

export default Dishes;