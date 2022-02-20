import React, { useState } from "react";
import { Box, Heading, CloseButton } from "@chakra-ui/react";

export default function Card({ title, onRemove }) {
  return (
    <Box
      display="flex"
      textAlign="left"
      bgColor="tomato"
      borderRadius="lg"
      padding="1rem"
      width="100%"
    >
      <CloseButton alignContent="right" marginRight="1rem" onClick={onRemove} />
      <Heading as="h3">{title}</Heading>
    </Box>
  );
}
