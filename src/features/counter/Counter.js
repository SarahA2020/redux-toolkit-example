import React, { useState } from 'react';
// Importing these packages gives us access to the store itself (via a selector)
// and the ability to dispatch actions
import { useSelector, useDispatch } from 'react-redux';
// Here, we import all of the actions created within the counter slice file
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount, // The selector function (the one responsible for getting data out of the store) is imported
} from './counterSlice';

import styles from './Counter.module.css';

export function Counter() {
  // This uses the useSelector hook to get access to the count in the store
  const count = useSelector(selectCount); // 0
  // Now we use useDispatch() which gives us the ability to call dispatch() to dispatch actions
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        {/* When this button is clicked, the dispatch function dispatches the increment action */}
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        {/* This line uses the count const to get access to the value in the store */}
        <span className={styles.value}>{count}</span>

        {/* When this button is clicked, the dispatch function dispatches the decrement action */}

        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />

        {/* When clicked, this button dispatches the incrementByAmount action, and passes in a payload */}
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
