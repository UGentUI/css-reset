export const CSSResetToc = (): string => {
  return /*html*/ `
    <section>
        <header>
            <h2>TOC</h2>
        </header>
        <ul>
            <li><a href="#headings">Headings</a></li>
            <li><a href="#links">Links</a></li>
            <li><a href="#list-flat">Lists Flat</a></li>
            <li><a href="#list-nested">Lists Nested</a></li>
            <li><a href="#tables-simple">Tables</a></li>
            <li><a href="#tables-complex">Tables Complex</a></li>
            <li><a href="#quotes">Quotes</a></li>
            <li><a href="#misc-elements">Miscellaneous Elements</a></li>
        </ul>
    </section>`;
};
