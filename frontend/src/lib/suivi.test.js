import { describe, it, expect, beforeEach } from "vitest";
import { getSuivi, estSuivi, toggleSuivi } from "./suivi";

beforeEach(() => {
  localStorage.clear();
});

describe("suivi", () => {
  it("est vide par défaut", () => {
    expect(getSuivi()).toEqual([]);
    expect(estSuivi(1)).toBe(false);
  });

  it("ajoute puis retire un id via toggleSuivi", () => {
    expect(toggleSuivi(42)).toBe(true);
    expect(estSuivi(42)).toBe(true);
    expect(estSuivi("42")).toBe(true);

    expect(toggleSuivi(42)).toBe(false);
    expect(estSuivi(42)).toBe(false);
  });

  it("ignore un contenu corrompu dans le stockage local", () => {
    localStorage.setItem("opportunity_hub_suivi", "{ pas du json valide");
    expect(getSuivi()).toEqual([]);
  });
});
