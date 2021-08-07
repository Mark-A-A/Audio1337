import React from "react";
import { useParams } from 'react-router-dom';

import { Page } from 'Components/Page/Page';

export function Detail() {
  const { id } = useParams();

  return (
    <Page pageName={"details-page"} title={details.title} containerSize="sm">
    </Page>
  )
}
