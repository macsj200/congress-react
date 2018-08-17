import React, { Component } from 'react';

export class CongresspersonList extends Component {
    state = {
        house: "Representatives",
    }

    render() {
        const { house } = this.state;
        const { congresspersons, setCongressperson } = this.props;
        return (
            <div>
                <h2>List / <span style={{
                    color:'#0000ffb5'
                }}>{ house }</span></h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Party</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        congresspersons.map((congressperson, idx) => (
                            <tr
                            onClick={() => setCongressperson(congressperson)}
                            key={idx}>
                                <td>{ congressperson.name }</td>
                                <td>{ congressperson.party }</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}