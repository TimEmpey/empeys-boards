import React from 'react';
import PropTypes from 'prop-types';

function Details(props) {

    const { board, onClickingDelete } = props;
    return (
        <React.Fragment>
            <h1>Board Details</h1>
            <h3>{board.style} - {board.price}</h3>
            <button onClick={ props.onClickingEdit }>Update Board Group</button> 
            <button onClick={()=> onClickingDelete(board.id) }>Delete Board Group</button>
            <hr/>
        </React.Fragment>
)}

Details.propTypes = {
    board: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func 
};

export default Details;