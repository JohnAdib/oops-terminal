import type { Meta, StoryObj } from '@storybook/react';
import { OopsTerminal } from './terminal';

const meta = {
  title: 'OopsTerminall',
  component: OopsTerminal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof OopsTerminal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    header: 'Oops Terminal',
    children: 'Hello World!!!'
  }
};

export const Page404: Story = {
  args: {
    header: '404 - Page Not Found',
    children: 'This page does not exist.',
    loop: true
  }
};

export const Page500: Story = {
  args: {
    header: '500 - Internal Server Error',
    children: 'Something went wrong.',
    loop: true
  }
};

export const AccessDenied: Story = {
  args: {
    header: 'Access Denied',
    children: 'You are not authorized to be here!',
  }
};

export const PermissionDenied: Story = {
  args: {
    header: 'Permission Denied',
    children: 'You do not have permission to access this resource!',
  }
};
