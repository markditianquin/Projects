import React, { useState } from 'react'

interface Props {

}

export const Counter: React.FC<Props> = () => {
    const [counter, setCounter] = useState(0);
    return (
      <div>
        <p>You click {counter} times</p>
        <button onClick={() => setCounter(counter + 1)}>
          Click me
        </button>
      </div>
    );
}