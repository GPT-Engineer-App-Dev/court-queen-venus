import { Box, Flex, Image, Text, Link, VStack, HStack, Button } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" bg="gray.800" color="white" minHeight="100vh">
        <Image src="/images/venus-williams-hero.jpg" alt="Venus Williams" boxSize="100%" objectFit="cover" />
        <VStack p={5} spacing={4} align="center" justify="center">
          <Text fontSize="4xl" fontWeight="bold">Welcome to Venus Williams' Official Website</Text>
          <Text fontSize="xl">Explore the life and career of a tennis legend.</Text>
          <HStack spacing={3}>
            <Link href="/biography" _hover={{ textDecoration: 'none' }}>
              <Button colorScheme="teal">Biography</Button>
            </Link>
            <Link href="/career" _hover={{ textDecoration: 'none' }}>
              <Button colorScheme="teal">Career</Button>
            </Link>
            <Link href="/gallery" _hover={{ textDecoration: 'none' }}>
              <Button colorScheme="teal">Gallery</Button>
            </Link>
          </HStack>
        </VStack>
        <HStack spacing={4} position="absolute" bottom="3" right="3">
          <Link href="https://twitter.com" isExternal><FaTwitter size="1.5em" /></Link>
          <Link href="https://instagram.com" isExternal><FaInstagram size="1.5em" /></Link>
          <Link href="https://facebook.com" isExternal><FaFacebookF size="1.5em" /></Link>
          <Link href="https://linkedin.com" isExternal><FaLinkedinIn size="1.5em" /></Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Index;