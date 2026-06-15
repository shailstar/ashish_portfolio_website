/* @ds-bundle: {"format":3,"namespace":"AshishPortfolioDesignSystem_48f8eb","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Card","sourcePath":"components/surface/Card.jsx"},{"name":"ProjectCard","sourcePath":"components/surface/ProjectCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"18a4914ac9bc","components/core/Badge.jsx":"5d246dcb3506","components/core/Button.jsx":"80576edca3b7","components/core/Tag.jsx":"7b19004eb561","components/forms/Input.jsx":"ceda226f04b4","components/forms/Textarea.jsx":"12fff825ab6b","components/surface/Card.jsx":"3bbe357a01ce","components/surface/ProjectCard.jsx":"2abd27ecc8e9","ui_kits/portfolio/About.jsx":"d22a352b97a8","ui_kits/portfolio/Contact.jsx":"303a7175a431","ui_kits/portfolio/Footer.jsx":"4d9b68c4f105","ui_kits/portfolio/Hero.jsx":"5fd2afdba6c0","ui_kits/portfolio/Nav.jsx":"5d9c81f8b497","ui_kits/portfolio/WorkGrid.jsx":"79bb0060ba0b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AshishPortfolioDesignSystem_48f8eb = window.AshishPortfolioDesignSystem_48f8eb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — round portrait with a soft brand ring. Falls back to initials.
 */
