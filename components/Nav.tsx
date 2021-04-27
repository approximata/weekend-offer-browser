import Link from 'next/link'
import { ReactElement } from 'react'
import navStyles from '../styles/Nav.module.css'

const Nav = (): ReactElement => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
