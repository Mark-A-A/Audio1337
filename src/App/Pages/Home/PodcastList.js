import React from "react";

import { PodcastEpisodeLink } from "./PodcastLink";

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
      <ul>
        {
          podcasts.map((podcast, i) => {
            const { id, name, } = podcast;
            return (
              <li key={`${id}_${i}`}>
                <PodcastEpisodeLink id={id} name={name} />
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
