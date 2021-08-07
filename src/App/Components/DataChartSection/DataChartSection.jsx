import React from "react";

import { parseCamelCase } from "Utils/parseCamelCase";

import { DataItem } from './DataItem';

import './chartStyle.scss'

export function DataChartSection(props) {
  const { data, listClassName, id = ""} = props
  return (
    <section className="data-chart-section">
      <ul className={listClassName}>
        {
          Object.entries(data).map((detail, i) => {
            const [key, value] = detail;
            const propertyName = parseCamelCase(key);
            return (
              <DataItem key={`${id}_${i}`} propertyName={propertyName} value={value} />
            )
          })
        }
      </ul>
    </section>
  )
}

