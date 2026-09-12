// Client minimal pour l'API Gemini (Google AI Studio), via fetch natif : pas de SDK
// supplémentaire. Le niveau gratuit de Gemini n'exige pas de carte bancaire.
// Alias maintenu par Google plutôt qu'une version figée : évite de se faire
// désactiver au prochain retrait de modèle (ex. gemini-2.0-flash, retiré en 2026).
// La variante "lite" suffit à une tâche de classement/tri et est moins sujette
// à la saturation du tier gratuit que "gemini-flash-latest".
const DEFAULT_MODEL = "gemini-flash-lite-latest";

function endpoint(model) {
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
}

async function generateJson({ prompt, apiKey, model = process.env.GEMINI_MODEL || DEFAULT_MODEL }) {
  const res = await fetch(`${endpoint(model)}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      // Température à 0 : c'est un classement/tri, pas de la génération créative,
      // on veut un résultat stable d'un essai à l'autre pour la même description.
      generationConfig: { responseMimeType: "application/json", temperature: 0 },
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Gemini a répondu ${res.status} : ${detail.slice(0, 300)}`);
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error("Réponse Gemini vide ou dans un format inattendu.");
  }
  return text;
}

module.exports = { generateJson };
