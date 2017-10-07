import React from 'react';
import {Col} from 'react-bootstrap';

const Cover = () =>{
    return(
        <Col xs={8}>
            <div className="cover-container">
                <div className="cover-title">
                    <h1>Stayasleep&apos;s Recipe Book</h1>
                    <h4>A Family cook book</h4>
                    <h6>Made with React</h6>
                </div>
            </div>
        </Col>

    )
};
export default Cover;