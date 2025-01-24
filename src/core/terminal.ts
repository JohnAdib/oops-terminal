export interface ITerminal {
  header: string;
  content: string;
}

export const createTerminal = (
  container: HTMLElement,
  options: ITerminal
) => {
  const render = () => {
    container.innerHTML = `
      <div class="oops-terminal-header">${options.header}</div>
      <div class="oops-terminal-content">${options.content}</div>
    `;
  };

  // Public API for the terminal
  return {
    init: render,
  };
};
