import React from 'react';
import AvailableBoards from "./BoardList";
import Details from "./Details";

class SiteControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boardList: [],
            formVisibleOnPage: false,
            editing: false,
            selectedBoard: null
    };
}

handleAddingNewBoardToList = (newBoard) => {
    const newBoardList = this.state.BoardList.concat(newBoard);
    this.setState({BoardList: newBoardList,
        formVisibleOnPage: false });
}

handleClick = () => {
    if(this.state.selectedBoard != null){
        this.state({
            formVisibleOnPage: false,
            selectedBoard: null,
            editing: false
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

handleDeletingBoard = (id) => {
    const newBoardList = this.state.boardList.filter(board => board.id !== id);
    this.setState({
    boardList: newBoardList,
    selectedBoard: null
    });
}

handleEditingBoardInList = (boardToEdit) => {
    const editedBoardList = this.state.boardList
    .filter(board => board.id !== this.state.selectedBoard.id)
    .concat(boardToEdit);
    this.setState({
        mainBoardList: editedBoardList,
        editing: false,
        selectedBoard: null
    });
}

render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
        currentlyVisibleState = 
    <EditBoard
        board = {this.state.selectedBoard} 
        onEditBoard = {this.handleEditingBoardInList}/>
        buttonText = "Return to Board List";
    } else if (this.state.selectedBoard != null) {
        currentlyVisibleState = 
    <Details 
        board = {this.state.selectedBoard} 
        onClickingDelete = {this.handleDeletingBoard} 
        onClickingEdit = {this.handleEditClick} />
        buttonText="Return to Board List"
    } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = 
    <NewBoard 
        onNewBoardCreation={this.handleAddingNewBoardToList} />
        buttonText= "Return to Board List";
    } else {
        currentlyVisibleState = 
    <BoardList
        boardList = {this.state.BoardList} 
        onBoardSelection = {this.handleChangingSelectedBoard} />
        buttonText= 'Add Board';
    }
    return(
    <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
}}

export default SiteControl;