"use client";

import { Navigation } from './Navigation';

type HeaderProps = {
  isScrolled?: boolean;
};

export function Header({ isScrolled = false }: HeaderProps) {
  return <Navigation isScrolled={isScrolled} />;
}
