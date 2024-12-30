---
#sidebar_label: 'Intro'
sidebar_position: 0
---

# Features

Why not use a better tool to translate JSON files?

The Fast AI JSON Translator API translates JSON objects between languages using AI, leveraging models like OpenAI's GPT-4, Google's Gemini, Anthropic's Claude, and Deepseek. 
It's designed for efficiency, remembering previous translations to minimize processing time and cost.

## Key Features

- **AI-Powered Translation:** Employs advanced AI models (OpenAI, Google, Anthropic, Deepseek) for high-quality translations. The user can select their preferred model.
- **Supported Languages** All languages from [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes).
- **Memory/Caching:** Stores translated key-value pairs based on `documentId` and `appId`, translating only new or changed content in subsequent requests. This significantly reduces processing overhead for updated documents.
- **Array order changed detection:** Detects if a position of an element in an array was changed and will not translate the moved objects again. This will reduce the speed of the translation and not translate items that are already translated. (Only if a cached translation exists)
- **Customizable Settings:** Offers granular control over translation parameters, including:
    - `locale`**:** Target languages (ISO 639 codes). Can be set per JSON object.
    - `excludedFieldsRegex`**:** Regular expression defining fields to exclude from translation. Defaults to a pattern excluding common technical fields (IDs, UUIDs, etc.).
    - `translationType`**:** Specifies the translation style (LITERAL_TRANSLATION, STANDARD_TRANSLATION, CULTURAL_ADAPTATION, CREATIVE_INTERPRETATION, FREEFORM_TRANSLATION). Defaults to `STANDARD_TRANSLATION`
    - `contextPrompt`**:** Provides additional context to the AI model, influencing the translation's tone and style
    - `reset`**:** Forces a full translation of a document, even if a cached version exists. Useful for significant content changes.
