import React, { useEffect, useRef } from "react";
import { createTerminal, ITerminal } from "../core/terminal";



export const OopsTerminal: React.FC<ITerminal> = ({
  header,
  content,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const terminal = createTerminal(containerRef.current, { header, content });
      terminal.init();
    }
  }, [header, content]);

  return <div ref={containerRef} className="oops-terminal"></div>;
};
