// types
import type { Candidate } from "../types/candidate";
import type { FilterOptions, Filters } from "../types/filters";

// Applies the current filters to the list of candidates and returns the filtered list
// This is the new candidate list based on the user filters
export function applyFilters(candidates: Candidate[], filters: Filters): Candidate[] {
  return candidates.filter((candidate) => {
    // Name filter
    if (filters.name) { // if name filter is filled, check if candidate's name includes the filter value (case-insensitive)
      const subNameExists = candidate.name.toLowerCase().includes(filters.name.toLowerCase().trim());
      if(!subNameExists) return false;
    }

    // Position filter
    if (filters.position && candidate.position !== filters.position) { // if position filter is filled, check for exact match
      return false;
    }

    // Status filter
    if (filters.status && candidate.status !== filters.status) { // if status filter is filled, check for exact match 
      return false;
    }

    // Years of Experience filter
    if (filters.yearsOfExperience) { // if years of experience filter is filled, check for exact match (convert filter value to number)
      const filterYears = parseInt(filters.yearsOfExperience, 10);
      if (candidate.yearsOfExperience !== filterYears) {
        return false;
      }
    }

    return true;
  });
}


// Generates dynamic filter options for the dropdowns based on the currently displayed candidates after applying filters
// current work to one direction only,
export function getDynamicFilterOptions( candidates: Candidate[], filters: Filters ): FilterOptions {
  // Get candidates after name filter
  const afterNameFilter = filters.name ? candidates.filter((c) =>
        c.name.toLowerCase().includes(filters.name.toLowerCase().trim())
      )
    : candidates;

  // Get candidates after name + position filter
  const afterPositionFilter = filters.position && afterNameFilter
      ? afterNameFilter.filter((c) => c.position === filters.position)
      : afterNameFilter;

  // Get candidates after name + position + status filter
  const afterStatusFilter = filters.status && afterPositionFilter
      ? afterPositionFilter.filter((c) => c.status === filters.status)
      : afterPositionFilter;
  

    // return the coorisponding filter options based on the currently displayed candidates after applying filters
  return {
    positions: getUniqueValues(afterNameFilter, "position") as string[],
    statuses: getUniqueValues(afterPositionFilter, "status") as string[],
    yearsOfExperience: getUniqueValues( afterStatusFilter, "yearsOfExperience") as number[],
  };
}

// Helper to get unique values for a specific field from candidates
function getUniqueValues<T extends keyof Candidate>( data: Candidate[], field: T ): Candidate[T][] {
  // Extract values and get unique ones
  const values = data.map((item) => item[field]);
  const unique = Array.from(new Set(values));
  
  // Sort for better UX
  if (field === "yearsOfExperience") {
    return (unique as number[]).sort((a, b) => a - b) as unknown as Candidate[T][];
  }
  
  // For string fields, sort alphabetically
  return (unique as string[]).sort() as unknown as Candidate[T][];
}