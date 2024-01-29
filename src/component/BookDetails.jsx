import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toISOString().split("T")[0];
};

const BookDetails = ({
  name,
  publisher,
  years,
  createdAt,
  updatedAt,
  onClose,
}) => {
  const formattedCreatedAt = formatDate(createdAt);
  const formattedUpdatedAt = formatDate(updatedAt);

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      bg="teal.200"
          boxShadow="md"
          backgroundColor="gray.100"
    >
      <Heading as="h2" size="md" mb="2">
        {name}
      </Heading>
      <Text fontSize="sm" color="gray.600" mb="2">
        Publisher : {publisher}
      </Text>
      <Text fontSize="sm" color="gray.600" mb="2">
        Years : {years}
      </Text>
      <Text fontSize="sm" color="gray.600" mb="2">
        Created At : {formattedCreatedAt}
      </Text>
      <Text fontSize="sm" color="gray.600" mb="2">
        Updated At : {formattedUpdatedAt}
      </Text>
      <Box mt="4">
        <Text
          fontSize="sm"
          color="teal.800"
          textDecoration="underline"
          cursor="pointer"
          onClick={onClose}
        >
          Close
        </Text>
      </Box>
    </Box>
  );
};

export default BookDetails;
