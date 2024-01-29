import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { getBook } from "@/modules/fetching";
import { useEffect, useState } from "react";
import { HStack, Center, Text } from "@chakra-ui/react";
import Book from "../component/Books";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [book, setBooks] = useState(null);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getBook();
      setBooks(books);
    };
    fetchBooks();
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Center>
          <Text fontSize="2xl" fontWeight="bold" mb="5">
            Book Store
          </Text>
        </Center>
        <Center>
          <HStack spacing="4">
            {book?.map((book) => (
              <Book key={book.id} {...book} />
            ))}
          </HStack>
        </Center>
      </>
    </>
  );
}
