import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface StatusFilterProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  disabled: boolean;
}

export function StatusFilter({
  value,
  onChange,
  options,
  disabled,
}: StatusFilterProps) {
  return (
    <FormControl fullWidth disabled={disabled} size="small">
      <InputLabel>Status</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label="Status"
      >
        <MenuItem value="">
          <em>All Statuses</em>
        </MenuItem>
        {options.map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
