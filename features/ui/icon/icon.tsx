import Image from "next/image";
// import cx from "classnames";

type IconInput = {
  src: string;
  alt: string;
  height: number;
  width: number;
  iconPadding?: number;
};

export default function Icon({
  src,
  alt,
  height,
  width,
  iconPadding,
}: IconInput) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ marginLeft: `${iconPadding}px` }}
    />
  );
}
