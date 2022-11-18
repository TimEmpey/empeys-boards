import React from "react";
import PropTypes from 'prop-types';
import Board from "./Boards";

const mainBoardList = [
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

function AvailableBoards(props) {
    return (
        <React.Fragment>
            {props.mainBoardList.map((board) => 
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

mainBoardList.propTypes = {
    mainBoardList: PropTypes.array,
    onBoardSelection: PropTypes.func
};

export default AvailableBoards;