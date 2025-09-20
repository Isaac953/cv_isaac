import React from "react";

export const Footer = () => {
  const footerDescription = "Copyright © Isaac Arias 2024-2025";

  return (
    <footer className="footer">
      <span className="footer__title">{footerDescription}</span>
    </footer>
  );
};
