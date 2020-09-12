import React from 'react';

import LayoutPage from '../components/LayoutPage';
import DetailPhoto from '../components/DetailPhoto';

export default function Detail({ detailId }) {
  return (
    <LayoutPage title={`Fotografía #${detailId}`}>
      <DetailPhoto id={detailId} />
    </LayoutPage>
  );
}
