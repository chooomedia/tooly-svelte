import { writable, readable, derived } from 'svelte/store';

export const darkmodestore = writable(false);

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

export const elapsed = derived(
	time,
	$time => {}
);

export const brandName = writable('Tooly');