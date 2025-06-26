import { Box, Text, VStack } from '@chakra-ui/react';

const CalculatorDisplay = ({ value, previousExpression }) => {
    return (
        <Box 
            w="100%"
            h="100px"
            bg="gray.800"
            borderRadius="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-end"
            px={4}
            mb={2}
            boxShadow="inner"
        >
            <VStack spacing={1} align="flex-end" w="100%">
                {/* Previous Expression */}
                <Text 
                    fontSize="sm" 
                    color="gray.400"
                    fontFamily="monospace"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    w="100%"
                    textAlign="right"
                    minH="20px"
                >
                    {previousExpression}
                </Text>
                
                {/* Current Value */}
                <Text 
                    fontSize="3xl" 
                    fontWeight="bold" 
                    color="white"
                    fontFamily="monospace"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    w="100%"
                    textAlign="right"
                >
                    {value}
                </Text>
            </VStack>
        </Box>
    );
};

export default CalculatorDisplay;