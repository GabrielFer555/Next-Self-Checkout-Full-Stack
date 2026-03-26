"use client";

import { Button } from "@/components/ui/button";

interface MenuButtonProps {
  onAction: () => void;
  children: React.ReactNode;
  style: string;
}

const MenuButton = ({ onAction, children, style }: MenuButtonProps) => {
  return (
    <Button onClick={onAction} className={style} variant="secondary">
      {children}
    </Button>
  );
};

export default MenuButton;
