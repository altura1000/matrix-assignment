import type { Candidate } from "../types/candidate";

export async function fetchCandidates(): Promise<Candidate[]> {
  const response = await fetch("http://localhost:3001/candidates");

  if (!response.ok) {
    throw new Error("Failed to fetch candidates");
  }

  return response.json();
}