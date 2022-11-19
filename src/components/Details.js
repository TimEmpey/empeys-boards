import React from 'react';
import PropTypes from 'prop-types';

function Details(props) {

    const { board, onClickingDelete, onClickingSell } = props;
    return (
        <React.Fragment>
            <h1>Board Details</h1>
            <h3>{board.terrain} - Price: ${board.price}</h3>
            <p><em>Quantity: {board.quantity}</em></p>
            <button onClick={ props.onClickingEdit }>Update Board Group</button> <br/>
            <button onClick={()=> onClickingDelete(board.id) }>Delete Board Group</button><br/>
            <button onClick={()=> onClickingSell(board.id)}>Sell</button>
            <hr/>
        </React.Fragment>
)}

Details.propTypes = {
    board: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func ,
    onClickingSell: PropTypes.func 
};

export default Details;