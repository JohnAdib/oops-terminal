// src/react/Terminal.tsx
import * as React from "react";
import { useEffect, useRef } from "react";
import { ITerminal, Terminal } from "../core/terminal";


export const ReactTerminal: React.FC<ITerminal> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const terminal = new Terminal(containerRef.current, props);
      terminal.init();
    }
  }, [props]);

  return <div ref={containerRef} className="oops-terminal"></div>;
};
