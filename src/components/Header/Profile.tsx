import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center ">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Emerson Dantas</Text>
          <Text color="gray.300" fontSize="small">
            emerson.dantaspereira@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Emerson Dantas"
        src="https://github.com/emersondp07.png"
      />
    </Flex>
  );
}
