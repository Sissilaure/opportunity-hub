import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Repertoire from "./pages/Repertoire";
import FicheDetaillee from "./pages/FicheDetaillee";
import Ressources from "./pages/Ressources";
import RessourceDetail from "./pages/RessourceDetail";
import Aide from "./pages/Aide";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <Routes>
        {/* L'espace équipe a sa propre page de connexion, sans la nav publique */}
        <Route path="/admin" element={<Admin />} />

        <Route
          path="*"
          element={
            <>
              <NavBar />
              <Routes>
                <Route path="/" element={<Repertoire />} />
                <Route path="/opportunites/:id" element={<FicheDetaillee />} />
                <Route path="/ressources" element={<Ressources />} />
                <Route path="/ressources/:id" element={<RessourceDetail />} />
                <Route path="/aide" element={<Aide />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </div>
  );
}