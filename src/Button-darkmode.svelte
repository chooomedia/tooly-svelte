<script>
    import { darkmodestore } from './stores.js';

  function toggleLightMode() {
    $darkmodestore = !$darkmodestore;
    document.body.classList.toggle("dark-mode");
  }

</script>

<div class="dark-mode-toggle">
  <input type="checkbox" id="dn" class:toggle={$darkmodestore} class="toggleWrapper" on:click={() => toggleLightMode()} checked={$darkmodestore}>
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