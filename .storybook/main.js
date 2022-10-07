module.exports = {
  "stories": [ "../src/components/**/stories.tsx" ],
  "addons": [ "@storybook/addon-essentials" ],
  babel: async (options) => {
    return ({
    ...options,
    plugins: [...options.plugins, require.resolve('@babel/plugin-transform-react-jsx')]
  })},
}