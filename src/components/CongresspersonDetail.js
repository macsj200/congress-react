import React, { Component } from 'react';

export class CongresspersonDetail extends Component {
    render() {
        const { congressperson } = this.props;
        return (
            <div>
                <h2>Info</h2>
                <div className="card bg-light p-3">
                    <p className="mb-0">Name: <strong>{ congressperson.name }</strong></p>
                </div>
                <div className="card bg-light p-3">
                    <p className="mb-0">District: <strong>{ congressperson.district }</strong></p>
                </div>
                <div className="card bg-light p-3">
                    <p className="mb-0">Phone: <strong>{ congressperson.phone }</strong></p>
                </div>
                <div className="card bg-light p-3">
                    <p className="mb-0">Office: <strong>{ congressperson.office }</strong></p>
                </div>
            </div>
        );
    }
}