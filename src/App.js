import React, { Component } from 'react';
import './App.css';
import { CongresspersonSearch } from './components/CongresspersonSearch';
import { CongresspersonList } from './components/CongresspersonList';
import { CongresspersonDetail } from './components/CongresspersonDetail';

class App extends Component {
  state = {
    congresspersons: [],
    congressperson: {}
  }
  setCongresspersons = congresspersons => this.setState({ congresspersons });
  setCongressperson = congressperson => this.setState({ congressperson });
  render() {
    const { congresspersons, congressperson } = this.state;
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
                <CongresspersonSearch setCongresspersons={this.setCongresspersons} />
              </div>
          </div>
          <div className="row">
              <div className="col-sm">
                <CongresspersonList congresspersons={congresspersons} setCongressperson={this.setCongressperson} />
              </div>
              <div className="col-sm">
                <CongresspersonDetail congressperson={congressperson} />
              </div>
          </div>
        </div>
    );
  }
}

export default App;
