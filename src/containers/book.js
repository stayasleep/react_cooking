import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Cover from '../components/cover';
import Add from '../components/add';
import {addNewRecipe} from '../actions/index';


class Book extends Component{
    constructor(props){
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleFormSubmit(values){
        if(Object.keys(values).length === 0){
            return false;
        }
        this.props.dispatch(addNewRecipe(values));
        this.props.reset("dishEntry");

        console.log('form parent',values);
    }

    render(){
        console.log('props to book',this.props);
        const {handleSubmit, submitting, reset} = this.props;
        return(
            <div>
                {!this.props.selected &&
                <Cover/>
                }
                {this.props.selected === "Add" &&
                <Add
                    onHandleFormSubmit={this.handleFormSubmit}
                    handleSubmit={handleSubmit}
                    submitting={submitting}
                    reset={reset}
                />
                }
            </div>
        )
    }
}

function validate(values){
    console.log('add vals',values);
    const errors = {};

    if(!values.dish_name){
        errors.dish_name = "Required";
    }else if(values.dish_name.length < 1){
        errors.dish_name = "Name must contain more than one character";
    }else if(values.dish_name.length > 30){
        errors.dish_name = "Dish name must contain fewer than 30 characters";
    }

    if(!values.ingredients){
        errors.ingredients = "Required";
    }else if(values.ingredients.length <1){
        errors.ingredients = "Ingredients must contain more than one (1) character";
    }else if(values.ingredients.length > 50){
        errors.ingredients = "Ingredients must contain fewer than fifty (50) characters";
    }

    if(!values.cook_time){
        errors.cook_time = "Required";
    }else if(values.cook_time.length<1){
        errors.cook_time = "Cook time must contain more than one (1) character";
    }else if(values.cook_time.length >12){
        errors.cook_time = "Cook time must contain fewer than 12 characters";
    }

    if(!values.description){
        errors.description = "Required";
    }else if(values.description.length <1){
        errors.description = "Description cannot be blank";
    }else if(values.description.length > 100){
        errors.description ="Description must be fewer than 100 characters";
    }

    return errors;


}
Book = reduxForm({
    form: "dishEntry",
    validate
})(Book);


const mapStateToProps = (state)=>{
    return {
        food: state.dishes.all,
        selected: state.tab.selected
    }
};

export default connect(mapStateToProps)(Book);