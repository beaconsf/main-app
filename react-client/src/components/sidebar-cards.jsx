import React, { Component } from 'react'
import SidebarCard from './SidebarCard.jsx';

class Sidebar extends Component {
    constructor(props) {
      super(props)
      this.state = {
        posts : [{
          org: "name of org - shelter",
          title: "title of post",
          user : 'bob',
          date : 1560118294761, //date.now() number
          loc : [37.764850,-122.422761]
      },{
          org: "name of org - shelter",
          title: "title of post",
          user : 'bob',
          date : 1560118294761, //date.now() number
          loc : [37.764850,-122.422761]
      },{
          org: "name of org - shelter",
          title: "title of post",
          user : 'bob',
          date : 1560118294761, //date.now() number
          loc : [37.764850,-122.422761]
      }]
      }
    }
    render() {
      let card = this.state.posts.map((post) => {
        return (<SidebarCard post={post}/>)
      })
      return (
        <div>
          <div className="list-cards">
            <ul>{card}</ul>
          </div>
        </div>
      )
    }
  }
  
  export default Sidebar;