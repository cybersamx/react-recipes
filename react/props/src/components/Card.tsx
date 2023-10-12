import { PropsWithChildren } from 'react';
import { parseSize } from './helpers';

type CardProps = PropsWithChildren & {
  width?: number | string;
}

export default function Card({ children, width }: CardProps) {
  // Just to make this component more robust, so perform some validation.
  const w = parseSize(width);

  const boxStyle = {
    margin: 10,
    border: '1px solid black',
    width: w,
  }

  return (
    <div style={boxStyle}>
      {children}
    </div>
  )
}
