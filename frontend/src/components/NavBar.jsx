import { Link, useLocation } from "react-router-dom";

const LIENS = [
  { href: "/", label: "Répertoire" },
  { href: "/ressources", label: "Ressources" },
  { href: "/aide", label: "Aide" },
  { href: "/admin", label: "Espace équipe" },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-surface/90 shadow-header backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" aria-label="Accueil" className="group flex items-center gap-3">
          <img
            src="/logo.png"
            alt=""
            className="h-11 w-11 rounded-full shadow-card transition-transform duration-300 ease-out group-hover:rotate-6 group-hover:scale-105"
          />
          <span className="font-display text-2xl font-extrabold tracking-tight">
            <span className="text-ink">Opportunity</span>{" "}
            <span
              className="bg-[length:200%_auto] bg-gradient-to-r from-accent via-[#EAD08A] to-accent bg-clip-text text-transparent transition-[background-position] duration-700 ease-out group-hover:bg-[position:100%_0]"
              style={{ backgroundPosition: "0% 0" }}
            >
              Hub
            </span>
          </span>
        </Link>
        <nav className="flex gap-5">
          {LIENS.map((lien) => {
            const actif = location.pathname === lien.href;
            return (
              <Link
                key={lien.href}
                to={lien.href}
                className={`relative pb-1 text-sm font-medium transition-colors ${
                  actif ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {lien.label}
                {actif && <span className="absolute inset-x-0 -bottom-[1px] h-0.5 rounded-full bg-primary" />}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
