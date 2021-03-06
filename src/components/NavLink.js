import React from 'react'
import {Link} from 'react-router-dom'

export const NavLink = (props) => {
  return(
    <Link {...props} activestyle={{ textDecoration: 'underline' }} style={{ textDecoration: 'none' }} />
  )
}

export default NavLink