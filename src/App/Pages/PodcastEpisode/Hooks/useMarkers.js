import React, { useEffect, useState } from "react";

export const useMarkers = (markersList, maxTIme, value) => {
  const [markerToDisplay, setMarkerToDisplay] = useState(markersList[0]);

  useEffect(() => {
    const currentMarker = markersList.find(marker => {
      const { start, duration } = marker;
      const end = start + duration;
      return value >= start && value < end
    })
    setMarkerToDisplay(currentMarker)
  }, [value])
  
  return {
    markerToDisplay
  }
}
