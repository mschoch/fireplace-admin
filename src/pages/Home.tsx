import logo from '../logo.svg';

export function Home() {
    return (
        <div className="prose prose-slate dark:prose-invert ">
            <div className="columns is-mobile is-centered">
                <div className="column is-half">
                    <p className="bd-notification is-primary">
                        <img src={logo} alt="Fireplace logo" width="512px" height="512px" className="is-centered"/>
                    </p>
                    <p>
                        Welcome to Fireplace, an experimental mashup of <a href="https://fireproof.storage/">Fireproof</a> and <a href="https://tailscale.com/">Tailscale</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}