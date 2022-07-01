import React, { useEffect } from 'react';
import { decrement, deleteCounter, ICounter, increment } from "../store/slice";
import { useAppDispatch } from "../hooks/redux";
import { Badge, Button } from "react-bootstrap";

const Counter = ({ id, value, withTick }: ICounter) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleTick = function () {
      dispatch(increment({ id }))
    }

    if (withTick) {
      const tick = setInterval(handleTick, 1000)

      return () => clearInterval(tick)
    }
  }, [withTick])

  return (
    <>
      {!withTick && <Button variant="warning" onClick={() => dispatch(decrement({ id }))}>decrement</Button>}
      <Badge bg="secondary">{value}</Badge>
      {!withTick && <Button variant="success" onClick={() => dispatch(increment({ id }))}>increment</Button>}
      <Button variant="danger" onClick={() => dispatch((deleteCounter({ id })))}>delete</Button>
    </>
  );
};

export default Counter;