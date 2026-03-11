import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import type { Candidate } from "../types/candidate";

export function CandidatesTable({ candidates }: { candidates: Candidate[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Position</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Years of Experience</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {candidates.map((candidate) => (
          <TableRow key={candidate.id}>
            <TableCell>{candidate.name}</TableCell>
            <TableCell>{candidate.email}</TableCell>
            <TableCell>{candidate.position}</TableCell>
            <TableCell>{candidate.status}</TableCell>
            <TableCell>{candidate.yearsOfExperience}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CandidatesTable;