// @ts-nocheck
import { useFireproof } from 'use-fireproof'
import { connect } from "@fireproof/partykit";
import {Link, useParams} from 'react-router-dom'
import React, { useEffect, useState } from "react";

interface DatabaseDoc  {
    _id: string
}

export function Document() {
    const { name, docID } = useParams()
    const { database} = useFireproof(name)
    const [docContent, setDocContent] = useState('');
    const [actuallyReady, setActuallyReady] = useState(false);

    const cx = connect(database, '', 'https://' + window.location.hostname);
    cx.loader?.ready().then(value => {
        console.log('cx loader ready');
        cx.loader?.remoteMetaStore?.load().then(value1 => {
            console.log('remote meta store loaded');
            setActuallyReady(true);
            console.log("connected", cx);
        })
    })

    useEffect(() => {
        if (actuallyReady) {
            const fetchItem = async () => {
                const doc = (await database.get(docID!)) as DatabaseDoc
                setDocContent(JSON.stringify(doc, null, 4))
            }
            fetchItem()
        }
    }, [actuallyReady])

    return (
        <section>
            <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/">Fireplace</Link></li>
                    <li><Link to="/database/">Databases</Link></li>
                    <li><Link to={"/database/" + name} >{name} </Link></li>
                    <li><Link to={"/database/" + name + "/" + docID} className="is-active">{docID}</Link></li>
                </ul>
            </nav>
            <h1 className="is-size-1">Document - {docID}</h1>
                <textarea
                    className="textarea"
                    rows="10"
                    value={docContent}
                />
        </section>
    )
}
