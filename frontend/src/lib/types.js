// Catégories réelles d'opportunités, alignées sur l'ENUM `opportunite.type` en base.
// Chaque type porte sa propre couleur : ça sert de repère visuel dans une grille dense,
// et ça évite que toute la page tourne autour d'une seule teinte.
export const TYPE_LABELS = {
  bourse: "BOURSE",
  stage: "STAGE",
  emploi: "EMPLOI",
  concours: "CONCOURS",
  autre: "AUTRE",
};

export const TYPE_STYLES = {
  bourse: { bar: "bg-primary", badge: "bg-primary-light text-primary" },
  stage: { bar: "bg-accent", badge: "bg-accent-light text-accent" },
  emploi: { bar: "bg-success", badge: "bg-success-bg text-success" },
  concours: { bar: "bg-feature", badge: "bg-feature-bg text-feature" },
  autre: { bar: "bg-muted", badge: "bg-canvas text-muted" },
};
