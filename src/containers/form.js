import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import renderInput from '../utilities/renderInput';


class EditForm extends Component{
    render(){
        const {handleSubmit,index, reset} = this.props;
        return(
                <form onSubmit={handleSubmit((values)=> {this.props.onEdit(values)})}>
                    <Field className="form-control edit-name" type="text" name="edit_name" component={renderInput}/>
                    <Field name="edit_ingred" className="form-control edit-ingredients" type="text"  component={renderInput}/>
                    <Field name="edit_time" className="form-control edit-time" type="text"  component={renderInput} />
                    <Field name="edit_desc" className="form-control edit-desc" type="text"  component={renderInput}/>
                    <div className="btns-box">
                        <button type="submit" className="submit btn btn-lg btn-outline-dark" >Submit</button>
                        <button type="button" className="reset btn btn-lg btn-outline-info" onClick={this.props.cancelEntryEdit.bind(this,index)}>Cancel</button>
                    </div>
                </form>
        )
    }
}

function validate(values) {
    console.log('edit val',values);
    const errors = {};
    if(!values.edit_name){
        errors.edit_name = "Required";
    }
    if(!values.edit_ingred){
        errors.edit_ingred = "Required";
    }
    if(!values.edit_time){
        errors.edit_time ="Required";
    }
    if(!values.edit_desc){
        errors.edit_desc = "Required";
    }

    return errors;
}
EditForm = reduxForm({
    // enableReinitialize: true,
    validate

})(EditForm);


const mapStateToProps = (state,ownProps)=>{
    return{
        form: `edit${ownProps.index}`,
    }
};

export default connect(mapStateToProps)(EditForm);