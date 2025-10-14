import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black/40 py-6 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} HackFest. All Rights Reserved.
    </footer>
  );
}
