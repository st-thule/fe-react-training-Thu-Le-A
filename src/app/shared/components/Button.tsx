import React, { ReactNode } from "react";
interface ButtonProps {
  type?: "primary" | "secondary";
  label: string;
  onClick?: () => void;
  icon?: ReactNode;
  href?: string | "#";
  size?: "sm" | "2xl" | "xl";
}
export const Button: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  icon,
  href,
  size
}) => {
  const handleClick = () => {
    if (onClick) {
    }
  };

  return (
    <a className={`btn btn-${type} btn-${size}`} onClick={handleClick} href={href}>
      <p>{label}</p>
      {icon && <span>{icon}</span>}
    </a>
  );
};
