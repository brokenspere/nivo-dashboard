import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { GraphLayout } from "../Style/index.view";
const data = [
  {
    country: "AD",
    "hot dog": 7,
    "hot dogColor": "hsl(301, 70%, 50%)",
    burger: 168,
    burgerColor: "hsl(169, 70%, 50%)",
    sandwich: 18,
    sandwichColor: "hsl(28, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(112, 70%, 50%)",
    fries: 29,
    friesColor: "hsl(150, 70%, 50%)",
    donut: 100,
    donutColor: "hsl(57, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 187,
    "hot dogColor": "hsl(227, 70%, 50%)",
    burger: 153,
    burgerColor: "hsl(208, 70%, 50%)",
    sandwich: 186,
    sandwichColor: "hsl(156, 70%, 50%)",
    kebab: 199,
    kebabColor: "hsl(280, 70%, 50%)",
    fries: 79,
    friesColor: "hsl(21, 70%, 50%)",
    donut: 37,
    donutColor: "hsl(264, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 49,
    "hot dogColor": "hsl(73, 70%, 50%)",
    burger: 125,
    burgerColor: "hsl(291, 70%, 50%)",
    sandwich: 140,
    sandwichColor: "hsl(358, 70%, 50%)",
    kebab: 141,
    kebabColor: "hsl(206, 70%, 50%)",
    fries: 24,
    friesColor: "hsl(250, 70%, 50%)",
    donut: 177,
    donutColor: "hsl(55, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 91,
    "hot dogColor": "hsl(10, 70%, 50%)",
    burger: 13,
    burgerColor: "hsl(301, 70%, 50%)",
    sandwich: 1,
    sandwichColor: "hsl(196, 70%, 50%)",
    kebab: 92,
    kebabColor: "hsl(157, 70%, 50%)",
    fries: 37,
    friesColor: "hsl(93, 70%, 50%)",
    donut: 62,
    donutColor: "hsl(192, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 57,
    "hot dogColor": "hsl(195, 70%, 50%)",
    burger: 124,
    burgerColor: "hsl(304, 70%, 50%)",
    sandwich: 21,
    sandwichColor: "hsl(46, 70%, 50%)",
    kebab: 135,
    kebabColor: "hsl(109, 70%, 50%)",
    fries: 173,
    friesColor: "hsl(26, 70%, 50%)",
    donut: 79,
    donutColor: "hsl(291, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 53,
    "hot dogColor": "hsl(230, 70%, 50%)",
    burger: 43,
    burgerColor: "hsl(306, 70%, 50%)",
    sandwich: 77,
    sandwichColor: "hsl(17, 70%, 50%)",
    kebab: 124,
    kebabColor: "hsl(205, 70%, 50%)",
    fries: 26,
    friesColor: "hsl(209, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(134, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 192,
    "hot dogColor": "hsl(317, 70%, 50%)",
    burger: 45,
    burgerColor: "hsl(114, 70%, 50%)",
    sandwich: 139,
    sandwichColor: "hsl(261, 70%, 50%)",
    kebab: 170,
    kebabColor: "hsl(319, 70%, 50%)",
    fries: 87,
    friesColor: "hsl(346, 70%, 50%)",
    donut: 19,
    donutColor: "hsl(281, 70%, 50%)",
  },
];
export default function index() {
  return (
    <GraphLayout>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </GraphLayout>
  );
}
