import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import NavBars from '../components/NavBars';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
         {/*
<NavMenu></NavMenu>
    */ } 
        <NavBars/>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
