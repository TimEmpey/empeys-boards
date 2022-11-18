import React from "react";
import PropTypes from "prop-types";

function Board(props){
    return (
        <React.Fragment>
            <div onClick = {() => props.whenBoardClicked(props.id)}>
                <h3>{props.style}  - {props.price}</h3>
                <p>{props.board}</p>
                <hr/>
            </div>
        </React.Fragment>
    )
}

Board.propTypes = {
    style: PropTypes.string.isRequired,
    boards: PropTypes.string.isRequired,
    id: PropTypes.string,
    whenBoardClicked: PropTypes.func
};

export default Board;