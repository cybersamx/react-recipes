import { UserProps } from './Profile';
import { parseSize } from './helpers';

export default function Avatar({
  imageUrl,
  width,
  height,
  rounded = false,
}: UserProps) {
  // Just to make this component more robust, so perform some validation.
  const w = parseSize(width);
  const h = parseSize(height);

  const radius = (rounded)
    ? (w > h) ? h/2 : w/2  // Make the photo circular.
    : 0;                   // No rounded corners.

  const imgStyle = {
    width: w,
    height: h,
    borderRadius: radius,
  };

  const nameStyle= {
    // https://github.com/typestyle/typestyle/issues/281#issuecomment-535359254
    textAlign: 'center' as const,
  };

  return (
    <img
      src={imageUrl}
      style={imgStyle}
    />
  );
}
