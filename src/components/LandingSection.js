import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Zach Collins!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

    <VStack spacing={8}>
    <VStack spacing={6}>

    <Avatar name="Zach" src="https://i.pravatar.cc/150?img=7" size="2x1" />
    <Heading size='md>'>{greeting}</Heading>
        </VStack>
    <Heading size ='xl'>{bio1}</Heading>
    <Heading size="6x1">{bio2}</Heading>
    </VStack>
    
  </FullScreenSection>
);

export default LandingSection;
