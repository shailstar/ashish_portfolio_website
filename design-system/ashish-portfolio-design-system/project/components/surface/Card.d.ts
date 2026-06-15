import * as React from "react";

/** Soft elevated surface — the base container for content blocks. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** @default "lg" */
  padding?: "none" | "sm" | "md" | "lg";
  /** @default "sm" */
  elevation?: "none" | "sm" | "md" | "lg";
  /** Use the rose tint surface instead of white. @default false */
  tint?: boolean;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
