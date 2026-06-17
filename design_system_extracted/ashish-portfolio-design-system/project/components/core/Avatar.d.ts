import * as React from "react";

/** Round portrait with a soft brand ring; falls back to initials. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  /** Used for initials fallback and alt text. */
  name?: string;
  /** Pixel diameter. @default 48 */
  size?: number;
  /** Show the sage ring. @default true */
  ring?: boolean;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
