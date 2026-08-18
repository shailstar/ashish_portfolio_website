import * as React from "react";

/** Soft pill label for skills, categories and filters. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default "sage" */
  tone?: "sage" | "camel" | "clay" | "stone" | "ink";
  /** @default "md" */
  size?: "sm" | "md";
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
