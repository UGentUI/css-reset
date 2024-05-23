import { CSSResetCodePreExample } from "./demo/code-pre";
import { CSSResetHeadingExample } from "./demo/headings";
import { CSSResetLinksExample } from "./demo/links";
import { CSSResetListExample } from "./demo/lists-flat";
import { CSSResetListNestedExample } from "./demo/lists-nested";
import { CSSResetMiscElementsExample } from "./demo/misc-elements";
import { CSSResetQuotesExample } from "./demo/quotes";
import { CSSResetTablesComplexExample } from "./demo/tables-complex";
import { CSSResetTablesExample } from "./demo/tables-simple";
import { CSSResetTitleToc } from "./demo/title-toc";
import "./reset.scss";

document.querySelector<HTMLDivElement>("#demo")!.innerHTML =
  CSSResetTitleToc() +
  CSSResetHeadingExample() +
  CSSResetLinksExample() +
  CSSResetListExample() +
  CSSResetListNestedExample() +
  CSSResetTablesExample() +
  CSSResetTablesComplexExample() +
  CSSResetQuotesExample() +
  CSSResetCodePreExample() +
  CSSResetMiscElementsExample();
