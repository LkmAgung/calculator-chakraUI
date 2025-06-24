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
        state.calculated = false;
      } else {
        state.input += action.payload;
      }
    },
    
    setOperation: (state, action) => {
      // Simpan operator saat ini
      state.operation = action.payload;
      
      // Jika ada input, tambahkan operator ke string input
      if (state.input !== '') {
        state.input += action.payload;
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

export const { appendInput, setOperation, calculate, clear } = calculatorSlice.actions;
export default calculatorSlice.reducer;