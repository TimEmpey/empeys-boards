import React from "react";
import Board from "./Boards";

const mainBoardList = [
    {
        terrain: "All Mountain",
        price: "$600",
        selection: [
            "Good Company Camber",
            "Custom X Flying V",
            "Flight Attendant Split Board"
        ]
    },
    {
        terrain: "Terrain Park",
        price: "$450",
        selection: [
            "Blossom Camber",
            "Name Dropper",
            "Process Camber"
        ]
    },
    {
        terrain: "Powder",
        price: "$400",
        selection: [
            "Tree Hometown Powder",
            "Tree 3D Daily",
            "Family Pow Wrench"
        ]
    }
];

function AvailableBoards() {
    return (
        <div>   
            {mainBoardList.map(terrain => {
                return (
                <div>
                    <h2>{terrain.terrain} - {terrain.price}</h2>      
                </div>
            )
        })}
    </div>
 ) }

export default AvailableBoards;