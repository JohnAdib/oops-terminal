import "./style.css";

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
      <section class="oops-terminal">
        <header>${options.header}</header>
        <main>${options.content}</main>
      </section>
    `;
  };

  return {
    init: render,
  };
};
