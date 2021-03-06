import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectNewTab} from '../actions/index';
import Column from '../components/column_tabs';
import '../styles/tabs.css';

class Tabs extends Component{
    constructor(props){
        super(props);
        this.handleLetterClick = this.handleLetterClick.bind(this);
    }

    handleLetterClick(letter){
        this.props.dispatch(selectNewTab(letter));
    }
    render(){
        return(
                <Column
                    onClick={this.handleLetterClick}
                    tabs={this.props.tabs}
                    selected={this.props.selected}
                />
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        tabs: state.tab.letters,
        selected: state.tab.selected,
    }
};

export default connect(mapStateToProps)(Tabs);
