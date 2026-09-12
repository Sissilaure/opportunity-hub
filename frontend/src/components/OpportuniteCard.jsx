import { Link } from "react-router-dom";
import TypeBadge from "./TypeBadge";
import EcheanceBadge from "./EcheanceBadge";
import VerifiedBadge from "./VerifiedBadge";
import { TYPE_STYLES } from "../lib/types";

export default function OpportuniteCard({ opportunite }) {
  const style = TYPE_STYLES[opportunite.type];
  return (
    <Link
      to={`/opportunites/${opportunite.id}`}
      className="group relative block overflow-hidden rounded-card border border-line bg-surface p-4 pl-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <span
        className={`absolute inset-y-0 left-0 w-1 ${style ? style.bar : "bg-muted"}`}
        aria-hidden="true"
      />
      <TypeBadge type={opportunite.type} />
      <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">{opportunite.titre}</h3>
      <p className="mt-0.5 text-sm text-muted">{opportunite.organisme}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        <VerifiedBadge date={opportunite.dateVerification} />
        <EcheanceBadge
          statutEcheance={opportunite.statutEcheance}
          joursRestants={opportunite.joursRestants}
        />
      </div>
    </Link>
  );
}
