import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react';

const menuItems = [
  { name: 'Home', to: '/', exact: true },
  { name: 'Todos', to: '/todos' }
];

class HeaderView extends Component {
  render() {
    return (
      <Header>
      </Header>
    );
  }
}

export default HeaderView;
