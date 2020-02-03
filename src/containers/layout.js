import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Container } from 'semantic-ui-react'
import store from '../store'
import ImageBoard from './imageBoard'

export default class Layout extends Component {

  render() {
    return (
      <Provider store={store}>
        <Container fluid textAlign="justified">
          <div style={{width: '10%'}} />
          <ImageBoard />
          <div style={{width: '10%'}} />
        </Container>
      </Provider>
    );
  }
}
