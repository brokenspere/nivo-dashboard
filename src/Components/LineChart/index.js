import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { GraphLayout } from "../Style/index.view";

const data = [
  {
    id: "japan",
    color: "hsl(69, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 108,
      },
      {
        x: "helicopter",
        y: 59,
      },
      {
        x: "boat",
        y: 72,
      },
      {
        x: "train",
        y: 49,
      },
      {
        x: "subway",
        y: 219,
      },
      {
        x: "bus",
        y: 128,
      },
      {
        x: "car",
        y: 256,
      },
      {
        x: "moto",
        y: 65,
      },
      {
        x: "bicycle",
        y: 25,
      },
      {
        x: "horse",
        y: 179,
      },
      {
        x: "skateboard",
        y: 18,
      },
      {
        x: "others",
        y: 10,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(69, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 160,
      },
      {
        x: "helicopter",
        y: 31,
      },
      {
        x: "boat",
        y: 45,
      },
      {
        x: "train",
        y: 167,
      },
      {
        x: "subway",
        y: 243,
      },
      {
        x: "bus",
        y: 150,
      },
      {
        x: "car",
        y: 116,
      },
      {
        x: "moto",
        y: 3,
      },
      {
        x: "bicycle",
        y: 3,
      },
      {
        x: "horse",
        y: 193,
      },
      {
        x: "skateboard",
        y: 132,
      },
      {
        x: "others",
        y: 183,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(189, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 241,
      },
      {
        x: "helicopter",
        y: 196,
      },
      {
        x: "boat",
        y: 14,
      },
      {
        x: "train",
        y: 51,
      },
      {
        x: "subway",
        y: 112,
      },
      {
        x: "bus",
        y: 101,
      },
      {
        x: "car",
        y: 141,
      },
      {
        x: "moto",
        y: 211,
      },
      {
        x: "bicycle",
        y: 48,
      },
      {
        x: "horse",
        y: 21,
      },
      {
        x: "skateboard",
        y: 17,
      },
      {
        x: "others",
        y: 118,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(303, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 227,
      },
      {
        x: "helicopter",
        y: 247,
      },
      {
        x: "boat",
        y: 35,
      },
      {
        x: "train",
        y: 75,
      },
      {
        x: "subway",
        y: 255,
      },
      {
        x: "bus",
        y: 156,
      },
      {
        x: "car",
        y: 253,
      },
      {
        x: "moto",
        y: 89,
      },
      {
        x: "bicycle",
        y: 172,
      },
      {
        x: "horse",
        y: 86,
      },
      {
        x: "skateboard",
        y: 174,
      },
      {
        x: "others",
        y: 299,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(44, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 129,
      },
      {
        x: "helicopter",
        y: 246,
      },
      {
        x: "boat",
        y: 126,
      },
      {
        x: "train",
        y: 273,
      },
      {
        x: "subway",
        y: 4,
      },
      {
        x: "bus",
        y: 133,
      },
      {
        x: "car",
        y: 157,
      },
      {
        x: "moto",
        y: 262,
      },
      {
        x: "bicycle",
        y: 283,
      },
      {
        x: "horse",
        y: 103,
      },
      {
        x: "skateboard",
        y: 10,
      },
      {
        x: "others",
        y: 49,
      },
    ],
  },
];

export default function index() {
  return (
    <GraphLayout>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "nivo" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </GraphLayout>
  );
}
