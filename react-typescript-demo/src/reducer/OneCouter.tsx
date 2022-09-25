import { useReducer } from 'react';

const initialState = {
  count: 0
};

type CounterState = {
  count: number;
};

type RestType = {
  type: 'reset';
};

type UsefulType = {
  type: 'decrement' | 'increment';
  payload: number;
};

// You can do this for optional payload skipping
type ActionType = UsefulType | RestType;

function reducer(state: CounterState, action: ActionType) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };

    case 'decrement':
      return { count: state.count - action.payload };

    case 'reset':
      return initialState;

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
      <br />
      <button onClick={() => dispatch({ type: 'reset' })}>Reset to 0</button>
      <br />
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        Decrement by 10
      </button>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment by 10
      </button>
      <br />
      <button onClick={() => dispatch({ type: 'decrement', payload: 20 })}>
        Decrement by 20
      </button>
      <button onClick={() => dispatch({ type: 'increment', payload: 20 })}>
        Increment by 20
      </button>
    </>
  );
};
