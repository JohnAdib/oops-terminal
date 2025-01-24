import React from "react";
import { ReactTyped } from "react-typed";
import "./style.css";

export interface IOopsTerminal {
  header?: string;
  children?: React.ReactNode | string;
  strings?: string[];
  loop?: boolean;
}

export const OopsTerminal: React.FC<IOopsTerminal> = ({ children = "Hello World!", header = "Oops Terminal", loop = false, strings = [] }) => {
  const content: string = typeof children === 'string' ? children : String(children);
  const contentArray: string[] = strings.length > 0 ? strings : [content];

  return (
    <section className="oops-terminal">
      <div>
        <header>{header}</header>
        <main>
          <ReactTyped
            strings={contentArray}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1000}
            loop={loop}
            smartBackspace={true}
          />
        </main>
      </div>
    </section>
  );
};
