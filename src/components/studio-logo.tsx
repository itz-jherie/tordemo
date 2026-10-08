import Image from "next/image";

/** Intrinsic size of the official TORSTUDIO logo (public/torstudio.png). */
export const LOGO_WIDTH = 1202;
export const LOGO_HEIGHT = 439;

/**
 * The studio's actual logo artwork (torstudio.png).
 * `color="white"` renders on dark backgrounds (white box + black "tor" + white "studio").
 * `color="black"` inverts for light backgrounds (black box + white "tor" + black "studio").
 */
export default function StudioLogo({
  color = "white",
  className = "h-7",
  priority = false,
}: {
  color?: "white" | "black";
  className?: string;
  withName?: boolean; // kept for backwards compatibility
  nameClassName?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/torstudio.png"
      alt="TORSTUDIO"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      className={`w-auto shrink-0 object-contain transition-opacity ${className} ${
        color === "black" ? "invert" : ""
      }`}
    />
  );
}