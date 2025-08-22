function getElementsByTagName(node, tag) {
  const out = [];
  function lookup(el) {
    console.log("el.tagName, tag", el.tagName, tag.toUpperCase());
    if (el.tagName === tag.toUpperCase()) {
      out.push(el);
    }
    const childNodes = el.children;
    if (childNodes.length) {
      for (const child of childNodes) {
        lookup(child);
      }
    }
    return;
  }
  lookup(node);
  console.log("out--->", out);
}

function getElementsByTagNameUtil() {
  const doc = new DOMParser().parseFromString(
    `<div id="foo">
    <span>Span</span>
    <p>Paragraph</p>
    <div id="bar">Div</div>
  </div>`,
    "text/html"
  );

  getElementsByTagName(doc.body, "div");
}

export default getElementsByTagNameUtil;
