export const CSSResetTablesExample = (): string => {
  return /*html*/ ` 
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
    </section>`;
};
