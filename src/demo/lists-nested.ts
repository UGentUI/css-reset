export const CSSResetListNestedExample = (): string => {
  return /*html*/ `
    <section id="list-nested">
        <header>
            <h2><a href="#list-nested">Lists Nested</a></h2>
        </header>
        <div>
            <h3 class="h500"><code>&lt;ul&gt;</code></h3>
            <ul>
                <li>First list item</li>
                <li>Second list item</li>
                <li>
                    <p>Third list item</p>
                    <ul>
                        <li>Nested lists as well</li>
                        <li>Nested lists as well</li>
                        <li>Nested lists as well</li>
                    </ul>
                </li>
                <li>
                    <p>Fourth list item</p>
                    <ol>
                        <li>Nested ordered lists as well</li>
                        <li>Nested ordered lists as well</li>
                        <li>Nested ordered lists as well</li>
                    </ol>
                </li>
            </ul>
            <h3 class="h500"><code>&lt;ol&gt;</code></h3>
            <ol>
                <li>First list item</li>
                <li>Second list item</li>
                <li>
                    <p>Third list item</p>
                    <ul>
                        <li>Nested lists as well</li>
                        <li>Nested lists as well</li>
                        <li>Nested lists as well</li>
                    </ul>
                </li>
                <li>
                    <p>Fourth list item</p>
                    <ol>
                        <li>Nested ordered lists as well</li>
                        <li>Nested ordered lists as well</li>
                        <li>Nested ordered lists as well</li>
                    </ol>
                </li>
            </ol>
            <h3 class="h500"><code>&lt;dl&gt;</code></h3>
            <dl>
                <dt>First definition</dt>
                <dd>Definition description</dd>
                <dd>Definition description</dd>
                <dt>Second definition</dt>
                <dd>Definition description</dd>
                <dt>Third definition</dt>
                <dd>
                    <p>Paragraphs should be fine when followed by</p>
                    <ul>
                        <li>lists like</li>
                        <li>this one</li>
                    </ul>
                    <ol>
                        <li>or ordered lists</li>
                        <li>like this one</li>
                    </ol>
                </dd>
            </dl>
        </div>
    </section>`;
};
