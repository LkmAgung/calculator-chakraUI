import React from 'react';
import { Button } from '@chakra-ui/react';

const CalculatorButton = ({ 
    label, 
    onClick, 
    colorScheme = "gray", 
    variant = "solid", 
    h = "60px",
    fontSize = "xl",
    ...props 
}) => {
    return (
        <Button
            onClick={onClick} 
            colorScheme={colorScheme}
            variant={variant}
            size="lg" 
            h={h}
            w="100%"
            fontSize={fontSize}
            fontWeight="bold"
            borderRadius="lg"
            _hover={{ 
                transform: "scale(1.05)",
                transition: "all 0.2s"
            }}
            _active={{
                transform: "scale(0.95)"
            }}
            {...props}
        >
            {label}
        </Button>
    );
};

export default CalculatorButton;