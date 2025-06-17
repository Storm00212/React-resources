import logo from '../../assets/images/logo.webp';
import './nav.css'

export const Navbar = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="Logo" style={{ height: '100px' }} />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </div>
    );
}