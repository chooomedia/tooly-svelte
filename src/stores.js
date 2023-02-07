import { writable, readable, derived } from 'svelte/store';

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

export const brandName = writable('world');

export const greeting = derived(
	name,
	$name => `Hello ${$name}!`
);

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

export const count = createCount();

export const rootStore = writable({
	test : {
		a : 0
	}
})