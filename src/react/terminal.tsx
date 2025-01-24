import React from "react";
import "./styles.css";

export interface ITerminal {
  header: string;
  content: string;
}

export const OopsTerminal: React.FC<ITerminal> = ({ header, content }) => {
  return (
    <section className="oops-terminal">
      <div>
        <header>{header}</header>
        <main>{content}</main>
      </div>
    </section>
  );
};
