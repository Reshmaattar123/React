import React, { Component } from 'react'
//import react from 'react';
import { Input, Menu } from 'semantic-ui-react';
// { NavLink, withRouter } from 'reactstrap';
import { NavLink, withrouter } from 'react-router-dom';

export default class NavBars extends Component {
    state= {activeItem: "home"};
  

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
      };
    
     render(){
        const { activeItem } = this.state;
    
        return (
          <Menu secondary>
            <Menu.Item
              as={NavLink} to="/"
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink} to="/customer"
              name='customer'
              active={activeItem === 'customer'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink} to="/product"
              name='product'
              active={activeItem === 'product'}
              onClick={this.handleItemClick}
            />
             <Menu.Item
              as={NavLink} to="/store"
              name='store'
              active={activeItem === 'store'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink} to="/sales"
              name='sales'
              active={activeItem === 'sales'}
              onClick={this.handleItemClick}
            />
            </Menu>
          
        )
      }
    }   
    
