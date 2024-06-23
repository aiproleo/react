import { Link, Outlet, } from "react-router-dom";

export default function Root() {
    return (
        <div id="root">
            <div id="sidebar">
                <h1>OmniDevX React</h1>
                <div>
                    <form id="search-form" role="search">
                        <input id="q" aria-label="Search contacts" placeholder="Search" type="search" name="q" />
                        <div id="search-spinner" aria-hidden hidden={true} />
                        <div className="sr-only" aria-live="polite"></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={"/About"}>About</Link></li>
                        <li><Link to={`/contacts`}>Your Friend</Link></li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
                <h3>Welcome</h3>
            </div>
        </div>
    );
}
