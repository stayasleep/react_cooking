import React from 'react';
import {Modal} from 'react-bootstrap';
import '../styles/confirmation.css';
import BootstrapModal from '../containers/modal';

const Confirm = (props) => {
    console.log('inside confirm',props);
    return(
        <div>
            <BootstrapModal show={props.display} onHide={()=>props.cancelEntryDelete()}>
                <BootstrapModal.Header closeButton>
                    <Modal.Title>Confirm Activity</Modal.Title>
                </BootstrapModal.Header>
                <BootstrapModal.Body>
                    <h4>Are you sure you want to delete this entry?</h4>
                    <p>Dish Name: {props.recipe.dish_name}</p>
                    <p>Cook Time: {props.recipe.cook_time}</p>
                    <p>Ingredients: {props.recipe.ingredients}</p>
                    <p>Description: {props.recipe.description}</p>
                </BootstrapModal.Body>
                <BootstrapModal.Footer>
                    <button onClick={()=>props.handleEntryDelete(props.recipe.dish_id)}>Delete</button>
                    <button onClick={()=>props.cancelEntryDelete()}>Cancel</button>
                </BootstrapModal.Footer>
            </BootstrapModal>
        </div>

    )
};

export default Confirm;
