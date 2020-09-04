import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name AllUsers with the name for the new
// component.
class AllUsers extends Component {
  state = {
    heading: 'Class Component',
  };

  componentDidMount(){
      axios.get('/api/user/all').then(response => {
        this.setState({
            ...this.state,
            users: response.data
        })
      })
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        {JSON.stringify(this.state.users)}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AllUsers);