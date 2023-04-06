import React from 'react';
import type { Preview } from '@storybook/react'
import FlexoThemeProvider from '../src/containers/FlexoThemeProvider/FlexoThemeProvider'

const tokensUniderp = {
  brand: {
    primary: '#9bc00c',
    secondary: '#3a43dd',
    tertiary: '#ffcc32',
    quaternary: '#99227c',
  }
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <FlexoThemeProvider theme={tokensUniderp}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </FlexoThemeProvider>
    ),
  ],
}

export default preview
