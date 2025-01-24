import React from "react";
import Typed from "react-typed";
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
        <main>
          <Typed
            strings={content}
            typeSpeed={50} // Speed of typing
            backSpeed={30} // Speed of deleting
            backDelay={1000} // Delay before starting to delete
            loop={true} // Enable looping
          />
        </main>
      </div>
    </section>
  );
};
