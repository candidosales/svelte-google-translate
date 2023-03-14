# Svelte Google Translate

## Installation

```bash
npm i @candidosales/svelte-google-translate
```

### Usage

```svelte
<script>
	import GoogleTranslate from '$lib/GoogleTranslate.svelte';
</script>

<h1>Svelte Google Translate</h1>
<GoogleTranslate elementId={'google-translate-element'} />
<div id="google-translate-element">
	<p>Test</p>
</div>
```

| Option            |        Default value        |                                                                                                                                                                                                                                                                                       | Description |
| ----------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| pageLanguage      |           `'pt'`            | This option specifies the language of the page that you want to translate. The default value is "auto", which means that Google will detect the language automatically.                                                                                                               |
| includedLanguages | `'pt,en,es,fr,nl,ja,zh-CN'` | This option is an array of language codes that you want to include in the language selector. If you don't specify this option, Google will include all languages that are supported by the API. Supported languages: https://cloud.google.com/translate/docs/languages                |
| layout            |           `true`            | This option specifies the layout of the language selector. The default value is "horizontal", which displays the language names in a row. Other options include "vertical" (displays the language names in a column) and "dropdown" (displays the language names in a dropdown menu). |

## 👍 Contribute

If you want to say thank you and/or support the active development this project:

1. Add a [GitHub Star](https://github.com/candidosales/svelte-google-translate/stargazers) to the project.
2. Tweet about the project [on your Twitter](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fcandidosales%2Fsvelte-google-translate).
3. Write a review or tutorial on [Medium](https://medium.com/), [Dev.to](https://dev.to/) or personal blog.
4. Support the project by donating a [cup of coffee](https://buymeacoff.ee/candidosales).

## ☕ Supporters

If you want to support Svelte Google Translate, you can ☕ [**buy a coffee here**](https://buymeacoff.ee/candidosales)

## Author

- Cândido Sales - [@candidosales](https://twitter.com/candidosales)

## ⚠️ Copyright and license

Code and documentation copyright 2020-2030 the [Authors](https://github.com/candidosales/svelte-google-translate/graphs/contributors) and Code released under the [MIT License](https://github.com/candidosales/svelte-google-translate/blob/master/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).

## Test Locally

```bash
npm run lib:build
npm run start
```
