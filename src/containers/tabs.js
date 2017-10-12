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
        console.log('clicked',letter);
        this.props.dispatch(selectNewTab(letter));
    }
    render(){
        console.log('prop it!',this.props);
        return(
            <div>
                <Column
                    onClick={this.handleLetterClick}
                    tabs={this.props.tabs}
                    selected={this.props.selected}
                />

            </div>
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
