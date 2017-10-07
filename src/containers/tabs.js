import React, { Component } from 'react';
import { connect } from 'react-redux';
import Column from '../components/column_tabs';

class Tabs extends Component{

    render(){
        console.log('prop it!',this.props);
        return(
            <div>
                Tabs
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
