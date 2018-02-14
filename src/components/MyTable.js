import React from 'react';
import { Table } from 'react-bootstrap';

class MyTable extends React.Component {
    render() {
        const rows = this.props.records.map((row,num) => {
            return (
                <tr key={num}>
                    <th> {row.inputName} </th>
                    <th> {row.inputEmail} </th>
                    <th> {row.inputFood} </th>
                </tr>
            );
        });

        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Food</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default MyTable;