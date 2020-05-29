import React from "react";
import { ResponsiveStream } from "@nivo/stream";
import { GraphLayout } from "../Style/index.view";

const data = [
  {
    Raoul: 142,
    Josiane: 174,
    Marcel: 94,
    René: 12,
    Paul: 80,
    Jacques: 115,
  },
  {
    Raoul: 155,
    Josiane: 108,
    Marcel: 132,
    René: 107,
    Paul: 54,
    Jacques: 194,
  },
  {
    Raoul: 190,
    Josiane: 42,
    Marcel: 187,
    René: 193,
    Paul: 70,
    Jacques: 200,
  },
  {
    Raoul: 14,
    Josiane: 50,
    Marcel: 170,
    René: 72,
    Paul: 181,
    Jacques: 155,
  },
  {
    Raoul: 196,
    Josiane: 100,
    Marcel: 55,
    René: 24,
    Paul: 75,
    Jacques: 20,
  },
];

export default function index() {
  return (
    <GraphLayout>
      <ResponsiveStream
        data={data}
        keys={["Raoul", "Josiane", "Marcel", "René", "Paul", "Jacques"]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: 36,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: -40,
        }}
        offsetType="silhouette"
        colors={{ scheme: "nivo" }}
        fillOpacity={0.85}
        borderColor={{ theme: "background" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#2c998f",
            size: 4,
            padding: 2,
            stagger: true,
          },
          {
            id: "squares",
            type: "patternSquares",
            background: "inherit",
            color: "#e4c912",
            size: 6,
            padding: 2,
            stagger: true,
          },
        ]}
        fill={[
          {
            match: {
              id: "Paul",
            },
            id: "dots",
          },
          {
            match: {
              id: "Marcel",
            },
            id: "squares",
          },
        ]}
        dotSize={8}
        dotColor={{ from: "color" }}
        dotBorderWidth={2}
        dotBorderColor={{ from: "color", modifiers: [["darker", 0.7]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999999",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                },
              },
            ],
          },
        ]}
      />
    </GraphLayout>
  );
}
