
import React from 'react';
import { Link } from 'react-router-dom'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const PodcastEpisodeLink = (props) => {
  const { name, id } = props;
  const path = `/episode/${id}`;
  
  return (
    <div className="podcast-episode-link">
      <Link to={path}>
        <Card className="link-card">
          <CardContent>
            <Typography variant="h5" component="h2">
              { name }
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}