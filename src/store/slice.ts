import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface ICounter {
  id: string;
  value: number;
  withTick?: boolean;
}

const initialState:{counters: ICounter[]} = {
  counters: [{ id: uuidv4(), value: 42, withTick: false}]
}

const slice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    increment(state, action) {
      const incrementedCounter = state.counters.find(counter => counter.id === action.payload.id)
      if ( incrementedCounter ) {
        incrementedCounter.value += 1
      }
    },
    decrement(state, action) {
      const incrementedCounter = state.counters.find(counter => counter.id === action.payload.id)
      if ( incrementedCounter ) {
        incrementedCounter.value -= 1
      }
    },
    addCounter(state) {
      state.counters.push({
        id: uuidv4(),
        value: state.counters.reduce((acc, counter) => acc + counter.value, 0),
      })
      state.counters.forEach((counter, i) => {
        (i + 1) % 4 === 0 ? counter.withTick = true : counter.withTick = false;
      })
    },
    deleteCounter(state, action) {
      state.counters = state.counters.filter((counter) => counter.id !== action.payload.id)
      state.counters.forEach((counter, i) => {
        (i + 1) % 4 === 0 ? counter.withTick = true : counter.withTick = false;
      })
    },
  }
})

export default slice.reducer;
export const { increment, decrement, addCounter, deleteCounter } = slice.actions;