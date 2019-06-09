import React from 'react';
import Filter from './Sidebar-Filter.jsx';

const Sidebar = props => {
  return <div>
    <Filter handlers={props}/>
    <div>Mel's thing</div>
  </div>;
};

export default Sidebar;
