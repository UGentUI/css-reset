export const CSSResetMiscElementsExample = (): string => {
  return /*html*/ `
    <section id="misc-elements">
        <header>
            <h2><a href="#misc-elements">Miscellaneous Elements</a></h2>
        </header>
        <div>
            <h3 class="h500">
                <code>&lt;time&gt;</code>
            </h3>
            <p>
                Can you move that meeting on <time dateTime="20220101 10:00">May 15</time>
                to the pub?
            </p>
            <h3 class="h500">
                <code>&lt;dfn&gt;</code> and <code>&lt;abbr&gt;</code>
            </h3>
            <p>
                <dfn>Recursion</dfn>: the repeated application of a recursive procedure or
                definition.See also: recursion.
            </p>
            <p>
                The <abbr title="UGent UI">UGUI</abbr> library provides a typography
                component &mdash; make sure you put a title (or UGentUITooltip) on your
                <code><abbr></code>elements.
            </p>
            <h3 class="h500"><code>&lt;ins&gt;</code> and <code>&lt;del&gt;</code></h3>
            <p>
                Ice cream <del>sucks</del>
                <ins>is awesome</ins>!
            </p>
            <h3 class="h500"><code>&lt;sub&gt;</code> and <code>&lt;sup&gt;</code></h3>
            <p>
                These elements
                <a href=".">
                    <sup>1</sup>
                </a>
                should still
                <a href=".">
                    <sub>2</sub>
                </a>
                have default styling<sup>3</sup> as well<sub>4</sub>
            </p>
            <h3 class="h500">Keyboard commands with &lt;kbd&gt;</h3>
            <p>
                Simply press <kbd>Alt</kbd> + <kbd>F4</kbd> to preview your changes.
            </p>
            <h3 class="h500">Variables in a mathematical expression with &lt;var&gt;</h3>
            <p>
                A simple equation: <var>x</var> = <var>y</var> + 2
            </p>
            <h3 class="h500"><code>&lt;small&gt;</code> text</h3>
            <p>
                <small>Only use this size text if there is a good rationale.</small>
            </p>
        </div>
    </section>`;
};
