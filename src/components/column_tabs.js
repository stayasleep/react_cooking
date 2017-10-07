import React from 'react';
import {Col} from 'react-bootstrap';

const Column = (props)=>{
    console.log('eh',props.tabs);
    return(
        <Col xs={4}>
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