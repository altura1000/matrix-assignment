export type Filters = {
  name: string;
  position: string;
  status: string;
  yearsOfExperience: string;
};

export type FiltersPanelProps = {
  filterValue: string;
  onChange: (value: string) => void;
};

export type FilterOptions = {
  positions: string[];
  statuses: string[];
  yearsOfExperience: number[];
};

export type FiltersAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_POSITION"; payload: string }
  | { type: "SET_STATUS"; payload: string }
  | { type: "SET_YEARS_OF_EXPERIENCE"; payload: string }
  | { type: "RESET_FILTERS" };