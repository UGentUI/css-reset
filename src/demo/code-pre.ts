export const CSSResetCodePreExample = (): string => {
  return /*html*/ `
    <section id="code">
        <header>
            <h2><a href="#code">Code</a></h2>
        </header>
        <div>
            <h3 class="h500">
                Preformatted text using <code>&lt;pre&gt;</code>
            </h3>
            <pre>Item | Qty ------------------- Apples | 5 Oranges | 10 Grapes | 99</pre>
            <h3 class="h500">
                Code blocks with <code>&lt;pre&gt; and &lt;code&gt;</code>
            </h3>
            <pre><code>function sayHello() {
    console.log("Hello, world!");
}
sayHello();</code></pre>
            <h3 class="h500">Inline <code>&lt;code&gt;</code></h3>
            <p>
                Simply paste <code>body { font-weight: bold; }</code> into your file.
            </p>
        </div>
    </section>`;
};
