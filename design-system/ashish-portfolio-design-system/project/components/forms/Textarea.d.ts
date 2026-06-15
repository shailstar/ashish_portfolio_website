import * as React from "react";

/** Multi-line text field, companion to Input. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  /** @default 4 */
  rows?: number;
  style?: React.CSSProperties;
}

export function Textarea(props: TextareaProps): JSX.Element;
