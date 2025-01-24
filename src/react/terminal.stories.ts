import type { Meta, StoryObj } from '@storybook/react';

import { OopsTerminal } from './terminal';

const meta = {
  title: 'OopsTerminal/Default',
  component: OopsTerminal,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof OopsTerminal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: 'Oops Terminal',
    content: 'Hello World!'
  }
};
