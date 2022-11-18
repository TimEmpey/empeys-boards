import React from "react";
import Board from "./Boards";

const mainBoardList = [
    {
        terrain: "All Mountain",
        selection: [
            "Good Company Camber",
            "Custom X Flying V",
            "Flight Attendant Split Board"
        ]
    },
    {
        terrain: "Terrain Park",
        selection: [
            "Blossom Camber",
            "Name Dropper",
            "Process Camber"
        ]
    },
    {
        terrain: "Powder",
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
                    <h2>{terrain.terrain}</h2>
                    {terrain.selection.map(selection => {
                        return (
                            <div>
                            <p>{selection}</p> 
                            </div>                                          
                        )
                    })}
                </div>
            )
        })}
    </div>
 ) }

export default AvailableBoards;