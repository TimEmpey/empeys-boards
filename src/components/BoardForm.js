
import React from "react";
import PropTypes from "prop-types";

function BoardForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <input
                    type='text'
                    name='terrain'
                    placeholder='Board Terrain' />
                <input
                    type='number'
                    name='price'
                    placeholder='Price' />
                <input
                    type='number'
                    name='quantity'
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