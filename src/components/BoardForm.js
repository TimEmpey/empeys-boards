
import React from "react";
import PropTypes from "prop-types";

function BoardForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <input
                    type='text'
                    terrain='terrain'
                    placeholder='Board Terrain' />
                <input
                    type='number'
                    terrain='price'
                    placeholder='Price' />
                <input
                    type='number'
                    terrain='quantity'
                    placeholder='# of stock' />
                    <button type='submit'>{props.buttonText}</button>
            </form>
        </React.Fragment>
    );
}

BoardForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default BoardForm;