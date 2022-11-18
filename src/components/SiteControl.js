import React from 'react';
import AvailableBoards from "./BoardList";
import Details from "./Details";

class SiteControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        formVisibleOnPage: true,
        selectedBoard: null
    };
}

handleClick = () => {
    if(this.state.selectedBoard != null){
        this.state({
            formVisibleOnPage: false,
            selectedBoard: null,
            editing: false,
        });
        } else{
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }));
        }
    }

handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
}

handleChangingSelectedBoard = (id) => {
    const selectedBoard = this.state.mainBoardList.filter(board => board.id === id)[0];
    this.setState({selectedTicket: selectedBoard});
}

render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <AvailableBoards />
        buttonText = "placeholder";
    } else if (this.state.selectedBoard != null){
        currentlyVisibleState = <Details 
        board = {this.state.selectedBoard} 
        onClickingDelete = {this.handleDeletingBoard} 
        onClickingEdit = {this.handleEditClick}/>
        buttonText = "All Boards";
    }
    return (
        <React.Fragment>
            {currentlyVisibleState}
            <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
    );
}}

export default SiteControl;