function Avatar({
  src = "",
  name = "",
  size = 48,
  ring = true,
  style = {},
  ...rest
}) {
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: "999px",
      background: "var(--rose-200)",
      color: "var(--rose-700)",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: `${Math.round(size * 0.36)}px`,
      overflow: "hidden",
      flex: "none",
      boxShadow: ring ? "0 0 0 3px var(--bg-page), 0 0 0 5px var(--rose-300)" : "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status dot+label or count. Quieter than a Tag.
 */
function Badge({
  children,
  tone = "success",
  dot = true,
  style = {},
  ...rest
}) {
  const tones = {
    success: "var(--success)",
    warning: "var(--gold)",
    danger: "var(--heart)",
    info: "var(--peri-500)",
    neutral: "var(--warm-500)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      fontFamily: "var(--font-sans)",
      fontSize: "0.8125rem",
      fontWeight: 600,
      color: "var(--text-body)",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "999px",
      background: tones[tone],
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary call-to-action for the Ashish portfolio.
 * Soft, pill-shaped, calm motion. Variants map to brand roles.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "0.875rem",
      gap: "6px"
    },
    md: {
      padding: "12px 24px",
      fontSize: "1rem",
      gap: "8px"
    },
    lg: {
      padding: "16px 32px",
      fontSize: "1.125rem",
      gap: "10px"
    }
  };
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "none",
      boxShadow: "var(--shadow-brand)"
    },
    secondary: {
      background: "var(--peri-500)",
      color: "#fff",
      border: "none",
      boxShadow: "var(--shadow-peri)"
    },
    outline: {
      background: "transparent",
      color: "var(--brand-ink)",
      border: "2px solid var(--rose-300)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "2px solid transparent",
      boxShadow: "none"
    },
    ink: {
      background: "var(--plum-900)",
      color: "#fff",
      border: "none",
      boxShadow: "var(--shadow-md)"
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === "button" ? disabled : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: sizes[size].gap,
      width: full ? "100%" : "auto",
      padding: sizes[size].padding,
      fontSize: sizes[size].fontSize,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-0.01em",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-soft), filter var(--dur-fast) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)",
      textDecoration: "none",
      whiteSpace: "nowrap",
      ...variants[variant],
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(1.04)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = "none";
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — soft pill label for skills, categories, filters.
 */
function Tag({
  children,
  tone = "rose",
  size = "md",
  style = {},
  ...rest
}) {
  const tones = {
    rose: {
      bg: "var(--rose-100)",
      fg: "var(--rose-700)"
    },
    peri: {
      bg: "var(--peri-100)",
      fg: "var(--peri-700)"
    },
    coral: {
      bg: "var(--coral-200)",
      fg: "var(--coral-600)"
    },
    lav: {
      bg: "var(--lav-100)",
      fg: "var(--plum-800)"
    },
    sand: {
      bg: "var(--sand-100)",
      fg: "var(--warm-700)"
    },
    ink: {
      bg: "var(--plum-900)",
      fg: "var(--rose-100)"
    }
  };
  const sizes = {
    sm: {
      padding: "3px 10px",
      fontSize: "0.75rem"
    },
    md: {
      padding: "5px 14px",
      fontSize: "0.8125rem"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-pill)",
      background: tones[tone].bg,
      color: tones[tone].fg,
      ...sizes[size],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — soft rounded text field with optional label & hint.
 */
function Input({
  label = "",
  hint = "",
  error = "",
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.8125rem",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1rem",
      color: "var(--text-strong)",
      padding: "12px 16px",
      background: "var(--surface-card)",
      border: `1.5px solid ${error ? "var(--heart)" : "var(--border)"}`,
      borderRadius: "var(--radius-md)",
      outline: "none",
      transition: "border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
      width: "100%"
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--peri-400)";
      e.currentTarget.style.boxShadow = "0 0 0 3px var(--peri-100)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? "var(--heart)" : "var(--border)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.75rem",
      color: error ? "var(--heart)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line companion to Input.
 */
function Textarea({
  label = "",
  hint = "",
  rows = 4,
  id,
  style = {},
  ...rest
}) {
  const taId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: taId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.8125rem",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    rows: rows,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "1rem",
      color: "var(--text-strong)",
      padding: "12px 16px",
      background: "var(--surface-card)",
      border: "1.5px solid var(--border)",
      borderRadius: "var(--radius-md)",
      outline: "none",
      resize: "vertical",
      lineHeight: "1.5",
      transition: "border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
      width: "100%"
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--peri-400)";
      e.currentTarget.style.boxShadow = "0 0 0 3px var(--peri-100)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = "var(--border)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.75rem",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/surface/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — soft elevated surface. The base container for content blocks.
 */
function Card({
  children,
  padding = "lg",
  elevation = "sm",
  tint = false,
  style = {},
  ...rest
}) {
  const pads = {
    none: "0",
    sm: "16px",
    md: "24px",
    lg: "32px"
  };
  const shadows = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: tint ? "var(--surface-tint)" : "var(--surface-card)",
      border: tint ? "none" : "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: pads[padding],
      boxShadow: shadows[elevation],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Card.jsx", error: String((e && e.message) || e) }); }

// components/surface/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProjectCard — the portfolio's signature work tile: cover image,
 * title, year, and category tags. Lifts gently on hover.
 */
function ProjectCard({
  image = "",
  title = "Untitled",
  category = "",
  year = "",
  tags = [],
  href = "#",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: "block",
      textDecoration: "none",
      background: "var(--surface-card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)",
      transition: "transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 10",
      overflow: "hidden",
      background: "var(--rose-100)"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--brand)"
    }
  }, category), year && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.8125rem",
      color: "var(--text-faint)"
    }
  }, year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.15,
      color: "var(--text-strong)",
      margin: "8px 0 14px"
    }
  }, title), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    tone: "sand",
    size: "sm"
  }, t)))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
