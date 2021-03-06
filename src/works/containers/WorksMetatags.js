import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { APP_TITLE } from '../../config';

const MetaTag = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
    </Helmet>
    <FormattedMessage
      id="works.title"
      defaultMessage="{title} - Projects list"
      values={{ title: APP_TITLE }}
    >
      {title => (
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={title} />
        </Helmet>
      )}
    </FormattedMessage>
    <FormattedMessage
      id="works.desc"
      defaultMessage="All {title} Projects"
      values={{ title: APP_TITLE }}
    >
      {desc => (
        <Helmet>
          <meta name="description" content={desc} />
        </Helmet>
      )}
    </FormattedMessage>
  </>
);

export default MetaTag;
