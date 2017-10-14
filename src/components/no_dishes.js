import React from 'react';
import { Col } from 'react-bootstrap';
import '../styles/nodish.css';

const NoDishes = (props) =>{
    return(
        <Col sm={12}>
            <div className="empty-box ">
                <div>
                    <h1 className="empty-title">There&apos;s no dishes here <span className="empty-yet">yet!</span></h1>
                </div>
                <div>
                    <h4 className="empty-sub">
                        Enter new recipes to fill the <span>"{props.tab}"</span> page.
                    </h4>
                </div>
            </div>
        </Col>
    )
};

export default NoDishes;