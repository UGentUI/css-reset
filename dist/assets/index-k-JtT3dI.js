(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const o=()=>`
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
    </section>`,a=()=>`
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
    </section>`,r=()=>`
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
    </section>`,h=()=>`
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
    </section>`,n=()=>`
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
    </section>`,c=()=>`
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
    </section>`,p=()=>`
<section id="quotes">
    <header>
        <h2><a href="#quotes">Quotes</a></h2>
    </header>
    <div>
        <h3 class="h500">
            <code>&lt;blockquote&gt;</code> with <code>&lt;cite&gt;</code>
        </h3>
        <blockquote>
            <p>
                All that is gold does not glitter, not all those who wander are lost;
                The old that is strong does not wither, deep roots are not reached by
                the frost.
            </p>
            <p>
                From the ashes a fire shall be woken, a light from the shadows shall
                spring; Renewed shall be blade that was broken, the crownless again
                shall be king.
            </p>
            <p>
                <cite>J.R.R. Tolkien, The Fellowship of the Ring</cite>.
            </p>
        </blockquote>
        <h3 class="h500">
            Inline quotes with <code>&lt;q&gt;</code> and <code>&lt;cite&gt;</code>
        </h3>
        <p>
            The old addage
            <q>
                Be yourself; everyone else is already taken. <cite>Oscar Wilde</cite>
            </q>
            is very fitting.
        </p>
    </div>
</section>`,u=()=>` 
    <section id="tables-complex">
        <header>
            <h2><a href="#tables-complex">Tables Complex</a></h2>
        </header>
        <div>
            <table>
                <caption>Table captions are like headings for tabular data</caption>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th scope="row">Total</th>
                        <td>21</td>
                        <td>$13.81</td>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <th scope="row">Apple</th>
                        <td>3</td>
                        <td>$5.42</td>
                    </tr>
                    <tr>
                        <th scope="row">Orange</th>
                        <td>6</td>
                        <td>$4.60</td>
                    </tr>
                    <tr>
                        <th scope="row">Banana</th>
                        <td>12</td>
                        <td>$3.79</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>`,m=()=>` 
    <section id="tables-simple">
        <header>
            <h2><a href="#tables-simple">Tables</a></h2>
        </header>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Apple</td>
                        <td>3</td>
                        <td>$5.42</td>
                    </tr>
                    <tr>
                        <td>Orange</td>
                        <td>6</td>
                        <td>$4.60</td>
                    </tr>
                    <tr>
                        <td>Banana</td>
                        <td>12</td>
                        <td>$3.79</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>`,f=()=>`
    <section>
        <header>
        <h1>CSS reset demo</h1>
        <p>A base stylesheet for the UGent UI Design System.</p>
        </header>
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
    </section>
    `;document.querySelector("#demo").innerHTML=f()+a()+r()+h()+n()+m()+u()+p()+o()+c();
