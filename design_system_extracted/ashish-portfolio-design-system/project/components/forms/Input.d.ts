import * as React from "react";

/** Soft rounded text field with optional label, hint and error state. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** When set, field renders in its error state and shows this message. */
  error?: string;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
