import './global.scss';
import './scss/variables.scss';
import './scss/Fooorm.scss';

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Tooly'
	}
});

export default app;