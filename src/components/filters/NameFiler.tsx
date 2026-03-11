// UI components
import TextField from "@mui/material/TextField";

// types
import type { FiltersPanelProps } from "../../types/filters";

export function NameFilter({ filterValue, onChange }: FiltersPanelProps) {
   /* const handleChangeName = (e) => {
    console.log("value from name filter", e.target.value);
    onChange(value);
  }*/
  return (
    <TextField
      id="name-filter"
      label="Search by name"
      variant="outlined"
      size="small"
      fullWidth
      value={filterValue}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}