<script>import { onMount } from "svelte";
export let elementId = "google-translate-element";
export let options = {
  pageLanguage: "pt",
  includedLanguages: "pt,en,es,fr,nl,ja,zh-CN",
  autoDisplay: false
};
onMount(() => {
  googleTranslateInit();
});
function googleTranslateInit() {
  setTimeout(function() {
    if (typeof google !== "undefined" && google != null && google.translate != null && google.translate.TranslateElement != null) {
      new google.translate.TranslateElement(options, elementId);
    }
  }, 300);
}
</script>

<svelte:head>
	<script async src="https://translate.google.com/translate_a/element.js"></script>
</svelte:head>
