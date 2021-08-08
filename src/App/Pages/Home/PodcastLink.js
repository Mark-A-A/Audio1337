
import React from 'react';
import { Link } from 'react-router-dom'

export const PodcastEpisodeLink = (props) => {
  const { name, id } = props;
  const path = `/episode/${id}`;

  return (
    <div className="podcast-episode-link">
      <Link to={path}>{name}</Link>
    </div>
  )
}