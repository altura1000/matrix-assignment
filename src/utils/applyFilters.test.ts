import { describe, it, expect } from "vitest";
import { applyFilters } from "./filterUtils";
import type { Candidate } from "../types/candidate";
import type { Filters } from "../types/filters";

const candidates: Candidate[] = [
  {
    id: 1,
    name: "Tomer",
    email: "tomer@mail.com",
    position: "Frontend",
    status: "New",
    yearsOfExperience: 2,
  },
  {
    id: 2,
    name: "Dan",
    email: "dan@mail.com",
    position: "Backend",
    status: "Interview",
    yearsOfExperience: 5,
  },
];

describe("applyFilters edge cases", () => {

  it("returns empty array when no candidate matches", () => {
    const filters: Filters = {
      name: "xyz",
      position: "",
      status: "",
      yearsOfExperience: "",
    };

    const result = applyFilters(candidates, filters);

    expect(result).toEqual([]);
  });

  it("returns all candidates when filters are empty", () => {
    const filters: Filters = {
      name: "",
      position: "",
      status: "",
      yearsOfExperience: "",
    };

    const result = applyFilters(candidates, filters);

    expect(result.length).toBe(2);
  });

  it("name search should be case insensitive", () => {
    const filters: Filters = {
      name: "TOMER",
      position: "",
      status: "",
      yearsOfExperience: "",
    };

    const result = applyFilters(candidates, filters);

    expect(result).toEqual([candidates[0]]);
  });

  it("name search should ignore spaces", () => {
    const filters: Filters = {
      name: "  tomer  ",
      position: "",
      status: "",
      yearsOfExperience: "",
    };

    const result = applyFilters(candidates, filters);

    expect(result).toEqual([candidates[0]]);
  });

  it("should filter by position correctly", () => {
    const filters: Filters = {
      name: "",
      position: "Backend",
      status: "",
      yearsOfExperience: "",
    };

    const result = applyFilters(candidates, filters);

    expect(result).toEqual([candidates[1]]);
  });

  it("should filter by status correctly", () => {
    const filters: Filters = {
      name: "",
      position: "",
      status: "New",
      yearsOfExperience: "",
    };

    const result = applyFilters(candidates, filters);

    expect(result).toEqual([candidates[0]]);
  });

  it("should filter by years of experience", () => {
    const filters: Filters = {
      name: "",
      position: "",
      status: "",
      yearsOfExperience: "5",
    };

    const result = applyFilters(candidates, filters);

    expect(result).toEqual([candidates[1]]);
  });

  it("should combine multiple filters", () => {
    const filters: Filters = {
      name: "dan",
      position: "Backend",
      status: "Interview",
      yearsOfExperience: "5",
    };

    const result = applyFilters(candidates, filters);

    expect(result).toEqual([candidates[1]]);
  });

  it("should return empty array when combination has no match", () => {
    const filters: Filters = {
      name: "dan",
      position: "Frontend",
      status: "",
      yearsOfExperience: "",
    };

    const result = applyFilters(candidates, filters);

    expect(result).toEqual([]);
  });

  it("should handle empty candidates list", () => {
    const filters: Filters = {
      name: "",
      position: "",
      status: "",
      yearsOfExperience: "",
    };

    const result = applyFilters([], filters);

    expect(result).toEqual([]);
  });

});