import * as React from "react";

/** Small status dot + label — quieter than a Tag. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default "success" */
  tone?: "success" | "warning" | "danger" | "info" | "neutral";
  /** Show the leading dot. @default true */
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
