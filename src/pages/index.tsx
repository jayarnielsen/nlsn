import { Img, Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box
      as="main"
      css={{
        display: "flex",
        minHeight: "100vh",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Text as="em">Coming soon...</Text>
    </Box>
  );
};

export default Home;
