import React, { FunctionComponent } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonProps } from '@AWSReactMonoTemplate/UI';
import ThemeWrapper from '../../src/ThemeWrapper';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Example',
  children: 'Map context',
  component: Button,
} as ComponentMeta<FunctionComponent<ButtonProps>>;

export const DefaultMap: ComponentStory<typeof Map> = () => (
  <ThemeWrapper>
      <Button >Button text</Button>
  </ThemeWrapper>
);
