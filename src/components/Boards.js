import React from "react";
import PropTypes from "prop-types";

function Board(props){
    return (
        <React.Fragment>
            <h3>{props.style}</h3>
            <p>{props.board}</p>
            <hr/>
        </React.Fragment>
    )
}

Produce.propTypes = {
    style: PropTypes.string.isRequired,
    boards: PropTypes.string.isRequired
};

export default Board;