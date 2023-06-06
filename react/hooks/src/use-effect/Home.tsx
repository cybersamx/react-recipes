// Based on https://react.dev/reference/react/useEffect

import { ChangeEvent, useEffect, useState } from 'react';

import { Coordinate, connect, disconnect, getRandomCoord, sleep } from './drone-api';

export default function Home() {
  const [decPoints, setDecPoints] = useState(3);

  // Declare the position we want to track between refreshes.
  const [coordinate, setCoordinate] = useState<Coordinate>({
    lat: 0,
    long: 0,
  });

  // Connect to a system that updates the current coordinate of the drone.
  // We use useEffect to initialize and synchronize with an external system.
  useEffect(() => {
    // Use async calls inside useEffect, don't mark the callback param of useEffect async.
    // Do the following instead.
    connect();

    // Get a random update every 2 seconds.
    let done = false;
    const loop = async () => {
      while (!done) {
        const coord = await getRandomCoord(decPoints);
        setCoordinate(coord);

        await sleep(2000);
      }
    };

    loop().then(() => {
      console.log('Looping');
    });

    // Returns a function that react will call to clean up.
    return () => {
      done = true;
      disconnect();
    };
  }, [decPoints]);  // Put any reactive variables in the deps param if useEffect is dependent on them.

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const target = e.target as typeof e.target & {
      value: number;
    }

    setDecPoints(target.value);
  };

  return (
    <div>
      <h1>useReducer</h1>
      <div>
        <a href="/">Return to home</a>
        <p>
          <strong>Format: </strong><code>useEffect(setup, dependencies?)</code>
        </p>
        <p>
          <strong>Coordinate: </strong>{coordinate.lat}, {coordinate.long}
        </p>
        <div>
          <select name="decPoints" onChange={handleChange} defaultValue="3">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
  );
}
