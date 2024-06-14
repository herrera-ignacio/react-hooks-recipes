# Translations context

In this challenge your goal is to make translation state (as well as a way to update that state) available anywhere in the component tree.

You're given a languageContext with the expected shape of the translation data – language: string, changeLanguage: function, and translation: function.

Your challenge is to finish the LanguageProvider component – making language, changeLanguage, and translation available anywhere in the component tree – and then to use those values in any component that needs them.

## Tasks

- Update the language based on the user's selection
- Apply the correct translation when the language is changed

