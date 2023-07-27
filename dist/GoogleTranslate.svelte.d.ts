import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        elementId?: string | HTMLElement | undefined;
        options?: {
            /**
             * This option specifies the language of the page that you want to translate. The default value is "auto", which means that Google will detect the language automatically.
             */
            pageLanguage?: string | undefined;
            /**
             * This option is an array of language codes that you want to include in the language selector. If you don't specify this option, Google will include all languages that are supported by the API.
             * Supported languages: https://cloud.google.com/translate/docs/languages
             */
            includedLanguages?: string | undefined;
            /**
             * This option specifies the layout of the language selector. The default value is "horizontal", which displays the language names in a row. Other options include "vertical" (displays the language names in a column) and "dropdown" (displays the language names in a dropdown menu).
             */
            layout?: ("horizontal" | "vertical" | "dropdown") | undefined;
            /**
             * This option specifies whether or not to display the language selector automatically. The default value is true.
             */
            autoDisplay?: boolean | undefined;
            /**
             * This option specifies whether or not the page being translated contains multiple languages. The default value is false.
             */
            multilanguagePage?: boolean | undefined;
            /**
             * This option specifies whether or not to track translation events using Google Analytics. The default value is false.
             */
            gaTrack?: boolean | undefined;
            /**
             * This option specifies the Google Analytics tracking ID to use if gaTrack is set to true.
             */
            gaId?: string | undefined;
            /**
             * This option specifies whether to use a compact layout for the language selector. The default value is false.
             */
            layoutCompact?: boolean | undefined;
            /**
             * This option specifies the position of the language selector if layoutCompact is set to true. The default value is "TOP_LEFT", other options include "TOP_RIGHT", "BOTTOM_LEFT", and "BOTTOM_RIGHT".
             */
            floatPosition?: ("TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT") | undefined;
            /**
             * This option specifies the time in milliseconds before the API returns an error if it fails to load. The default value is 5000.
             */
            timeout?: number | undefined;
            /**
             * This option specifies whether to use the new version of the Google Translate API. The default value is false.
             */
            newVersion?: boolean | undefined;
            /**
             * This option specifies whether to display the "Powered by Google Translate" attribution. The default value is true.
             */
            attribution?: boolean | undefined;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GoogleTranslateProps = typeof __propDef.props;
export type GoogleTranslateEvents = typeof __propDef.events;
export type GoogleTranslateSlots = typeof __propDef.slots;
export default class GoogleTranslate extends SvelteComponent<GoogleTranslateProps, GoogleTranslateEvents, GoogleTranslateSlots> {
}
export {};
