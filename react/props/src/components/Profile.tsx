// Make width type of number (passed as JavaScript value) or string (passed as a JSX attribute).
import Avatar from './Avatar';
import Card from './Card';
import { parseSize } from './helpers';

export type UserProps = {
  name: string;
  imageUrl: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  rounded?: boolean;
}

export function Profile(props: UserProps) {
  const { name, width } = props;

  // Just to make this component more robust, so perform some validation.
  const w = parseSize(width);

  const nameStyle= {
    // https://github.com/typestyle/typestyle/issues/281#issuecomment-535359254
    textAlign: 'center' as const,
    width: w,
  };

  return (
    <Card width={width}>
      <Avatar {...props} />
      <div style={nameStyle}>
        {name}
      </div>
    </Card>
  );
}
