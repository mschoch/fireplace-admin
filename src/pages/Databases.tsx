import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

interface DatabaseDoc  {
    name?: string
    version?: string
}

export function Databases() {
    const initDatabases: DatabaseDoc[] = [];
    const [databases, setDatabases] = useState<DatabaseDoc[]>(initDatabases);

    useEffect(() => {
        let url = "/api/database";
        fetch(url)
            .then(res => res.json())
            .then(d => setDatabases(d))
    }, []);

    return (
        <section>
            <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Fireplace</Link></li>
                    <li><Link to="/database/" className="is-active">Databases</Link></li>
                </ul>
            </nav>
            <h1 className="is-size-1">Databases</h1>
            <table className="table is-hoverable is-bordered is-fullwidth">
                <tr>
                    <th>Name</th>
                    <th>Version</th>
                </tr>
                {databases.map(db => (
                    <tr>
                        <td><a href={"/database/" + db.name}>{db.name}</a></td>
                        <td>{db.version}</td>
                    </tr>
                ))}
            </table>
        </section>

    )
}