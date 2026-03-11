import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface YearsOfExperienceFilterProps {
  value: string;
  onChange: (value: string) => void;
  options: number[];
}

export function YearsOfExperienceFilter({ value, onChange, options}: YearsOfExperienceFilterProps) {
  return (
    <FormControl fullWidth size="small">
      <InputLabel>Years of Experience</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label="Years of Experience"
      >
        <MenuItem value="">
          <em>All Years</em>
        </MenuItem>
        {options.map((year) => (
          <MenuItem key={year} value={year}>
            {year} years
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
