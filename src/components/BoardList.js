import React from "react";
import PropTypes from 'prop-types';
import Board from "./Boards";

function BoardList(props) {
    return (
        <React.Fragment>
            {props.boardList.map((board) => 
            <Board
            whenBoardClicked={props.onBoardSelection}
            terrain = {board.terrain}
            price = {board.price}
            id = {board.id}
            key = {board.id}/>
            )}
        </React.Fragment>
    );
}

BoardList.propTypes = {
    boardList: PropTypes.array,
    onBoardSelection: PropTypes.func
};

export default BoardList;