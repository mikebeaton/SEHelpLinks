(() => {
  let links = document.getElementsByClassName("nav-links");
  if (!links || links.count < 2) return;

  let link = links[1];
  if (!link) return;

  let els =
`<ol class="nav-links">
  <li>
    <a href="/tour" class="pl8 nav-links--link">Tour</a>
  </li>
  <li>
    <a href="/help" class="pl8 nav-links--link">Help</a>
    <ol class="nav-links">
      <li>
        <a href="/help/on-topic" class="nav-links--link">What topics can I ask about here?</a>
      </li>
      <li>
        <a href="/help/dont-ask" class="nav-links--link">What should I avoid asking?</a>
      </li>
    </ol>
  </li>
</ol>`;
      
  // must use html, not xml, to display correctly
  let nodes = new DOMParser().parseFromString(els, 'text/html');

  // find document.html.[head|body].ol
  let toInsert = nodes.children[0].children[1].children[0].children;

  let count = toInsert.length;

  var docFrag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    // append _moves_ item from a to b
    docFrag.appendChild(toInsert[0]);
  }

  link.appendChild(docFrag);
})();