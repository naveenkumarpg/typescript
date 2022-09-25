import { useReducer } from 'react';
const initialState = { count: 0 };

type CounterState = {
  count: number;
};

// You can do this for optional payload skipping
type ActionType = {
  type: 'decrement' | 'increment';
  payload: number;
};

function reducer(state: CounterState, action: ActionType) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };

    case 'decrement':
      return { count: state.count - action.payload };

    default:
      throw new Error();
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <br />
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        Decrement by 10
      </button>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment by 10
      </button>
      <br />
    </>
  );
};
