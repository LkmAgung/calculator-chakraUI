import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, VStack, Grid, GridItem } from '@chakra-ui/react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';
import { 
  appendInput, 
  setOperation, 
  calculate, 
  clear,
  toggleSign,
  reciprocal,
  square,
  squareRoot
} from '../../redux/features/calculator/calculatorSlice';

const Calculator = () => {
    const { input, output, previousExpression } = useSelector(state => state.calculator);
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
            case '+/-':
                dispatch(toggleSign());
                break;
            case '1/x':
                dispatch(reciprocal());
                break;
            case 'x²':
                dispatch(square());
                break;
            case '√x':
                dispatch(squareRoot());
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
                    <CalculatorDisplay 
                        value={output || input || '0'} 
                        previousExpression={previousExpression}
                    />
                    
                    {/* Calculator Grid - 4 columns, 6 rows */}
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

                        {/* Row 2  */}
                        <GridItem>
                            <CalculatorButton 
                                label="¹⁄ₓ" 
                                onClick={() => handleButtonClick('1/x')} 
                                colorScheme="purple"
                                fontSize="md"
                            />
                        </GridItem>
                        <GridItem>
                            <CalculatorButton 
                                label="x²" 
                                onClick={() => handleButtonClick('x²')} 
                                colorScheme="purple"
                                fontSize="md"
                            />
                        </GridItem>
                        <GridItem>
                            <CalculatorButton 
                                label="²√x" 
                                onClick={() => handleButtonClick('√x')} 
                                colorScheme="purple"
                                fontSize="md"
                            />
                        </GridItem>
                        <GridItem rowSpan={3}>
                            <CalculatorButton 
                                label="+" 
                                onClick={() => handleButtonClick('+')} 
                                colorScheme="orange"
                                h="196px"
                            />
                        </GridItem>

                        {/* Row 3 */}
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

                        {/* Row 4 */}
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

                        {/* Row 5 */}
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

                        {/* Row 6 */}
                        <GridItem>
                            <CalculatorButton 
                                label="+/-" 
                                onClick={() => handleButtonClick('+/-')}
                            />
                        </GridItem>
                        <GridItem>
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