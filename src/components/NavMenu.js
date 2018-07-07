import React from 'react'
import {Link} from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react'

const NavMenu = ({sortAsc, deleteAllCheckedTasks,toggleSortAsc}) => {
  return (
      <Menu as='nav' stackable >
        <Link to="/" className="item"><Icon name="home"/>Home</Link>
      </Menu>
  )
}

export default NavMenu;
