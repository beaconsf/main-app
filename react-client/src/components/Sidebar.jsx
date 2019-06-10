import React, { Component } from 'react'
import Filter from './Sidebar-Filter.jsx';
import SidebarCard from './sidebar-cards.jsx';

const Sidebar = props => {
  return <div>
    <Filter handlers={props}/>
    <SidebarCard />
  </div>;
};


export default Sidebar;