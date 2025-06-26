import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
  output: '',
  operation: null,
  calculated: false
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    appendInput: (state, action) => {
      // Reset input if we just calculated a result and start a new number
      if (state.calculated) {
        state.input = action.payload;
        state.output = '';
        state.calculated = false;
      } else {
        state.input += action.payload;
      }
    },
    
    toggleSign: (state) => {
      // For input state
      if (state.input) {
        // Parse the expression to find the last number
        const regex = /([+\-*/]?)(\-?\d+\.?\d*)$/;
        const match = state.input.match(regex);
        
        if (match) {
          const [fullMatch, operator, number] = match;
          const startPos = state.input.length - fullMatch.length;
          const beforeMatch = state.input.substring(0, startPos);
          
          // Toggle the sign of the number
          const numValue = Number(number);
          const toggledNumber = numValue * -1;
          
          // Reconstruct the expression - without explicit '+' for positive numbers
          if (operator && operator !== '-') {
            // If there's a non-minus operator before the number
            state.input = beforeMatch + operator + (toggledNumber < 0 ? toggledNumber : Math.abs(toggledNumber));
          } else if (operator === '-') {
            if (beforeMatch === '') {
              state.input = Math.abs(toggledNumber).toString();
            } else {
              state.input = beforeMatch + '+' + Math.abs(toggledNumber);
            }
          } else {
            state.input = beforeMatch + (toggledNumber < 0 ? toggledNumber : Math.abs(toggledNumber));
          }
        }
      }
      // For output state (result of previous calculation)
      else if (state.output && state.output !== '0') {
        const numValue = Number(state.output);
        state.output = (numValue * -1).toString();
      }
    },
    
    setOperation: (state, action) => {
      state.operation = action.payload;
      
      if (state.input !== '') {

        const lastChar = state.input.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
          state.input = state.input.slice(0, -1) + action.payload;
        } else {
          state.input += action.payload;
        }

        state.calculated = false;
      } 
      // Jika ada output dari perhitungan sebelumnya
      else if (state.output !== '') {
        state.input = state.output + action.payload;
        state.output = '';
        state.calculated = false;
      }
    },
    
    calculate: (state) => {
      try {
        // Use Function constructor instead of eval for better security
        // eslint-disable-next-line no-new-func
        const result = new Function('return ' + state.input)();
        state.output = result.toString();
        state.input = '';
        state.calculated = true;
      } catch (error) {
        state.output = 'Error';
        state.input = '';
        state.calculated = true;
      }
    },
    
    clear: (state) => {
      state.input = '';
      state.output = '';
      state.operation = null;
      state.calculated = false;
    }
  }
});

export const { appendInput, setOperation, toggleSign, calculate, clear } = calculatorSlice.actions;
export default calculatorSlice.reducer;