// About section — portrait, bio, skill tags, simple stats.
function About() {
  const skills = ["Brand Identity", "Product Design", "UX Research", "Illustration", "Design Systems", "Motion"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-lg)",
      margin: "0 auto",
      padding: "clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem)",
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: "clamp(2rem, 5vw, 4rem)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      aspectRatio: "4 / 5"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/profile-brain-heart.jpeg",
    alt: "Portrait illustration",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: "14px"
    }
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)",
      color: "var(--text-strong)",
      margin: "0 0 18px",
      letterSpacing: "-0.015em"
    }
  }, "Warmth, clarity, and a little quiet."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1.0625rem",
      lineHeight: 1.75,
      color: "var(--text-body)",
      margin: "0 0 16px"
    }
  }, "For eight years I've worked at the edge of health and design \u2014 at startups, studios, and on my own. I care about the human on the other side of the screen, especially on their hardest days."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1.0625rem",
      lineHeight: 1.75,
      color: "var(--text-body)",
      margin: "0 0 26px"
    }
  }, "My work leans soft and honest: gentle color, generous space, and hand-drawn illustration that makes heavy topics feel approachable."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "30px"
    }
  }, skills.map((s, i) => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    tone: ["rose", "peri", "coral", "lav"][i % 4]
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "40px"
    }
  }, [["8+", "Years designing"], ["40+", "Projects shipped"], ["12", "Happy teams"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "2rem",
      color: "var(--brand)",
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.8125rem",
      color: "var(--text-muted)",
      marginTop: "6px"
    }
  }, l)))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
// Contact section with a working (fake) form using the form primitives.
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-md)",
      margin: "0 auto",
      padding: "clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem)",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: "14px",
      color: "var(--rose-300)"
    }
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(2rem, 3.6vw, 3rem)",
      color: "#fff",
      margin: "0 0 14px",
      letterSpacing: "-0.015em"
    }
  }, "Let's make something ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--rose-300)"
    }
  }, "gentle"), " together."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1.0625rem",
      lineHeight: 1.7,
      color: "var(--rose-100)",
      margin: "0 0 34px",
      maxWidth: "48ch",
      opacity: 0.85
    }
  }, "Have a project in mind, or just want to say hello? Tell me a little about it and I'll get back to you within a day."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.18)",
      borderRadius: "var(--radius-lg)",
      padding: "32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.6rem",
      color: "#fff",
      marginBottom: "8px"
    }
  }, "Thank you \u2014 message sent."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--rose-100)",
      opacity: 0.8,
      margin: 0
    }
  }, "I'll be in touch soon. \u2665")) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-xl)",
      padding: "clamp(1.5rem, 4vw, 2.5rem)",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px",
      marginBottom: "18px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Maya Kapoor"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "22px"
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "About your project",
    rows: 5,
    placeholder: "A few sentences about what you're building\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Currently booking Summer 2026"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setSent(true)
  }, "Send message")))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
// Footer with wordmark, quick links and social.
function Footer({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--bg-page)",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "clamp(2.5rem, 4vw, 3.5rem) clamp(1.25rem, 5vw, 4rem)",
      display: "flex",
      flexWrap: "wrap",
      gap: "24px",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "1.4rem",
      color: "var(--text-strong)"
    }
  }, "Ashish", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)"
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.875rem",
      color: "var(--text-muted)",
      margin: "6px 0 0"
    }
  }, "Designing for calm, clear minds. \xA9 2026")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap"
    }
  }, ["home", "work", "about", "contact"].map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => setRoute(r),
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "0.9rem",
      fontWeight: 500,
      color: "var(--text-body)",
      padding: "6px 10px",
      textTransform: "capitalize"
    }
  }, r))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px"
    }
  }, ["Dribbble", "LinkedIn", "Email"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.8125rem",
      fontWeight: 600,
      color: "var(--brand-ink)",
      padding: "8px 14px",
      border: "1.5px solid var(--rose-200)",
      borderRadius: "var(--radius-pill)",
      textDecoration: "none"
    }
  }, s)))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// Hero section — full-bleed illustration wash + serif headline.
