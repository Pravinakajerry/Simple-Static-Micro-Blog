// Dynamic Page name for header
document.getElementById("pagetitle").textContent=(document.title);

// Componnent Area (Change HTML Code to reflect same version everywhere)
const SIDEBAR = `
<div class="sidebar gap-small">
    <img src="./images/author.png" width="60px"/>
    <p>
      <a>Disconnected</a>
      <span class="opacity-m">by</span>
      <a>Pravin Singh</a>
    </p>
                
    <p>
        Pravin Singh is a Pune based website designer - Working with creative studios and startups
        <br>
        <br>From ideas -&gt; prototype -&gt; business
  </p>
</div>
`;

class SideBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = SIDEBAR;
  }
}
customElements.define("side-bar", SideBar);