### Tabela de Relações entre Elementos HTML (Tags) e Seus Tipos no TypeScript

Abaixo está uma tabela que mapeia os elementos HTML mais comuns para seus respectivos tipos no TypeScript. Esta tabela
ajudará a identificar rapidamente o tipo apropriado para usar com asserções de tipo (`as`) ao manipular elementos do
DOM.

| Tag HTML          | Tipo TypeScript           |
|-------------------|---------------------------|
| `<a>`             | `HTMLAnchorElement`       |
| `<abbr>`          | `HTMLElement`             |
| `<address>`       | `HTMLElement`             |
| `<area>`          | `HTMLAreaElement`         |
| `<article>`       | `HTMLElement`             |
| `<aside>`         | `HTMLElement`             |
| `<audio>`         | `HTMLAudioElement`        |
| `<b>`             | `HTMLElement`             |
| `<base>`          | `HTMLBaseElement`         |
| `<bdi>`           | `HTMLElement`             |
| `<bdo>`           | `HTMLElement`             |
| `<blockquote>`    | `HTMLQuoteElement`        |
| `<body>`          | `HTMLBodyElement`         |
| `<br>`            | `HTMLBRElement`           |
| `<button>`        | `HTMLButtonElement`       |
| `<canvas>`        | `HTMLCanvasElement`       |
| `<caption>`       | `HTMLTableCaptionElement` |
| `<cite>`          | `HTMLElement`             |
| `<code>`          | `HTMLElement`             |
| `<col>`           | `HTMLTableColElement`     |
| `<colgroup>`      | `HTMLTableColElement`     |
| `<data>`          | `HTMLDataElement`         |
| `<datalist>`      | `HTMLDataListElement`     |
| `<dd>`            | `HTMLElement`             |
| `<del>`           | `HTMLModElement`          |
| `<details>`       | `HTMLDetailsElement`      |
| `<dfn>`           | `HTMLElement`             |
| `<dialog>`        | `HTMLDialogElement`       |
| `<div>`           | `HTMLDivElement`          |
| `<dl>`            | `HTMLDListElement`        |
| `<dt>`            | `HTMLElement`             |
| `<em>`            | `HTMLElement`             |
| `<embed>`         | `HTMLEmbedElement`        |
| `<fieldset>`      | `HTMLFieldSetElement`     |
| `<figcaption>`    | `HTMLElement`             |
| `<figure>`        | `HTMLElement`             |
| `<footer>`        | `HTMLElement`             |
| `<form>`          | `HTMLFormElement`         |
| `<h1>` até `<h6>` | `HTMLHeadingElement`      |
| `<head>`          | `HTMLHeadElement`         |
| `<header>`        | `HTMLElement`             |
| `<hgroup>`        | `HTMLElement`             |
| `<hr>`            | `HTMLHRElement`           |
| `<html>`          | `HTMLHtmlElement`         |
| `<i>`             | `HTMLElement`             |
| `<iframe>`        | `HTMLIFrameElement`       |
| `<img>`           | `HTMLImageElement`        |
| `<input>`         | `HTMLInputElement`        |
| `<ins>`           | `HTMLModElement`          |
| `<kbd>`           | `HTMLElement`             |
| `<label>`         | `HTMLLabelElement`        |
| `<legend>`        | `HTMLLegendElement`       |
| `<li>`            | `HTMLLIElement`           |
| `<link>`          | `HTMLLinkElement`         |
| `<main>`          | `HTMLElement`             |
| `<map>`           | `HTMLMapElement`          |
| `<mark>`          | `HTMLElement`             |
| `<meta>`          | `HTMLMetaElement`         |
| `<meter>`         | `HTMLMeterElement`        |
| `<nav>`           | `HTMLElement`             |
| `<noscript>`      | `HTMLElement`             |
| `<object>`        | `HTMLObjectElement`       |
| `<ol>`            | `HTMLOListElement`        |
| `<optgroup>`      | `HTMLOptGroupElement`     |
| `<option>`        | `HTMLOptionElement`       |
| `<output>`        | `HTMLOutputElement`       |
| `<p>`             | `HTMLParagraphElement`    |
| `<picture>`       | `HTMLPictureElement`      |
| `<pre>`           | `HTMLPreElement`          |
| `<progress>`      | `HTMLProgressElement`     |
| `<q>`             | `HTMLQuoteElement`        |
| `<rp>`            | `HTMLElement`             |
| `<rt>`            | `HTMLElement`             |
| `<ruby>`          | `HTMLElement`             |
| `<s>`             | `HTMLElement`             |
| `<samp>`          | `HTMLElement`             |
| `<script>`        | `HTMLScriptElement`       |
| `<section>`       | `HTMLElement`             |
| `<select>`        | `HTMLSelectElement`       |
| `<slot>`          | `HTMLSlotElement`         |
| `<small>`         | `HTMLElement`             |
| `<source>`        | `HTMLSourceElement`       |
| `<span>`          | `HTMLSpanElement`         |
| `<strong>`        | `HTMLElement`             |
| `<style>`         | `HTMLStyleElement`        |
| `<sub>`           | `HTMLElement`             |
| `<summary>`       | `HTMLElement`             |
| `<sup>`           | `HTMLElement`             |
| `<table>`         | `HTMLTableElement`        |
| `<tbody>`         | `HTMLTableSectionElement` |
| `<td>`            | `HTMLTableCellElement`    |
| `<template>`      | `HTMLTemplateElement`     |
| `<textarea>`      | `HTMLTextAreaElement`     |
| `<tfoot>`         | `HTMLTableSectionElement` |
| `<th>`            | `HTMLTableCellElement`    |
| `<thead>`         | `HTMLTableSectionElement` |
| `<time>`          | `HTMLTimeElement`         |
| `<title>`         | `HTMLTitleElement`        |
| `<tr>`            | `HTMLTableRowElement`     |
| `<track>`         | `HTMLTrackElement`        |
| `<ul>`            | `HTMLUListElement`        |
| `<var>`           | `HTMLElement`             |
| `<video>`         | `HTMLVideoElement`        |
| `<wbr>`           | `HTMLElement`             |

### Conclusão

Esta tabela mapeia os elementos HTML mais comuns para seus tipos correspondentes no TypeScript. Usar os tipos corretos
ao manipular elementos do DOM ajuda a garantir a segurança e a robustez do seu código. Com esses tipos, você pode usar
asserções de tipo (`as`) para informar ao TypeScript o tipo exato dos elementos que está manipulando, aproveitando ao
máximo os benefícios da tipagem estática da linguagem.