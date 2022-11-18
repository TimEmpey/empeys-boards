import React from 'react';
import PropTypes from 'prop-types';

function Details(props) {

    const { board, onClickingDelete } = props;
    return (
        <React.Fragment>
            <h1>Board Details</h1>
            <h3>{board.style} - {board.price}</h3>
            {board.selection.map(selection => {
                return (
                    <div>
                        <p>{selection}</p> 
                    </div>    
                )})}
            <button onClick={ props.onClickingEdit }>Update Group</button> 
            <button onClick={()=> onClickingDelete(board.id) }>Delete Group</button>
            <hr/>
        </React.Fragment>
)}

Details.propTypes = {
    board: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func 
};

export default Details;