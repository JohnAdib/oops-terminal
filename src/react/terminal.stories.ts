import type { Meta, StoryObj } from '@storybook/react';
import { OopsTerminal } from './terminal';

const meta = {
  title: 'OopsTerminal',
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

export const SimpleWithMultipleLines: Story = {
    args: {
      header: 'Oops Terminal',
      children: 'Hello World!!!\nLine 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6\nLine 7\nLine 8\nLine 9\nLine 10'
    }
  };

export const SimpleWithStrings: Story = {
  args: {
    header: 'Oops Terminal',
    strings: [
        'Hi!!!',
        'Hiya 😀 ',
        'No worries! I\'m okay!',
        '<i>Hello</i> World!',
        '&amp; Are you a programmer?',
        'First line\nSecond line\nThird line',
        'Another paragraph\nWith multiple\nLines of text',
    ]
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

export const ErrorPage: Story = {
  args: {
    header: 'Really Bad Error!',
    children: 'An error occurred! This is not your fault. However, it is our fault. We will fix it ASAP!',
  }
};