// react
import { useReducer, useMemo } from "react";

// types
import type { Filters } from "../types/filters";
import type { Candidate } from "../types/candidate";

// reducers
import { filtersReducer, initialFiltersState } from "../reducers/filtersReducer";

// utils
import { applyFilters, getDynamicFilterOptions  } from "../utils/filterUtils";

// Custom hook to manage candidates filtering logic
export function useCandidatesFiltering(candidates: Candidate[]) {
    // State management for filters using useReducer
    const [filters, dispatch] = useReducer(filtersReducer, initialFiltersState);

    // only need to be re calculated when candidates or filters change
    // Apply filters and get filtered candidates
    const filteredCandidates = useMemo(
        () => applyFilters(candidates, filters),
        [candidates, filters]
    );
    // Get dynamic filter options based on currently displayed candidates
    const filterOptions = useMemo(
        () => getDynamicFilterOptions(candidates, filters),
        [candidates, filters]
    );

    // Handle filter changes
    const handleFilterChange = (filterType: keyof Filters, value: string) => {
        switch (filterType) {
        case "name":          
            dispatch({ type: "SET_NAME", payload: value });
            break;
        case "position":
            dispatch({ type: "SET_POSITION", payload: value });
            break;
        case "status":
            dispatch({ type: "SET_STATUS", payload: value });
            break;
        case "yearsOfExperience":
            dispatch({ type: "SET_YEARS_OF_EXPERIENCE", payload: value });
            break;
        }
    };

    const handleResetFilters = () => {
        dispatch({ type: "RESET_FILTERS" });
    };

    return {
        filters,
        filteredCandidates,
        filterOptions,
        handleFilterChange,
        handleResetFilters,
    };
}