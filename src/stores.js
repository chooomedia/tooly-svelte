import { writable } from 'svelte/store';

export let darkmodestore = writable(false, (set) => {
	// The following is just a if operation (https://bobbyhadz.com/blog/javascript-use-shorthand-for-if-else-statement).
	// It checks if the localStorage contains an item with key 'isDark'.
	// If the item exists, it parses the json-string from the local storage and returns it.
	// If the item doesn't exist, it returns 'false'.
	// The result of the if-operation is written to the 'isDark' constant.
	const isDark = localStorage.getItem("isDark")
		? JSON.parse(localStorage.getItem("isDark"))
		: false;

	// Set the initial store value to the same value as 'isDark'.
	// Calling this function also updates all places where '$darkmodestore' is used.
	set(isDark);
});

darkmodestore.subscribe((isdark) => {
	localStorage.setItem("isDark", JSON.stringify(isdark));
});

export const brandName = writable('Tooly');
