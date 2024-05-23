export const CSSResetQuotesExample = (): string => {
  return /*html*/ `
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
</section>`;
};
