// UI components
import { Stack, Container } from "@mui/material";

// hooks
import { useCandidatesFiltering } from "../hooks/useCandidatesFiltering";

// API
import { useQuery } from "@tanstack/react-query";

// components
import { FiltersPanel } from "../components/filters/FilterPannel";
import CandidatesTable from "../components/CandidatesTable";
import { fetchCandidates } from "../api/fetchCandidate";

export default function CandidatesPage() {
  const {
    data: candidates = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["candidates"], // unique key for this query
    queryFn: fetchCandidates, // fetch candidates from API
    retry: false, // do not try again in case of failure
  });

  
  const { filters, handleFilterChange, filterOptions, handleResetFilters, filteredCandidates} = useCandidatesFiltering(candidates);

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>{(error as Error).message}</p>

  return (
    <Container maxWidth="lg">
      <Stack spacing={3} sx={{ py: 3 }}>
        <FiltersPanel
          filters = {filters}
          onFilterChange={handleFilterChange}
          filterOptions={filterOptions}
          onResetFilters={handleResetFilters}
        />
        <CandidatesTable candidates={filteredCandidates} />
      </Stack>
    </Container>
  );
}