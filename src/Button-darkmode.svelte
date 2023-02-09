<script>
    import { writable } from 'svelte/store';
    let current = '';

    let darkModeEnabled = JSON.parse(localStorage.getItem("darkmodeState")) || false;
    export const darkmodestore = writable(darkModeEnabled);

    darkmodestore.subscribe(value => {
      localStorage.setItem("darkmodeState", JSON.stringify(value));
    });

  function toggleLightMode() {
    darkModeEnabled = !darkModeEnabled;
    darkmodestore.set(darkModeEnabled);
    document.body.classList.toggle("dark-mode");

    if (typeof sessionStorage !== 'undefined') {
      if (document.body.classList.contains("dark-mode")) {
        sessionStorage.setItem("darkModeEnabled", "1");
        current = current === 'toggle' ? '' : 'toggle';
      } else {
        sessionStorage.removeItem("darkModeEnabled");
      }
    }
  }

if (typeof sessionStorage !== 'undefined') {
  if (sessionStorage.getItem("darkModeEnabled") === "1") {
    document.body.classList.add("dark-mode");
  }
}

</script>

<div class="dark-mode-toggle">
  <input type="checkbox" id="dn" class="toggleWrapper {current === '' ? 'toggle' : ''}" on:click={() => toggleLightMode(darkModeEnabled)} checked={darkModeEnabled}>
    <label for="dn" class="toggle">
      <span class="toggle__handler">
        <span class="crater crater--1"></span>
        <span class="crater crater--2"></span>
        <span class="crater crater--3"></span>
      </span>
      <span class="star star--1"></span>
      <span class="star star--2"></span>
      <span class="star star--3"></span>
      <span class="star star--4"></span>
      <span class="star star--5"></span>
      <span class="star star--6"></span>
    </label>
  </div>