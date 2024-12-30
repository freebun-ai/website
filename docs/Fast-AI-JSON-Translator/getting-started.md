---
#sidebar_label: 'Intro'
sidebar_position: 1
---

# Getting Started

## Platforms for the Fast AI JSON Translator API

You can use the Fast AI JSON Translator API on the following platforms:

- Apify.com https://apify.com/freebun.ai/fast-ai-json-translator
- RapidAPI.com https://rapidapi.com/freebun-ai-freebun-ai-default/api/fast-ai-json-translator

Use apify.com if you need to run batches of translations. Use rapidapi.com for single translations without worrying about infrastructure costs.

Also check the pricing for each platform, some may be more cost-effective for your use case.

## Workflow

1. **Input:** Provide a JSON object optionally containing a `documentId`, custom settings, and the data to translate.
2. **Configuration:** Set parameters like `appId`, `globalLocales`, `aiModel`, API keys, etc.
3. **Processing:** The API processes the JSON object:
    - Checks for existing translations based on `documentId` and `appId`.
    - Translates only new/modified content if a cached translation exists.
    - Applies object-specific settings, overriding global ones if present.
    - Uses the selected AI model and `translationType` for translation.
    - Handles retries and timeouts.
4. **Output:** Returns the translated JSON object with the same structure as the input, with translated values. Also provides an object containing the translation details like tokens, cost, keys translated and processing time.

 ## Required Parameters

- `data`: The data JSON object to translate.
- `aiModel`: The AI model (GPT-4o, gemini-2.0-flash-exp, etc.) to use.
- `aiKey`: The AI provider (Openai, Google, Anthropic, etc.) key corresponding to the model selected

This API offers a robust and efficient solution for translating JSON data, with a strong emphasis on cost optimization and flexibility. The caching mechanism, custom settings, and concurrency controls provide fine-grained control over the translation process.
