// @ts-nocheck
import { useFireproof } from 'use-fireproof'
import { connect } from "@fireproof/partykit";
import {Link, useParams} from 'react-router-dom'
import React from "react";

interface DatabaseDoc  {
    _id: string
}

export function Database() {
    const { name } = useParams()
    const { database, useLiveQuery } = useFireproof(name)

    // const s3conf = {
    //     upload: "https://" + window.location.hostname + '/api/upload',
    //     download: "https://" + window.location.hostname + '/api/download/',
    //     websocket: "wss://" + window.location.hostname + '/api/websocket'
    // }
    // connect.aws(database, s3conf);

    const cx = connect(database, '', 'https://' + window.location.hostname);
    console.log("connected", cx);


    const docs = useLiveQuery(
        (doc, emit) => {
                emit(doc?._id)
        },
        { descending: false }
    ).docs as DatabaseDoc[]

    return (
        <section>
            <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Fireplace</Link></li>
                    <li><Link to="/database/">Databases</Link></li>
                    <li><Link to={"/database/" + name} className="is-active">{name} </Link></li>
                </ul>
            </nav>
            <h1 className="is-size-1">Documents</h1>
            <table className="table is-hoverable is-bordered is-fullwidth">
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                {docs.map(doc => (
                    <tr>
                        <td><a href={"/database/" + name + "/" + doc._id}>{doc._id}</a></td>
                        <td></td>
                    </tr>
                ))}
            </table>
        </section>
    )
}
