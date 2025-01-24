export interface ITerminal {
    header?: string;
    content?: string;
    typeSpeed?: number;
  }

export class Terminal {
  private container: HTMLElement;
  private options: ITerminal;

  constructor(container: HTMLElement, options: ITerminal = {}) {
    this.container = container;
    this.options = {
      header: "Oops Terminal",
      content: "Welcome to the terminal!",
      typeSpeed: 50,
      ...options,
    };
  }

  public init() {
    this.container.innerHTML = `
      <div class="oops-terminal-header">${this.options.header}</div>
      <div class="oops-terminal-content"></div>
    `;

    this.typeContent(this.options.content || "");
  }

  private typeContent(content: string) {
    const contentElement = this.container.querySelector(
      ".oops-terminal-content"
    ) as HTMLElement;
    let i = 0;

    const typeInterval = setInterval(() => {
      if (i < content.length) {
        contentElement.innerHTML += content.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, this.options.typeSpeed);
  }
}
