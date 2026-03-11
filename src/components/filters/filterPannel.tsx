// UI components
import { Box, Button, Stack , Typography} from "@mui/material";

// types
import type { Filters, FilterOptions } from "../../types/filters";

// filter components
import { NameFilter } from "./NameFiler";
import { PositionFilter } from "./PositionFilter";
import { StatusFilter } from "./StatusFilter";
import { YearsOfExperienceFilter } from "./YearsOfExperienceFilter";


interface FiltersPanelComponentProps {
  filters: Filters;
  onFilterChange: (filterType: keyof Filters, value: string) => void;
  filterOptions: FilterOptions;
  onResetFilters: () => void;
}

export function FiltersPanel({ filters, onFilterChange, filterOptions, onResetFilters}: FiltersPanelComponentProps) {

  // Determine if dependent filters should be disabled based on the current filter values
  const isNameFilled = filters.name.trim() !== "";
  const isPositionFilled = filters.position !== "";

  return (
    <Box component="section" sx={{ p: 2, mb: 2, border: "1px solid #e0e0e0", borderRadius: 1 }}>
      <Typography variant="h5" component="h2">
        Filters
      </Typography>

      <Stack spacing={2}>
        <NameFilter
          filterValue={filters.name}
          onChange={(value) => onFilterChange("name", value)}
        />

        <PositionFilter
          value={filters.position}
          onChange={(value) => onFilterChange("position", value)}
          options={filterOptions.positions}
          disabled={!isNameFilled}
        />

        <StatusFilter
          value={filters.status}
          onChange={(value) => onFilterChange("status", value)}
          options={filterOptions.statuses}
          disabled={!isPositionFilled}
        />

        <YearsOfExperienceFilter
          value={filters.yearsOfExperience} 
          onChange={(value) => onFilterChange("yearsOfExperience", value)}
          options={filterOptions.yearsOfExperience}
        />

        <Button variant="outlined" onClick={onResetFilters} fullWidth>
          Reset Filters
        </Button>
      </Stack>
    </Box>
  );
}