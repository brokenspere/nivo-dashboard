import React from "react";
import { ResponsiveRadar } from "@nivo/radar";
import { GraphLayout } from "../Style/index.view";
const data = [
  {
    taste: "fruity",
    chardonay: 106,
    carmenere: 94,
    syrah: 81,
  },
  {
    taste: "bitter",
    chardonay: 108,
    carmenere: 37,
    syrah: 113,
  },
  {
    taste: "heavy",
    chardonay: 91,
    carmenere: 91,
    syrah: 33,
  },
  {
    taste: "strong",
    chardonay: 33,
    carmenere: 47,
    syrah: 82,
  },
  {
    taste: "sunny",
    chardonay: 71,
    carmenere: 36,
    syrah: 116,
  },
];

export default function index() {
  return (
    <GraphLayout>
      <ResponsiveRadar
        data={data}
        keys={["chardonay", "carmenere", "syrah"]}
        indexBy="taste"
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: "color" }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={10}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        dotBorderColor={{ from: "color" }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={{ scheme: "nivo" }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={true}
        legends={[
          {
            anchor: "top-left",
            direction: "column",
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </GraphLayout>
  );
}
