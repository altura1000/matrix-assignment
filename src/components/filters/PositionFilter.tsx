import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface PositionFilterProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  disabled: boolean;
}

export function PositionFilter({
  value,
  onChange,
  options,
  disabled,
}: PositionFilterProps) {
  return (
    <FormControl fullWidth disabled={disabled} size="small">
      <InputLabel>Position</InputLabel>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label="Position"
      >
        <MenuItem value="">
          <em>All Positions</em>
        </MenuItem>
        {options.map((position) => (
          <MenuItem key={position} value={position}>
            {position}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
