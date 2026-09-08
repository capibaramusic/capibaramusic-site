import Image from "next/image";

type NewsImageProps = {
  src?: string;
  width: number;
  height: number;
  label?: string;
  sizes: string;
  className: string;
  placeholderClassName: string;
  priority?: boolean;
};

export default function NewsImage({
  src,
  width,
  height,
  label,
  sizes,
  className,
  placeholderClassName,
  priority = false,
}: NewsImageProps) {
  if (!src) {
    return (
      <div
        className={`${placeholderClassName} flex items-center justify-center border border-[#DDD] bg-[#F7F7F4]`}
        aria-label={label}
      >
        <span className="type-placeholder text-[#888]">{label}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt=""
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
