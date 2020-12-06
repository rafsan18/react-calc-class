import React, { Component } from "react";
import Button from "./components/Button";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: "0",
            previous: [],
        };
    }

    reset = () => {
        console.log("reset");
    };
    removeLast = () => {
        console.log("removeLast");
    };
    addToCurrent = () => {
        console.log("addToCurrent");
    };
    calculate = () => {
        console.log("claculate");
    };
    render() {
        const buttons = [
            { symbol: "C", cols: 2, action: this.reset },
            { symbol: "CE", cols: 1, action: this.removeLast },
            { symbol: "/", cols: 1, action: this.addToCurrent },
            { symbol: "7", cols: 1, action: this.addToCurrent },
            { symbol: "8", cols: 1, action: this.addToCurrent },
            { symbol: "9", cols: 1, action: this.addToCurrent },
            { symbol: "*", cols: 1, action: this.addToCurrent },
            { symbol: "4", cols: 1, action: this.addToCurrent },
            { symbol: "5", cols: 1, action: this.addToCurrent },
            { symbol: "6", cols: 1, action: this.addToCurrent },
            { symbol: "-", cols: 1, action: this.addToCurrent },
            { symbol: "1", cols: 1, action: this.addToCurrent },
            { symbol: "2", cols: 1, action: this.addToCurrent },
            { symbol: "3", cols: 1, action: this.addToCurrent },
            { symbol: "+", cols: 1, action: this.addToCurrent },
            { symbol: "0", cols: 2, action: this.addToCurrent },
            { symbol: ".", cols: 1, action: this.addToCurrent },
            { symbol: "=", cols: 1, action: this.calculate },
        ];
        return (
            <div className="calc-container">
                <input type="text" className="current" />
                {buttons.map((btn, index) => {
                    return (
                        <Button
                            symbol={btn.symbol}
                            cols={btn.cols}
                            action={btn.action}
                            key={index}
                        />
                    );
                })}
            </div>
        );
    }
}

export default App;