function Hero({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(120deg, var(--rose-100) 0%, var(--lav-100) 55%, var(--peri-100) 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      alignItems: "center",
      gap: "clamp(1rem, 4vw, 3rem)",
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "clamp(2.5rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: "18px"
    }
  }, "Product & Brand Designer"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)",
      lineHeight: 1.04,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)",
      margin: "0 0 22px"
    }
  }, "Designing for", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--brand)"
    }
  }, "calm"), ", clear minds."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1.1875rem",
      lineHeight: 1.7,
      color: "var(--text-body)",
      maxWidth: "44ch",
      margin: "0 0 32px"
    }
  }, "I'm Ashish \u2014 I help wellness and health teams turn complex, emotional problems into soft, trustworthy products and brands."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => setRoute("work")
  }, "View selected work"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => setRoute("contact")
  }, "Get in touch")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "30px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Available for projects \xB7 Summer 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      aspectRatio: "4 / 5"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/portrait-bloom-mind.jpeg",
    alt: "Illustration of a blooming mind",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
// Portfolio navigation bar. Exports to window for the kit's other scripts.
function Nav({
  route,
  setRoute
}) {
  const links = [{
    id: "home",
    label: "Home"
  }, {
    id: "work",
    label: "Work"
  }, {
    id: "about",
    label: "About"
  }, {
    id: "contact",
    label: "Contact"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px clamp(1.25rem, 5vw, 4rem)",
      background: "rgba(255,248,243,0.82)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setRoute("home"),
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "1.4rem",
      letterSpacing: "-0.01em",
      color: "var(--text-strong)"
    }
  }, "Ashish", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)"
    }
  }, ".")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "4px"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => setRoute(l.id),
    style: {
      border: "none",
      background: route === l.id ? "var(--rose-100)" : "transparent",
      color: route === l.id ? "var(--rose-700)" : "var(--text-body)",
      fontFamily: "var(--font-sans)",
      fontSize: "0.9375rem",
      fontWeight: 600,
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      transition: "background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft)"
    }
  }, l.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: () => setRoute("contact")
  }, "Let's talk")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Selected-work grid built from ProjectCard tiles.
const PROJECTS = [{
  image: "../../assets/illustrations/brain-bloom-hands.jpeg",
  category: "Brand Identity",
  year: "2025",
  title: "Bloom — a calmer mental-health app",
  tags: ["Branding", "UX", "Illustration"]
}, {
  image: "../../assets/illustrations/meditation-lotus.jpeg",
  category: "Product Design",
  year: "2025",
  title: "Stillness — guided meditation, redesigned",
  tags: ["Mobile", "Motion"]
}, {
  image: "../../assets/illustrations/gratitude-pair.jpeg",
  category: "Illustration",
  year: "2024",
  title: "Gratitude — an illustration system",
  tags: ["Illustration", "System"]
}, {
  image: "../../assets/illustrations/profile-bloom-hearts.jpeg",
  category: "Web Design",
  year: "2024",
  title: "Mindful Co. — marketing site",
  tags: ["Web", "Branding"]
}, {
  image: "../../assets/illustrations/mindful-bloom-okay.jpeg",
  category: "Campaign",
  year: "2023",
  title: "It's okay to not be okay",
  tags: ["Campaign", "Social"]
}, {
  image: "../../assets/illustrations/profile-brain-heart.jpeg",
  category: "Research",
  year: "2023",
  title: "Heart & Mind — a wellbeing study",
  tags: ["Research", "Strategy"]
}];
function WorkGrid({
  heading = "Selected work",
  blurb = "",
  limit = null
}) {
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "clamp(3rem, 6vw, 5.5rem) clamp(1.25rem, 5vw, 4rem)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "36px",
      maxWidth: "52ch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: "12px"
    }
  }, "Portfolio"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
      color: "var(--text-strong)",
      margin: "0 0 12px",
      letterSpacing: "-0.015em"
    }
  }, heading), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "1.0625rem",
      lineHeight: 1.65,
      color: "var(--text-body)",
      margin: 0
    }
  }, blurb)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: "24px"
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.title
  }, p)))));
}
window.WorkGrid = WorkGrid;
window.PROJECTS = PROJECTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

})();
