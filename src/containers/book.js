import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Confirm from '../components/confirmation';
import Cover from '../components/cover';
import Dishes from '../components/dishes';
import NoDishes from '../components/no_dishes';
import Add from '../components/add';
import {addNewRecipe,getAllRecipes, selectNewTab} from '../actions/index';


class Book extends Component{

    constructor(props){
        super(props);
        this.state={
            showModal: false,
            recipe: null,
            totalFiltered: [],
            stepper: null,
            count: 0
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleEntryDelete = this.handleEntryDelete.bind(this);
        this.cancelEntryDelete = this.cancelEntryDelete.bind(this);
        this.confirmActivity = this.confirmActivity.bind(this);
        this.handleEntryEdit = this.handleEntryEdit.bind(this);
        this.cancelEntryEdit = this.cancelEntryEdit.bind(this);
        this.handleEditForm = this.handleEditForm.bind(this);
        this.handleRandomClick = this.handleRandomClick.bind(this);

        this.renderDishList = this.renderDishList.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }
    componentWillMount(){
        this.props.dispatch(getAllRecipes());
    }

    componentWillReceiveProps(nextProps){
        console.log("WILL RECEIVE PROPS",nextProps);
        if(this.props.selected !== nextProps.selected){
            if(nextProps.selected !== "Add"){
                console.log('next not this received');
                //a letter is selected, makes the state
                let filteredDishes = nextProps.food.filter((dish,index)=>{
                    return dish.dish_name[0].toUpperCase() === nextProps.selected;
                });
                console.log('filtered dish',filteredDishes);
                let stepper = Math.ceil(filteredDishes.length/4) -1;//maybe math.floor instead
                let portion = filteredDishes.slice(0,4); //initialize the state to first 4
                //we have an array of X, but we only want to display X-n at a time, until you hit stepper and then x-(n+1) at a time
                let partition = filteredDishes.reduce((arr,value,index)=>{
                    const splitAt = Math.floor(index/4);

                    if(!arr[splitAt]){
                        arr[splitAt]=[];
                    }
                    arr[splitAt].push(value);
                    return arr;
                },[]);
                console.log('split into two arrays for C',partition);




                this.setState({
                    editDish: Array(portion.length).fill(false),
                    //display: portion,
                    display: partition,
                    totalFiltered: filteredDishes,
                    stepper: stepper,
                });
            }
        }
    }

    renderDishList(){
        //lets check our total filtered array
        console.log('renda chameleon');
        const dishes = this.state.totalFiltered.slice();
        if(dishes.length < 4){
            return (
                <Dishes
                    dishes={dishes}
                    tab={this.props.selected}
                    confirmActivity={this.confirmActivity}
                    handleEntryEdit={this.handleEntryEdit}
                    edit={this.state.editDish}
                    cancelEntryEdit={this.cancelEntryEdit}
                    handleSubmit={this.props.handleSubmit}
                    submitting={this.props.submitting}
                    reset={this.props.reset}
                    onEdit={this.handleEditForm}
                    paginate={false}
                />
            )
        }else{
            //over 10 !!!!
            let partition = this.state.display.slice();
            let subArr = this.state.count;
            return(
                <Dishes
                    dishes={partition[subArr]}
                    //dishes={partition}
                    tab={this.props.selected}
                    confirmActivity={this.confirmActivity}
                    handleEntryEdit={this.handleEntryEdit}
                    edit={this.state.editDish}
                    cancelEntryEdit={this.cancelEntryEdit}
                    handleSubmit={this.props.handleSubmit}
                    submitting={this.props.submitting}
                    reset={this.props.reset}
                    onEdit={this.handleEditForm}
                    paginate={true}
                    handleNext={this.handleNext}
                    handlePrevious={this.handlePrevious}
                />
            )
        }
    }

    handleNext(){
        //you can only increase as long as you dont surpass the maximum number of sub arrays
        if(this.state.count < this.state.stepper){
            this.setState({
                count: this.state.count+1,
            });
        }
        // console.log('handle next');
        // this.setState({
        //     count: this.state.count + 1,
        // })

    }
    handlePrevious(){
        //so we dont end up on page negative X
        if(this.state.count > 0){
            this.setState({
                count: this.state.count -1,
            });
        }
        // console.log('handle previous');
        // this.setState({
        //     count: this.state.count -1,
        // })

    }



    handleRandomClick(){
        const random = Math.round(Math.random()*26);
        const alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        const letter = alphabet[random];

        this.props.dispatch(selectNewTab(letter));


    }

    handleEditForm(values){
        console.log('edit val',values);
    }
    handleFormSubmit(values){
        console.log('my form',values);
        if(Object.keys(values).length === 0){
            return false;
        }
        this.props.dispatch(addNewRecipe(values));
        this.props.reset("dishEntry");
    }

    confirmActivity(recipe){
        console.log('confirm activity',recipe);
        //each entry can activate a shared modal, one at a time, and will pass the info to be deleted
        this.setState({showModal: true, recipe: recipe})
    }
    cancelEntryDelete(){
        console.log('cancel entry delte');
        //cancel modal activity and reset default values
        this.setState({showModal: !this.state.showModal, recipe: null});
    }
    handleEntryDelete(id){
        //info is passed into the modal from the local component state and returned here
        console.log('dish to delete',id);
        this.setState({showModal: !this.state.showModal, recipe: null});
    }

    handleEntryEdit(index){
        console.log('my position in this tab is num',index);
        const dishArray = this.state.editDish.slice();
        dishArray[index] = !dishArray[index];
        console.log('dish array', dishArray);
        this.setState({editDish:dishArray})
    }
    cancelEntryEdit(index){
        const dishArray = this.state.editDish.slice();
        dishArray[index] = !dishArray[index];
        this.setState({editDish: dishArray});
    }


    render(){
        const {food, handleSubmit, selected, submitting, reset} = this.props;
        console.log('BOOOKS RENDER',this.state);
        return(
            <div>
                {!this.props.selected &&
                    <Cover
                        onClick={this.handleRandomClick}
                    />
                }

                {this.props.selected === "Add" &&
                    <Add
                        onHandleFormSubmit={this.handleFormSubmit}
                        handleSubmit={handleSubmit}
                        submitting={submitting}
                        reset={reset}
                    />
                }
                {this.state.editDish && this.state.editDish.length === 0 &&
                    <NoDishes
                        tab={this.props.selected}
                    />
                }

                {this.props.selected && this.props.selected !=="Add" && this.renderDishList()}
                {/*{this.props.selected && this.props.selected !== "Add" &&*/}
                    {/*<Dishes*/}
                        {/*dishes={this.props.food}*/}
                        {/*tab={this.props.selected}*/}
                        {/*confirmActivity={this.confirmActivity}*/}
                        {/*handleEntryEdit={this.handleEntryEdit}*/}
                        {/*edit={this.state.editDish}*/}
                        {/*cancelEntryEdit={this.cancelEntryEdit}*/}
                        {/*handleSubmit={handleSubmit}*/}
                        {/*submitting={submitting}*/}
                        {/*reset={reset}*/}
                        {/*onEdit={this.handleEditForm}*/}

                    {/*/>*/}

                {/*}*/}

                {this.state.showModal &&
                    <Confirm
                        display={this.state.showModal}
                        recipe={this.state.recipe}
                        handleEntryDelete={this.handleEntryDelete}
                        cancelEntryDelete={this.cancelEntryDelete}
                    />
                }

            </div>
        )
    }
}

function validate(values){
    console.log('add vals',values);
    const errors = {};

    if(!values.dish_name){
        errors.dish_name = "Required";
    }else if(values.dish_name.length < 1){
        errors.dish_name = "Name must contain more than one character";
    }else if(values.dish_name.length > 30){
        errors.dish_name = "Dish name must contain fewer than 30 characters";
    }

    if(!values.ingredients){
        errors.ingredients = "Required";
    }else if(values.ingredients.length <1){
        errors.ingredients = "Ingredients must contain more than one (1) character";
    }else if(values.ingredients.length > 50){
        errors.ingredients = "Ingredients must contain fewer than fifty (50) characters";
    }

    if(!values.cook_time){
        errors.cook_time = "Required";
    }else if(values.cook_time.length<1){
        errors.cook_time = "Cook time must contain more than one (1) character";
    }else if(values.cook_time.length >12){
        errors.cook_time = "Cook time must contain fewer than 12 characters";
    }

    if(!values.description){
        errors.description = "Required";
    }else if(values.description.length <1){
        errors.description = "Description cannot be blank";
    }else if(values.description.length > 100){
        errors.description ="Description must be fewer than 100 characters";
    }

    return errors;


}
Book = reduxForm({
    form: "dishEntry",
    // enableReinitialize: true,
    overwriteOnInitialValuesChange: false,
    validate
})(Book);


const mapStateToProps = (state, ownProps)=>{
    return {
        food: state.dishes.all,
        selected: state.tab.selected
    }
};

export default connect(mapStateToProps)(Book);