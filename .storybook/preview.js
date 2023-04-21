await new Promise((resolve) => setTimeout(resolve, 1000));

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "red" }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
