import React from 'react';
import Header from "../components/Header";
import Inventory from "../components/Inventory";
import Order from "../components/Order";


class App extends React.Component{

    state =
        {
            fishes: {},
            order: {}
        };


    addFish = fish => {
        console.log("Adding a fish");
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline = "Very fresh fish"/>
                </div>
                <Order />
                <Inventory />
            </div>

        )
    }
};
export default App;