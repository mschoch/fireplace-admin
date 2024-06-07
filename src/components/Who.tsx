import React, { useEffect, useState } from "react";

interface WhoDoc  {
    loginName?: string
    displayName?: string
    profilePicURL?: string
    node?: number
}

const navbarStyle = {
    maxHeight: "unset",
    borderRadius: "56px"
};

export const Who = () => {

    function forceDark() {
        document.getElementById("htmlroot")?.classList.remove("theme-light");
        document.getElementById("htmlroot")?.classList.add("theme-dark");
    }

    function forceLight() {
        document.getElementById("htmlroot")?.classList.remove("theme-dark");
        document.getElementById("htmlroot")?.classList.add("theme-light");
    }

    function resetSystem() {
        document.getElementById("htmlroot")?.classList.remove("theme-dark");
        document.getElementById("htmlroot")?.classList.remove("theme-light");
    }

    const initWho: WhoDoc = {};
    const [who, setWho] = useState<WhoDoc>(initWho);

    useEffect(() => {
        let url = "/api/who";
        fetch(url)
            .then(res => res.json())
            .then(w => setWho(w))
    }, []);

    return (
        <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="#">
                <div className="navbar-item">
                    <img src={who.profilePicURL} alt="your logo" width="56px" height="56px" style={navbarStyle}/>
                </div>
            </a>
            <div className="navbar-dropdown is-boxed">
                <div className="navbar-item">{who.displayName}</div>
                <div className="navbar-item">{who.node}</div>
                <hr/>
                <a className="navbar-item" onClick={forceLight}>Force Light Mode </a>
                <a className="navbar-item" onClick={forceDark}>Force Dark Mode</a>
                <a className="navbar-item" onClick={resetSystem}>Use System Mode</a>
            </div>
        </div>
    )
}