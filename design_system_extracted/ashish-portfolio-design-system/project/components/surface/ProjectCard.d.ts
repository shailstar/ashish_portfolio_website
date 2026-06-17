import * as React from "react";

/**
 * The portfolio's signature work tile — cover image, title, year and tags.
 *
 * @startingPoint section="Portfolio" subtitle="Work tile with cover, title & tags" viewport="420x440"
 */
export interface ProjectCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  image?: string;
  title?: string;
  /** Overline category, shown uppercase in brand color. */
  category?: string;
  year?: string;
  /** Short skill/category tags. */
  tags?: string[];
  href?: string;
  style?: React.CSSProperties;
}

export function ProjectCard(props: ProjectCardProps): JSX.Element;
