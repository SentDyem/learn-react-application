import React from "react";
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) =>
    {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    };

    render() {
        return (
            <div className="store-picker">
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Enter to magazine</h2>
                    <input type="text"
                           ref = {this.myInput}
                           required placeholder="Magazine name"
                           defaultValue={getFunName()}
                    />
                    <button type="submit">Visit -></button>
                </form>
            </div>
        )
    }
};
export default StorePicker;