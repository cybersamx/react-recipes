// Based on https://react.dev/reference/react/useReducer

import { useReducer } from 'react';

// Something to represent the state of this component.
interface PageState {
  count: number;
}

// useReducer returns a dispatch function, which has accepts an argument of this type.
type DispatchAction = {
  type: 'add';
  payload?: number;
}

// This reducer function is called when we dispatch an action. It takes in a state and
// returns a new state based on the dispatched action.
function reducer(state: PageState, action: DispatchAction) {
  if (action.type === 'add') {
    return {
      ...state,
      count: state.count + (action.payload ? action.payload : 0),
    };
  }

  return state;
}

function initCount(startCount: number): PageState {
  return {
    count: 0,
  };
}

export default function Home() {
  // Declare the hook and start "hooking".
  // const [state, dispatch] = useReducer(reducer, { count: 0 });
  // The following (longer form) declaration is the same as the above.
  const [state, dispatch] = useReducer(reducer, 0, initCount);

  function handleClick() {
    // Dispatch an action, which will call the reducer function.
    dispatch({ type: 'add', payload: 1});
  }

  return (
    <div>
      <h1>useReducer</h1>
      <div>
        <a href="/">Return to home</a>
        <p>
          <strong>Format: </strong><code>const [state, dispatch] = useReducer(reducer, initialArg, init?)</code>
        </p>
        <p>
          <strong>Counter: </strong>{state.count}
        </p>
        <p>
          <button onClick={handleClick}>Add</button>
        </p>
      </div>
    </div>
  );
}
