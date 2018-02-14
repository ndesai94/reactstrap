import React from 'react';
import Form from './Form';
import MyTable from './MyTable';
import './css/Layout.css';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Welcome to the React Bootstrap Form & Table",
            tableData: []
        };
    }

    addRow(data) {
        var current = this.state.tableData.slice();
        current.push({
            inputName: data.name, 
            inputEmail: data.email, 
            inputFood: data.food
        });
        this.setState({
            tableData: current
        });
    }

    render() {
        return (
            <div>
                <h3> { this.state.text } </h3> <br /> <br /> <br />
                <section id="container">
                    <div id="form"><Form addRow={(data) => this.addRow(data)} /></div>
                    <div id="table"><MyTable records={this.state.tableData} /></div>
                </section>
            </div>
        )
    }
}

Layout.shouldComponentUpdate = false;

export default Layout;