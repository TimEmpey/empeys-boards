import React from 'react';
import BoardList from "./BoardList";
import Details from "./Details";
import EditBoard from "./Edit";
import NewBoard from "./NewBoard";

class SiteControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainBoardList: [],
            formVisibleOnPage: false,
            editing: false,
            selectedBoard: null
    };
}

handleAddingNewBoardToList = (newBoard) => {
    const newMainBoardList = this.state.mainBoardList.concat(newBoard);
    this.setState({mainBoardList: newMainBoardList,
        formVisibleOnPage: false });
}

handleClick = () => {
    if(this.state.selectedBoard != null){
        this.setState({
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
    this.setState({selectedBoard: selectedBoard});
}

handleDeletingBoard = (id) => {
    const newMainBoardList = this.state.mainBoardList.filter(board => board.id !== id);
    this.setState({
    mainBoardList: newMainBoardList,
    selectedBoard: null
    });
}

handleSellingBoard = (id) => {
    let boardToEdit = this.state.mainBoardList.filter(board => board.id === id)[0];
    if(boardToEdit.quantity === 0){
        boardToEdit.quantity = 0;
    } else {
        boardToEdit.quantity--;
        const editedMainBoardList = this.state.mainBoardList
            .filter(board => board.id !== id)
            .concat(boardToEdit);
        this.setState({
            mainBoardList: editedMainBoardList.sort((a, b) => a.terrain.localeCompare(b.name))
        });        
    }
}

handleEditingBoardInList = (boardToEdit) => {
    const editedMainBoardList = this.state.mainBoardList
    .filter(board => board.id !== this.state.selectedBoard.id)
    .concat(boardToEdit);
    this.setState({
        mainBoardList: editedMainBoardList,
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
        onClickingEdit = {this.handleEditClick} 
        onClickingSell = {this.handleSellingBoard}/>
        buttonText="Return to Board List"
    } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = 
    <NewBoard
        onNewBoardCreation={this.handleAddingNewBoardToList} />
        buttonText= "Return to Board List";
    } else {
        currentlyVisibleState = 
    <BoardList
        boardList = {this.state.mainBoardList} 
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