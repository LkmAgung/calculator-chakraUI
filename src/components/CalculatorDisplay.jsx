import { Box, Text } from '@chakra-ui/react';

const CalculatorDisplay = ({ value }) => {
    return (
        <Box 
            w="100%"
            h="80px"
            bg="gray.800"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            px={4}
            mb={2}
            boxShadow="inner"
        >
            <Text 
                fontSize="3xl" 
                fontWeight="bold" 
                color="white"
                fontFamily="monospace"
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
            >
                {value}
            </Text>
        </Box>
    );
};

export default CalculatorDisplay;