import React from "react";
import PropTypes from 'prop-types';
import Board from "./Boards";

const originalList = [
    {
        terrain: "All Mountain",
        price: "$600",
        // selection: [
        //     "Good Company Camber",
        //     "Custom X Flying V",
        //     "Flight Attendant Split Board"
        // ]
    },
    {
        terrain: "Terrain Park",
        price: "$450",
        // selection: [
        //     "Blossom Camber",
        //     "Name Dropper",
        //     "Process Camber"
        // ]
    },
    {
        terrain: "Powder",
        price: "$400",
        // selection: [
        //     "Tree Hometown Powder",
        //     "Tree 3D Daily",
        //     "Family Pow Wrench"
        // ]
    }
];

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