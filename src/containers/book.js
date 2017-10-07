import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cover from '../components/cover';


class Book extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('props to book',this.props);
        return(
            <div>
                {!this.props.selected &&
                <Cover/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        food: state.dishes.all,
        selected: state.tab.selected
    }
};

export default connect(mapStateToProps)(Book);