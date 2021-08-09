import React from "react";

import "./markerStyles.scss";

export function ImageMarker(props) {
  const { content } = props

  return (
    <div className="marker-image">
      <img src={content} />
    </div>
  )
}
