<script lang="ts">
	import { onMount } from 'svelte';

	type InlineLayout = 'horizontal' | 'vertical' | 'dropdown';
	type FloatPosition = 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT';

	/**
	 * Interface for a TranslateElementOptions object.
	 */
	interface TranslateElementOptions {
		/**
		 * This option specifies the language of the page that you want to translate. The default value is "auto", which means that Google will detect the language automatically.
		 */
		pageLanguage?: string;
		/**
		 * This option is an array of language codes that you want to include in the language selector. If you don't specify this option, Google will include all languages that are supported by the API.
		 * Supported languages: https://cloud.google.com/translate/docs/languages
		 */
		includedLanguages?: string;
		/**
		 * This option specifies the layout of the language selector. The default value is "horizontal", which displays the language names in a row. Other options include "vertical" (displays the language names in a column) and "dropdown" (displays the language names in a dropdown menu).
		 */
		layout?: InlineLayout;
		/**
		 * This option specifies whether or not to display the language selector automatically. The default value is true.
		 */
		autoDisplay?: boolean;
		/**
		 * This option specifies whether or not the page being translated contains multiple languages. The default value is false.
		 */
		multilanguagePage?: boolean;
		/**
		 * This option specifies whether or not to track translation events using Google Analytics. The default value is false.
		 */
		gaTrack?: boolean;
		/**
		 * This option specifies the Google Analytics tracking ID to use if gaTrack is set to true.
		 */
		gaId?: string;
		/**
		 * This option specifies whether to use a compact layout for the language selector. The default value is false.
		 */
		layoutCompact?: boolean;
		/**
		 * This option specifies the position of the language selector if layoutCompact is set to true. The default value is "TOP_LEFT", other options include "TOP_RIGHT", "BOTTOM_LEFT", and "BOTTOM_RIGHT".
		 */
		floatPosition?: FloatPosition;
		/**
		 * This option specifies the time in milliseconds before the API returns an error if it fails to load. The default value is 5000.
		 */
		timeout?: number;
		/**
		 * This option specifies whether to use the new version of the Google Translate API. The default value is false.
		 */
		newVersion?: boolean;
		/**
		 * This option specifies whether to display the "Powered by Google Translate" attribution. The default value is true.
		 */
		attribution?: boolean;
	}

	export let elementId: HTMLElement | string = 'google-translate-element';

	export let options: TranslateElementOptions = {
		pageLanguage: 'pt',
		includedLanguages: 'pt,en,es,fr,nl,ja,zh-CN',
		autoDisplay: false
	};
	onMount(() => {
		googleTranslateInit();
	});

	function googleTranslateInit() {
		setTimeout(function () {
			if (
				typeof google !== 'undefined' &&
				google != null &&
				google.translate != null &&
				google.translate.TranslateElement != null
			) {
				try {
					new google.translate.TranslateElement(options, elementId);
				} catch (e) {
					console.error('[@candidosales/svelte-google-translate] error:', e);
				}
			}
		}, 300);
	}
</script>

<svelte:head>
	<script async src="https://translate.google.com/translate_a/element.js"></script>
</svelte:head>
