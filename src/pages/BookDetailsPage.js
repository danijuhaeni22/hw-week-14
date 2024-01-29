import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

const BookDetailsPage = () => {
  const router = useRouter();
  const { name, publisher, years } = router.query;

  return (
    <Box p="4">
      <Heading as="h2" size="lg" mb="4">
        Book Details
      </Heading>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Heading as="h2" size="md" mb="2">
          {name}
        </Heading>
        <Text fontSize="sm" color="gray.600" mb="2">
          Publisher: {publisher}
        </Text>
        <Text fontSize="sm" color="gray.600">
          Years: {years}
        </Text>
        <Box mt="4">
          {/* Add any additional details or a link back to the book list */}
          <Text fontSize="sm" color="teal.800">
            Additional details...
          </Text>
          <Link
            href="/your-page"
            fontSize="sm"
            color="teal.800"
            textDecoration="underline"
          >
            Back to Book List
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default BookDetailsPage;
