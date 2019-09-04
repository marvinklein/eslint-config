# eslint-config-marvinklein
a shared [eslint](https://eslint.org/) config

## Usage
In your project's `.eslintrc`

```js
{
  "extends": "marvinklein"
}
```

## Errors & Warnings
Things that are ok in development but probably not in production create warnings rather than errors:

```js
  'no-console': 'warn' // disallow the use of 'console'
```
