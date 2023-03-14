<script>
	import GoogleTranslate from '$lib/GoogleTranslate.svelte';
</script>

<h1>Svelte Google Translate</h1>
<GoogleTranslate
	elementId="google-translate-element"
	options={{ pageLanguage: 'pt', includedLanguages: 'pt,en' }}
/>
<div id="google-translate-element">
	<p>Test</p>
</div>
