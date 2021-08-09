import React from "react";

import { AdMarker } from './AdMarker'
import { ImageMarker } from './ImageMarker'

import "./markerStyles.scss";

export function Markers(props) {
  const { markerToDisplay } = props;
  const { type = null, content, link } = markerToDisplay || {};
  return (
    <section className="markers-section">
      <div className="marker-content">
        {
          type === "ad" && (
            <AdMarker content={content} link={link} />
          )
        }
        {
          type === "image" && (
            <ImageMarker content={content} />
          )
        }
        {
          type === "text" && (
            <div className="marker-text">
              <h5>{content}</h5>
            </div>
          )
        }
      </div>
    </section>
  )
}
