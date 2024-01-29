import { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import BookDetails from './BookDetails';

const Book = ({ name, publisher, years, createdAt, updatedAt }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const handleClick = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      bg="teal.200"
      boxShadow="md"
      cursor="pointer"
      onClick={handleClick}
    >
      <Heading as="h2" size="md" mb="2">
        {name}
      </Heading>
      <Text fontSize="sm" color="gray.600" mb="2">
        Publisher: {publisher}
      </Text>
      <Text fontSize="sm" color="gray.600">
        Years: {years}
      </Text>

      {isDetailsVisible && (
        <BookDetails
          name={name}
          publisher={publisher}
          years={years}
          createdAt={createdAt}
          updatedAt={updatedAt}
          onClose={handleClick}
        />
      )}
    </Box>
  );
};

export default Book;