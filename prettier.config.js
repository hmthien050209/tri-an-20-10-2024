/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  endOfLine: 'lf',
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  vueIndentScriptAndStyle: true,
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
