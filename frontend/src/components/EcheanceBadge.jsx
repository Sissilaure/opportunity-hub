import { ClockIcon } from "./icons";

export default function EcheanceBadge({ statutEcheance, joursRestants }) {
  if (statutEcheance === "permanente") return null;

  if (statutEcheance === "depassee") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-danger-bg px-2.5 py-0.5 text-xs font-medium text-danger">
        Échéance dépassée
      </span>
    );
  }

  const isProche = statutEcheance === "proche";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
        isProche ? "bg-danger-bg text-danger" : "bg-canvas text-muted"
      }`}
    >
      <ClockIcon className="h-3 w-3 shrink-0" />
      Échéance {joursRestants} j
    </span>
  );
}
