import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Uml from "./pages/uml";
import ItSicherheit from "./pages/itsicherheit";
import Algorithmen from "./pages/algorithmen";
import Datenbank from "./pages/datenbanken";
import Designpattern from "./pages/designpattern";
import Softwarequali from "./pages/softwarequali";
import Programmiersprachen from "./pages/programminglanguages";
import Versionsverwaltung from "./pages/versionsverwaltung";
import Tabellencalc from "./pages/tabellencalc";
import Webentwicklung from "./pages/webentwicklung";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/uml" element={<Uml />} />
        <Route path="/itsicherheit" element={<ItSicherheit />} />
        <Route path="/algorithmen" element={<Algorithmen />} />
        <Route path="/datenbank" element={<Datenbank />} />
        <Route path="/designpattern" element={<Designpattern />} />
        <Route path="/softwarequali" element={<Softwarequali />} />
        <Route path="/programminglingos" element={<Programmiersprachen />} />
        <Route path="/versionsverwaltung" element={<Versionsverwaltung />} />
        <Route path="/webentwicklung" element={<Webentwicklung />} />
        <Route path="/tabellencalc" element={<Tabellencalc />} />

      </Routes>
    </BrowserRouter>
  );
}

