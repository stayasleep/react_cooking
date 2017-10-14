import React from 'react';
import {Col} from 'react-bootstrap';
import '../styles/cover.css';

const Cover = (props) =>{

    return(
        <Col sm={8} smOffset={3} >
            <div className="cover-component">
                <ul className="align">
                    <li>
                        <figure className="book">
                            <ul className="hardcover">
                                <li>
                                    <h2 className="hardcover-title">Stayasleep&apos;s Recipe Book</h2>
                                    <span className="ribbon bestseller">Nº1</span>
                                    <h4 className="hardcover-sub">A Family Cook Book</h4>
                                </li>
                                <li></li>
                            </ul>
                            <ul className="pages">
                                <li></li>
                                <li>
                                    <div className="cover-btn" onClick={props.onClick.bind(this)}>
                                        Random Page
                                    </div>
                                </li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <ul className="hardcover-back">
                                <li></li>
                                <li></li>
                            </ul>
                            <ul className="spine">
                                <li></li>
                                <li></li>
                            </ul>
                        </figure>
                    </li>
                </ul>
            </div>
        </Col>
    )
};
export default Cover;