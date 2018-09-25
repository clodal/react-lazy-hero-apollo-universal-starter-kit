import React from 'react';
import Helmet from 'react-helmet';
import LazyHero from 'react-lazy-hero';

import { PageLayout } from '../../common/components/web';
import settings from '../../../../../../settings';
import translate, { TranslateFunction } from '../../../i18n';
import { ClientCounter } from '../clientCounter';
import { ServerCounter } from '../serverCounter';
import { ReduxCounter } from '../reduxCounter';

interface CounterProps {
  t: TranslateFunction;
}

const Counter = ({ t }: CounterProps) => (
  <PageLayout>
    <Helmet
      title={`${settings.app.name} - ${t('title')}`}
      meta={[
        {
          name: 'description',
          content: `${settings.app.name} - ${t('meta')}`
        }
      ]}
    />
    <LazyHero imageSrc="https://unsplash.it/2000/1000">
      <h1>Generic Startup Hype Headline</h1>
    </LazyHero>
    <ServerCounter />
    <ReduxCounter />
    <ClientCounter />
  </PageLayout>
);

export default translate('counter')(Counter);
