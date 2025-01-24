import React from "react";
import { ReactTyped } from "react-typed";
import "./style.css";

export interface IOopsTerminal {
  children: string;
  header: string;
  loop?: boolean;
}

export const OopsTerminal: React.FC<IOopsTerminal> = ({ children = "Hello World!", header = "Oops Terminal", loop = false }) => {
  return (
    <section className="oops-terminal">
      <div>
        <header>{header}</header>
        <main>
          <ReactTyped
            strings={[children]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1000}
            loop={loop}
          />
        </main>
      </div>
    </section>
  );
};
