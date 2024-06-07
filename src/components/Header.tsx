import logo from '../logo.svg';
import { Who } from './Who'

export function Header() {

    const navbarStyle = {
        maxHeight: "unset"
    };

    return (
        <nav className="navbar is-dark">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={logo} alt="Fireplace logo" width="64px" height="64px" style={navbarStyle}/>
                </a>
            </div>
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    Fireplace
                </a>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                </div>

                <div className="navbar-end">
                    <Who />
                </div>
            </div>
        </nav>
)
}