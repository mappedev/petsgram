import React from 'react';
import { Helmet } from 'react-helmet';

import { Div, Title, Subtitle } from './styles';

export default function LayoutPage({
  children,
  title = '',
  subtitle = '',
  renderTitles = false,
}) {
  return (
    <>
      <Helmet>
        {title && <title>Petsgram - {title}</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      {renderTitles && (
        <Div>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Div>
      )}
      {children}
    </>
  );
}

// export default LayoutPage;
