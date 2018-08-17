import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CongresspersonSearch } from './components/CongresspersonSearch';
import { CongresspersonList } from './components/CongresspersonList';
import { CongresspersonDetail } from './components/CongresspersonDetail';


class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm">
                <h1
                style={{
                  color:'#0000ffb5'
                }}
                >
                  Who's My Congressperson?
                </h1>
            </div>
          </div>
          <div className="row">
              <div className="col-sm">
                <CongresspersonSearch />
              </div>
          </div>
          <div className="row">
              <div className="col-sm">
                <CongresspersonList />
              </div>
              <div className="col-sm">
                <CongresspersonDetail />
              </div>
          </div>
        </div>
    );
  }
}

export default App;
