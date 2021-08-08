import React from "react";

import { PodcastEpisodeLink } from "./PodcastLink";

import './homeStyles.scss';

export function PodcastList(props) {
  console.dir(props)
  const { podcasts, fetching } = props;

  if (fetching) {
    return (
      <>Loading Podcasts</>
    )
  }

  return (
    <>
      <ul className="podcast-list">
        {
          podcasts.map((podcast, i) => {
            const { id, name, } = podcast;
            return (
              <li key={`${id}_${i}`} className="podcast-list-item" >
                <PodcastEpisodeLink id={id} name={name} />
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
