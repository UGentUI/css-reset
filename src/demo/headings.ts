export const CSSResetHeadingExample = (): string => {
  return /*html*/ `
    <section id="headings">
        <header>
            <h2><a href="#headings">Headings</a></h2></a>
        </header>
        <div>
            <div class="h900">This &lt;div&gt; element is using h900</div>
            <h1>This &lt;h1&gt; element is using h800</h1>
            <h2>This &lt;h2&gt; element is using h700</h2>
            <h3>This &lt;h3&gt; element is using h600</h3>
            <h4>This &lt;h4&gt; element is using h500</h4>
            <h5>This &lt;h5&gt; element is using h400</h5>
            <h6>This &lt;h6&gt; element is using h300</h6>
            <div class="h200">This &lt;div&gt; element is using h200</div>
            <div class="h100">This &lt;div&gt; element is using h100</div>
        </div>
    </section>`;
};
