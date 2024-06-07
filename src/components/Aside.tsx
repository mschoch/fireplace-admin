import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faCalculator} from '@fortawesome/free-solid-svg-icons'
import { faGear} from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";

export function Aside() {
    const asideStyle = {
        paddingTop: "20px",
        paddingLeft: "20px"
    };
    return (
        <aside className="menu" style={asideStyle}>
            <ul className="menu-list">
                <li><Link to="/database/"><FontAwesomeIcon icon={faDatabase}/>&nbsp;&nbsp; Databases</Link></li>
                <li><Link to="/app/"><FontAwesomeIcon icon={faCalculator} />&nbsp;&nbsp; Applications</Link></li>
                <li><Link to="/settings/"><FontAwesomeIcon icon={faGear} />&nbsp;&nbsp; Settings</Link></li>
            </ul>
        </aside>
    )
}