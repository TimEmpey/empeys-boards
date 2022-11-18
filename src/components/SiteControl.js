import React from 'react';
import AvailableBoards from "./BoardList";

class SiteControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        formVisibleOnPage: false
    };
}

handleClick = () => {
    this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
    }));
}

render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <SeasonalProducts />
        buttonText = "Return to Market Schedule";
    } else {
        currentlyVisibleState = <ScheduleList />
        buttonText = "View Boards";
    }
    return (
        <React.Fragment>
            {currentlyVisibleState}
            <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
    );
}}

export default SiteControl;