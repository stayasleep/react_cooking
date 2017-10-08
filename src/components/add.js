import React from 'react';
import {Col} from 'react-bootstrap';
import renderInput from '../utilities/renderInput';
import { Field, reduxForm } from 'redux-form';


const Add = (props) =>{
    return(
        <Col xs={8}>
            <div>
                <h4>Add A Recipe</h4>
            </div>
            <div className="form-container">
                <form onSubmit={props.handleSubmit((values)=> {props.onHandleFormSubmit(values)})}>
                    <Field name="dish_name" className="form-control recipe-name" type="text" label="Recipe Name" component={renderInput}/>
                    <Field name="ingredients" className="form-control recipe-ingredients" type="text" label="Ingredients" component={renderInput}/>
                    <Field name="cook_time" className="form-control recipe-time" type="text" label="Cooking Time" component={renderInput} />
                    <Field name="description" className="form-control recipe-desc" type="text" label="Recipe Description" component={renderInput}/>
                    <div className="btns-box">
                        <button className="submit btn btn-lg btn-outline-dark" disabled={props.submitting}>Submit</button>
                        <button className="reset btn btn-lg btn-outline-info" onClick={props.reset}>Reset</button>
                    </div>
                </form>
            </div>

        </Col>
    )
};

export default Add;