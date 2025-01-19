import { Link } from "react-router-dom";
import "../css/App.css"
import "../css/index.css"

export default function Home() {
    return (
        <div>
            <h1>Themen</h1>
            <ul>
                <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>

                <li><Link to="/uml" className="text-white hover:text-gray-300">UML</Link></li>
                <li><Link to="/itsicherheit" className="text-white hover:text-gray-300">IT-Sicherheit</Link></li>
                <li><Link to="/algorithmen" className="text-white hover:text-gray-300">Algorithmen</Link></li>
                <li><Link to="/datenbank" className="text-white hover:text-gray-300">Datenbank</Link></li>
                <li><Link to="/designpattern" className="text-white hover:text-gray-300">Designpattern</Link></li>
                <li><Link to="/softwarequali" className="text-white hover:text-gray-300">Softwarequalität</Link></li>
                <li><Link to="/programminglingos" className="text-white hover:text-gray-300">Programmiersprachen</Link></li>
                <li><Link to="/versionsverwaltung" className="text-white hover:text-gray-300">Versionsverwaltung</Link></li>
                <li><Link to="/webentwicklung" className="text-white hover:text-gray-300">Webentwicklung</Link></li>
                <li><Link to="/tabellencalc" className="text-white hover:text-gray-300">Tabellenkalkulation</Link></li>
            </ul>
        </div>
    );
}


