import { dark } from '$stores/theme';

import { browser } from '$app/environment';

if (browser) {
	dark.subscribe((value) => {
		if (value) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
}
