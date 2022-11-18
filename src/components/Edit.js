import React from "react";
import BoardForm from "./BoardForm";
import PropTypes from "prop-types";

function EditBoard (props) {
    const { board } = props;

function handleEditBoardSubmission(event) {
    event.preventDefault();
    props.onEditBoard({
        terrain: event.target.terrain.value, 
        price: event.target.price.value, 
        quantity: event.target.quantity.value, 
        id: board.id
})}

return (
    <React.Fragment>
        <BoardForm 
            formSubmissionHandler =  {handleEditBoardSubmission}
            buttonText="Update Snowboard" />
        </React.Fragment>
    );
}

EditBoard.propTypes = {
    board: PropTypes.object,
    onEditBoard: PropTypes.func
};

export default EditBoard;