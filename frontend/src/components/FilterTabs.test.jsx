import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterTabs from "./FilterTabs";

describe("FilterTabs", () => {
  it("affiche un onglet par type d'opportunité réel (aligné sur l'ENUM SQL)", () => {
    render(<FilterTabs value="toutes" onChange={() => {}} />);
    ["Toutes", "Bourses", "Stages", "Emplois", "Concours", "Autres"].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("appelle onChange avec la valeur du filtre cliqué", () => {
    const onChange = vi.fn();
    render(<FilterTabs value="toutes" onChange={onChange} />);
    fireEvent.click(screen.getByText("Stages"));
    expect(onChange).toHaveBeenCalledWith("stage");
  });
});
