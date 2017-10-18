import React from 'react';
import {Button, Col} from 'react-bootstrap';
import EditForm from '../containers/form';
import '../styles/dishes.css';


const Dishes =(props) =>{
    console.log('dish prop',props);
    // return(
    //     <Col sm={12} className="">
    //         <div className="mtop">
    //         <div className="dish-container">
    //             {props.dishes.filter((dish,index)=>{
    //                 return dish.dish_name[0].toUpperCase() === props.tab;
    //             }).map((recipe,index)=>{
    //                 console.log('inside map',recipe);
    //                     {return !props.edit[index] ? (
    //                     <Col sm={6} key={index} className="recipe-box">
    //                         <div className="dish-name">
    //                             <span className="num">{`${index+1})`}</span>{` ${recipe.dish_name}`}
    //                         </div>
    //                         <div className="dish-time">
    //                             <span className="time">Time: </span>{recipe.cook_time}
    //                         </div>
    //                         <div className="dish-ingredients">
    //                             <span className="ingred">Ingredients: </span>{recipe.ingredients}
    //                         </div>
    //                         <div className="dish-desc">
    //                             <span className="desc">Description: </span>{recipe.description}
    //                         </div>
    //                         <div className="dish-options">
    //                             <Button onClick={props.handleEntryEdit.bind(this,index)} bsStyle="link">Edit</Button>
    //                             <Button onClick={props.confirmActivity.bind(this,recipe)} bsStyle="link">Delete</Button>
    //                         </div>
    //                     </Col>
    //                     ) : (
    //                         <Col sm={6} key={index} className="recipe-box">
    //                            <EditForm
    //                                key={index}
    //                                initialValues={{edit_name:`${recipe.dish_name}`, edit_time:`${recipe.cook_time}`,edit_desc:`${recipe.description}`, edit_ingred:`${recipe.ingredients}`}}
    //                                onEdit={props.onEdit}
    //                                cancelEntryEdit={props.cancelEntryEdit}
    //                                index={index}
    //                            />
    //                         </Col>
    //                     )
    //                     }
    //             })
    //             }
    //         </div>
    //         </div>
    //     </Col>
    // )
    return(
        <Col sm={12} className="">
            <div className="mtop">
                <div className="dish-container">
                    {props.paginate &&
                    <Col sm={12}>
                        <div className="paginate">
                            <Button className="previous" bsStyle="link" onClick={props.handlePrevious}>Previous</Button>
                            <Button className="next" bsStyle="link" onClick={props.handleNext}>Next</Button>
                        </div>
                    </Col>
                    }
                    {props.dishes.map((recipe,index)=> {
                        console.log('inside map',recipe);
                        {return !props.edit[index] ? (
                                <Col sm={6} key={index} className="recipe-box">
                                    <div className="dish-name">
                                        <span className="num">{`${index+1})`}</span>{` ${recipe.dish_name}`}
                                    </div>
                                    <div className="dish-time">
                                        <span className="time">Time: </span>{recipe.cook_time}
                                    </div>
                                    <div className="dish-ingredients">
                                        <span className="ingred">Ingredients: </span>{recipe.ingredients}
                                    </div>
                                    <div className="dish-desc">
                                        <span className="desc">Description: </span>{recipe.description}
                                    </div>
                                    <div className="dish-options">
                                        <Button onClick={props.handleEntryEdit.bind(this,index)} bsStyle="link">Edit</Button>
                                        <Button onClick={props.confirmActivity.bind(this,recipe)} bsStyle="link">Delete</Button>
                                    </div>
                                </Col>
                            ) : (
                                <Col sm={6} key={index} className="recipe-box">
                                    <EditForm
                                        key={index}
                                        initialValues={{edit_name:`${recipe.dish_name}`, edit_time:`${recipe.cook_time}`,edit_desc:`${recipe.description}`, edit_ingred:`${recipe.ingredients}`}}
                                        onEdit={props.onEdit}
                                        cancelEntryEdit={props.cancelEntryEdit}
                                        index={index}
                                    />
                                </Col>
                            )
                        }
                    })
                    }
                </div>
            </div>
        </Col>
    )
};



export default Dishes;

