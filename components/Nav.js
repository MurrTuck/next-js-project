import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/product'>Product</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact Us</Link>
                </li>
                <li>
                    <Link href='/feedback'>Feedback</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav