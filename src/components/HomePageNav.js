import React from 'react'
import {Link} from 'react-router-dom'
import { Icon, Menu, Button } from 'semantic-ui-react'


const HomePageNav = ({toggleModal}) => {
  return (
    <Menu as='nav' stackable>
      <Menu.Item onClick={e => toggleModal()}>
        <Icon name='add'/> Add new list
      </Menu.Item>
    </Menu>
  )
}

export default HomePageNav;