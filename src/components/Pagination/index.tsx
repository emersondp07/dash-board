import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack direction="row" mt="8" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} isCurrent />
        <PaginationItem number={3} isCurrent />
        <PaginationItem number={4} isCurrent />
        <PaginationItem number={5} isCurrent />
        <PaginationItem number={6} isCurrent />
        <PaginationItem number={7} isCurrent />
      </Stack>
    </Stack>
  );
}
