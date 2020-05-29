import React from "react";
import LineChart from "../LineChart";
import PieChart from "../PieChart";
import BarChart from "../BarChart";
import Radar from "../Radar";
import Stream from "../StreamChart";
import AreaBump from "../AreaBump";
import Bump from "../Bump";
import ScatterPlot from "../ScatterPlot";
import { GraphContainer, Graph } from "../Style/index.view";
export default function index() {
  return (
    <div>
      <GraphContainer>
        <Graph>
          <LineChart />
        </Graph>
        <Graph>
          <PieChart />
        </Graph>
      </GraphContainer>
      <GraphContainer>
        <Graph>
          <BarChart />
        </Graph>
        <Graph>
          <Radar />
        </Graph>
      </GraphContainer>
      <GraphContainer>
        <Graph>
          <Stream />
        </Graph>
        <Graph>
          <AreaBump />
        </Graph>
      </GraphContainer>
      <GraphContainer>
        <Graph>
          <Bump />
        </Graph>
        <Graph>
          <ScatterPlot />
        </Graph>
      </GraphContainer>
    </div>
  );
}
