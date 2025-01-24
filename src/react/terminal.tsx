import React from "react";
import "./style.css";

export interface IOopsTerminal {
  header: string;
  content: string;
}

export const OopsTerminal: React.FC<IOopsTerminal> = ({ header, content }) => {
  return (
    <section className="oops-terminal">
      <div>
        <header>{header}</header>
        <main>{content}</main>
      </div>
    </section>
  );
};
