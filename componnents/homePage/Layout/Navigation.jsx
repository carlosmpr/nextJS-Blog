import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import clases from './navigation.module.css'
export default function Navigation() {
  return (
    <header className={clases.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
