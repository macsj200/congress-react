import React, { Component } from 'react';

export class CongresspersonDetail extends Component {
    state = {
        congressperson: {}
    };
    render() {
        const { congressperson } = this.state;
        return (
            <div>
                <h2>Info</h2>
                <div class="card bg-light p-3">
                    <p class="mb-0">Name: <strong>{ congressperson.name }</strong></p>
                </div>
                <div class="card bg-light p-3">
                    <p class="mb-0">District: <strong>{ congressperson.district }</strong></p>
                </div>
                <div class="card bg-light p-3">
                    <p class="mb-0">Phone: <strong>{ congressperson.phone }</strong></p>
                </div>
                <div class="card bg-light p-3">
                    <p class="mb-0">Office: <strong>{ congressperson.office }</strong></p>
                </div>
            </div>
        );
    }
}