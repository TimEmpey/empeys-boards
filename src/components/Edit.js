import React from "react";
import ReusableBoardForm from "./ReusableBoardForm";
import PropTypes from "prop-types";

function EditBoard (props) {
    const { board } = props;

function handleEditBoardSubmission(event) {
    event.preventDefault();
    props.onEditBoard({name: event.target.terrain.value, price: event.target.price.value, 
    quantity: event.target.quantity.value, 
    id: board.id
})}

return (
    <React.Fragment>
        <ReusableBoardForm 
            formSubmissionHandler =     {handleEditBoardSubmission}
            buttonText="Update Snowboard" />
        </React.Fragment>
    );
}

EditBoard.propTypes = {
    board: PropTypes.object,
    onEditBoard: PropTypes.func
};

export default EditBoard;