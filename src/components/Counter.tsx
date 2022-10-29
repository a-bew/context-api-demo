import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import useCount from '../hooks/useCount';
import ShowStoredUser from '../ShowStoredUser';
import useUser from '../hooks/useUser';

function Counter(props:any) {
  const { calculation, count, incrementCount } = useCount();

  const { userId } = {userId: 1};
  
  const userObject = useMemo(() => {
    return { id: userId };
  }, [userId]); // Don't forget the dependencies here either!

  const user:any = useUser(userObject);

  console.log("user", user);

  return (
    <div>
        <ShowStoredUser name={"Tola"} />
        <p>Count {count} You clicked {calculation} times</p>
        <button onClick={ incrementCount }>Click me</button>
    </div>

  )
}

Counter.propTypes = {}

export default Counter
