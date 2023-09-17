import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './slice/counterSlice'
import Button from 'react-bootstrap/Button'

export function Counter () {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <Button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
