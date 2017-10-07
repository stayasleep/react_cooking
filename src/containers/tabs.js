import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from '../components/column_tabs';
import '../styles/tabs.css';

class Tabs extends Component{
    constructor(props){
        super(props);
        this.handleLetterClick = this.handleLetterClick.bind(this);
    }

    handleLetterClick(letter){
        console.log('clicked',letter);
        //put action creator here
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
