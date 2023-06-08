// This is a mock service.

export type Coordinate = {
  lat: number;
  long: number;
};

function getRandomLatLong(decPoints: number): number {
  return Number((Math.random() * 360 - 180).toFixed(decPoints));
}

export function sleep(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

export function connect() {
  console.log('Connecting');
}

export function disconnect() {
  console.log('Disconnecting');
}

export async function getRandomCoord(decPoints: number): Promise<Coordinate> {
  await sleep(1000);

  return {
    lat: getRandomLatLong(decPoints),
    long: getRandomLatLong(decPoints),
  };
}
