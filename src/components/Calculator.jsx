import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, VStack, Grid, GridItem } from '@chakra-ui/react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';
import { 
  appendInput, 
  setOperation, 
  calculate, 
  clear 
} from '../../redux/features/calculator/calculatorSlice';

const Calculator = () => {
    const { input, output } = useSelector(state => state.calculator);
    const dispatch = useDispatch();

    const handleButtonClick = (value) => {
        switch (value) {
            case '=':
                dispatch(calculate());
                break;
            case 'C':
                dispatch(clear());
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                dispatch(setOperation(value));
                break;
            default:
                dispatch(appendInput(value));
                break;
        }
    };

    return (
        <Container maxW="md" centerContent py={8}>
            <Box
                bg="white"
                borderRadius="2xl"
                boxShadow="2xl"
                p={6}
                w="100%"
                maxW="400px"
            >
                <VStack spacing={4}>
                    <CalculatorDisplay value={output || input || '0'} />
                    
                    {/* Calculator Grid - 4 columns, 5 rows */}
                    <Grid templateColumns="repeat(4, 1fr)" gap={3} w="100%">
                        {/* Row 1 */}
                        <GridItem>
                            <CalculatorButton 
                                label="C" 
                                onClick={() => handleButtonClick('C')} 
                                colorScheme="red"
                            />
                        </GridItem>
                        <GridItem>
                            <CalculatorButton 
                                label="/" 
                                onClick={() => handleButtonClick('/')} 
                                colorScheme="orange"
                            />
                        </GridItem>
                        <GridItem>
                            <CalculatorButton 
                                label="*" 
                                onClick={() => handleButtonClick('*')} 
                                colorScheme="orange"
                            />
                        </GridItem>
                        <GridItem>
                            <CalculatorButton 
                                label="-" 
                                onClick={() => handleButtonClick('-')} 
                                colorScheme="orange"
                            />
                        </GridItem>

                        {/* Row 2 */}
                        <GridItem>
                            <CalculatorButton 
                                label="7" 
                                onClick={() => handleButtonClick('7')} 
                            />
                        </GridItem>
                        <GridItem>
                            <CalculatorButton 
                                label="8" 
                                onClick={() => handleButtonClick('8')} 
                            />
                        </GridItem>
                        <GridItem>
                            <CalculatorButton 
                                label="9" 
                                onClick={() => handleButtonClick('9')} 
                            />
                        </GridItem>
                        <GridItem rowSpan={2}>
                            <CalculatorButton 
                                label="+" 
                                onClick={() => handleButtonClick('+')} 
                                colorScheme="orange"
                                h="132px"
                            />
                        </GridItem>

                        {/* Row 3 */}
                        <GridItem>
                            <CalculatorButton 
                                label="4" 
                                onClick={() => handleButtonClick('4')} 
                            />
                        </GridItem>
                        <GridItem>
                            <CalculatorButton 
                                label="5" 
                                onClick={() => handleButtonClick('5')} 
                            />
                        </GridItem>
                        <GridItem>
                            <CalculatorButton 
                                label="6" 
                                onClick={() => handleButtonClick('6')} 
                            />
                        </GridItem>

                        {/* Row 4 */}
                        <GridItem>
                            <CalculatorButton 
                                label="1" 
                                onClick={() => handleButtonClick('1')} 
                            />
                        </GridItem>
                        <GridItem>
                            <CalculatorButton 
                                label="2" 
                                onClick={() => handleButtonClick('2')} 
                            />
                        </GridItem>
                        <GridItem>
                            <CalculatorButton 
                                label="3" 
                                onClick={() => handleButtonClick('3')} 
                            />
                        </GridItem>
                        <GridItem rowSpan={2}>
                            <CalculatorButton 
                                label="=" 
                                onClick={() => handleButtonClick('=')} 
                                colorScheme="green"
                                h="132px"
                            />
                        </GridItem>

                        {/* Row 5 */}
                        <GridItem colSpan={2}>
                            <CalculatorButton 
                                label="0" 
                                onClick={() => handleButtonClick('0')} 
                            />
                        </GridItem>
                        <GridItem>
                            <CalculatorButton 
                                label="." 
                                onClick={() => handleButtonClick('.')} 
                            />
                        </GridItem>
                    </Grid>
                </VStack>
            </Box>
        </Container>
    );
};

export default Calculator;