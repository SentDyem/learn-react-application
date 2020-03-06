import React from 'react';
import AddFishForm from "../components/AddFishForm";

class Inventory extends React.Component{
    render() {
        return (
            <div className='Inventory'>
                <h2>This is React Component</h2>
                <AddFishForm />
            </div>
        );
    }
};
export default Inventory;