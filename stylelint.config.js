module.exports = {
  extends: [
    'stylelint-config-standard', // stylelint-config-recommended でいい場合は不要（stylelint-config-recommended-scss に含まれるため）
    'stylelint-config-recess-order', // stylelint-order を依存関係に含む（dependencies）ため、stylelint-order は不要
    'stylelint-config-recommended-scss', // ↑ を上書きする
    'stylelint-prettier/recommended' // stylelint-config-prettier も含まれる
  ],
  plugins: [],
  rules: []
}
