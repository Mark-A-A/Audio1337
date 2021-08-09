import React from "react";

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import "./markerStyles.scss";

export function AdMarker(props) {
  const { content, link } = props
  return (
    <div className="marker-ad">
      <a href={link} target="_blank">
        <Card className="link-card">
          <CardContent>
            <h5 className="ad-header">{content}</h5>
            <Typography className="ad-disclosure" color="textSecondary">
              Advertisement
            </Typography>
          </CardContent>
        </Card>
      </a>
    </div>
  )
}
