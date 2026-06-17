import * as React from "react";

/**
 * Soft, pill-shaped call-to-action button for the Ashish portfolio.
 *
 * @startingPoint section="Core" subtitle="Pill CTA with brand variants" viewport="700x200"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Visual role. @default "primary" */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "ink";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render as a different element, e.g. "a". @default "button" */
  as?: "button" | "a";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Stretch to container width. @default false */
  full?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
