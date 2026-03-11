import type { FiltersAction } from "../types/filters";
import type { Filters } from "../types/filters";


// Initial state for filters
export const initialFiltersState: Filters = {
  name: "",
  position: "",
  status: "",
  yearsOfExperience: "",
};

// Reducer function to manage filters state
export function filtersReducer ( state: Filters, action: FiltersAction ): Filters {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
        position: "",
        status: "",
        yearsOfExperience: "",
      };
    case "SET_POSITION":
      return {
        ...state,
        position: action.payload,
        status: "",
        yearsOfExperience: "",
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
        yearsOfExperience: "",
      };
    case "SET_YEARS_OF_EXPERIENCE":
      return {
        ...state,
        yearsOfExperience: action.payload,
      };
    case "RESET_FILTERS":
      return initialFiltersState;
    default:
      return state;
  }
}