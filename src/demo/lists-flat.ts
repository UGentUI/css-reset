export const CSSResetListExample = (): string => {
  return /*html*/ `
    <section id="list-flat">
        <header>
            <h2><a href="#list-flat">Lists Flat</a></h2>
        </header>
        <div>
            <h3 class="h500"><code>&lt;ul&gt;</code></h3>
            <ul>
                <li>First list item</li>
                <li>Second list item</li>
                <li>Third list item</li>
            </ul>
            <h3 class="h500"><code>&lt;ol&gt;</code></h3>
            <ol>
                <li>First list item</li>
                <li>Second list item</li>
                <li>Third list item</li>
            </ol>
            <h3 class="h500"><code>&lt;dl&gt;</code></h3>
            <dl>
                <dt>First definition</dt>
                <dd>Definition description</dd>
                <dd>Definition description</dd>
                <dt>Second definition</dt>
                <dd>Definition description</dd>
                <dt>Third definition</dt>
            </dl>
        </div>
    </section>`;
};
