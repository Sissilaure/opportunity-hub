// Gestion du suivi personnel : stocké uniquement sur l'appareil, sans compte (RG8, RG9)
const CLE_STOCKAGE = "opportunity_hub_suivi";

export function getSuivi() {
  try {
    return JSON.parse(localStorage.getItem(CLE_STOCKAGE) || "[]");
  } catch {
    return [];
  }
}

export function estSuivi(id) {
  return getSuivi().includes(Number(id));
}

export function toggleSuivi(id) {
  const idNum = Number(id);
  const suivis = getSuivi();
  const nouveaux = suivis.includes(idNum)
    ? suivis.filter((i) => i !== idNum)
    : [...suivis, idNum];
  localStorage.setItem(CLE_STOCKAGE, JSON.stringify(nouveaux));
  return nouveaux.includes(idNum);
}