import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

interface ApplicationDoc  {
    name?: string
    hostname?: string
    url?: string
    bindAddr?: string
    localPath?: string
    autoStart?: boolean
}

export function Applications() {
    const initDatabases: ApplicationDoc[] = [];
    const [applications, setApplications] = useState<ApplicationDoc[]>(initDatabases);

    useEffect(() => {
        let url = "/api/application";
        fetch(url)
            .then(res => res.json())
            .then(a => setApplications(a))
    }, []);

    return (
        <section>
            <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Fireplace</Link></li>
                    <li><Link to="/app/" className="is-active">Applications</Link></li>
                </ul>
            </nav>
            <h1 className="is-size-1">Applications</h1>
            <table className="table is-hoverable is-bordered is-fullwidth">
                <tr>
                    <th>Name</th>
                    <th>Hostname</th>
                    <th>Bind Addr</th>
                    <th>Auto Start</th>
                    <th>Local Path</th>
                </tr>
                {applications.map(app => (
                    <tr>
                        <td>{app.name}</td>
                        <td><a href={app.url} target="_blank" rel="noreferrer">{app.hostname}</a> </td>
                        <td>{app.bindAddr}</td>
                        <td>{app.autoStart}</td>
                        <td>{app.localPath}</td>
                    </tr>
                ))}
            </table>
        </section>
    )
}