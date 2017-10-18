import React from 'react';
import {Col} from 'react-bootstrap';

const Column = (props)=>{
    return(
        <Col xs={12}>
            <h1 className="tab-title">Select A Tab</h1>
            <div className="tabs-box">
                {props.tabs.map((letter,index)=>{
                    return(
                        <div key={index} className={props.selected === letter ? "letters selected": "letters"} onClick={props.onClick.bind(this,letter)}>
                            <p>{letter}</p>
                        </div>
                    )
                })}
            </div>
        </Col>
    )
};

export default Column;