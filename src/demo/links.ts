export const CSSResetLinksExample = (): string => {
  return /*html*/ `
    <section id="links">
        <header>
            <h2><a href="#links">Links</a></h2>
        </header>
        <div>
            <p>
                <a href=".">Standard link</a>
            </p>
            <p>Link with descenders: <a href=".">jump quickly!</a></p>
            <h3 class="h500">Link in a <a href=".">heading</a></h3>
            <ul>
                <li>
                    <a href=".">links can also</a>
                </li>
                <li>
                    <a href=".">appear in lists</a>
                </li>
                <li>
                    <a href=".">like this</a>
                </li>
            </ul>
        </div>
    </section>`;
};
