import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import BoardForm from "./BoardForm";

function NewBoard(props){

function handleNewBoardSubmission(event) {
    event.preventDefault();
    props.onNewBoardCreation({
        terrain: event.target.terrain.value,
        price: event.target.price.value,
        quantity: event.target.quantity.value,
        id: v4()
    })
}

    return (
        <React.Fragment>
            <BoardForm
            formSubmissionHandler={handleNewBoardSubmission}
            buttonText="Add New Board" />
        </React.Fragment>
    );
}

NewBoard.propTypes = {
    onNewBoard: PropTypes.func
};

export default NewBoard;