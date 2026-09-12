const FILTERS = [
  { value: "toutes", label: "Toutes" },
  { value: "bourse", label: "Bourses" },
  { value: "stage", label: "Stages" },
  { value: "emploi", label: "Emplois" },
  { value: "concours", label: "Concours" },
  { value: "autre", label: "Autres" },
];

export default function FilterTabs({ value, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
            value === f.value
              ? "bg-primary text-white shadow-card"
              : "bg-surface text-ink shadow-card hover:bg-primary-light"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}