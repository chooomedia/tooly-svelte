<script>
    import { writable } from 'svelte/store';
    let current = '';

    let darkModeEnabled = JSON.parse(localStorage.getItem("darkmodeState")) || false;
    export const darkmode = writable(darkModeEnabled);

    darkmode.subscribe(value => {
      localStorage.setItem("darkmodeState", JSON.stringify(value));
    });

let showCaseImageSrc = "https://tooly.work/wp-content/uploads/2023/01/tooly-first-showcase-01-2023-1.png";

function toggleLightMode() {
  darkModeEnabled = !darkModeEnabled;
  darkmode.set(darkModeEnabled);
  document.body.classList.toggle("dark-mode");

  if (typeof sessionStorage !== 'undefined') {
    if (document.body.classList.contains("dark-mode")) {
      sessionStorage.setItem("darkModeEnabled", "1");
      current = current === 'toggle' ? '' : 'toggle';
      showCaseImageSrc = "https://tooly.work/wp-content/uploads/2023/01/tooly-first-showcase-01-2023-1.png";
    } else {
      sessionStorage.removeItem("darkModeEnabled");
      showCaseImageSrc = "https://tooly.work/wp-content/uploads/2023/01/tooly-first-showcase-01-2023-black-2.png";
    }
  }
}

if (typeof sessionStorage !== 'undefined') {
  if (sessionStorage.getItem("darkModeEnabled") === "1") {
    document.body.classList.add("dark-mode");
    showCaseImageSrc = "https://tooly.work/wp-content/uploads/2023/01/tooly-first-showcase-01-2023-black-2.png";
  }
}

</script>

<div class="dark-mode-toggle">
  <input type="checkbox" id="dn" class="toggleWrapper {current === '' ? 'toggle' : ''}" on:click={toggleLightMode} checked={darkModeEnabled}>
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