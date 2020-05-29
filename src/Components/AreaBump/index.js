import React from "react";
import { ResponsiveAreaBump } from "@nivo/bump";
import { GraphLayout } from "../Style/index.view";
const data = [
  {
    id: "JavaScript",
    data: [
      {
        x: 2000,
        y: 30,
      },
      {
        x: 2001,
        y: 16,
      },
      {
        x: 2002,
        y: 21,
      },
      {
        x: 2003,
        y: 26,
      },
      {
        x: 2004,
        y: 27,
      },
      {
        x: 2005,
        y: 19,
      },
    ],
  },
  {
    id: "ReasonML",
    data: [
      {
        x: 2000,
        y: 19,
      },
      {
        x: 2001,
        y: 10,
      },
      {
        x: 2002,
        y: 29,
      },
      {
        x: 2003,
        y: 16,
      },
      {
        x: 2004,
        y: 15,
      },
      {
        x: 2005,
        y: 16,
      },
    ],
  },
  {
    id: "TypeScript",
    data: [
      {
        x: 2000,
        y: 29,
      },
      {
        x: 2001,
        y: 14,
      },
      {
        x: 2002,
        y: 19,
      },
      {
        x: 2003,
        y: 24,
      },
      {
        x: 2004,
        y: 25,
      },
      {
        x: 2005,
        y: 10,
      },
    ],
  },
];
export default function index() {
  return (
    <GraphLayout>
      <ResponsiveAreaBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
        spacing={8}
        colors={{ scheme: "nivo" }}
        blendMode="multiply"
        startLabel="id"
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -36,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
        }}
      />
    </GraphLayout>
  );
}
