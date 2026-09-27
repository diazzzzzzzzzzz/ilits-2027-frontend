import { ReactNode } from "react";

type TypographyVariant = "display" | "body" | "label";

type TypographyElement =
  | "h1"
  | "h2"
  | "h3"
  | "p"
  | "span";

type TypographyProps = {
  children: ReactNode;
  variant: TypographyVariant;
  as?: TypographyElement;
  className?: string;
};

const variantStyles: Record<TypographyVariant, string> = {
  display: "font-serif font-bold tracking-tight text-[#29262B]",
  body: "font-sans leading-7 text-[#29262B]",
  label: "font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#263B5A]",
};

export default function Typography({
  children,
  variant,
  as: Component = "p",
  className = "",
}: TypographyProps) {
  return (
    <Component className={`${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
}