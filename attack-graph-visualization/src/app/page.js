import React from 'react';
import Graph from '../../components/Graph';

const Home = () => {
  // Sample data for the graph
  const data = [
    { data: { id: 'agent1', name: 'Agent A' } },
    { data: { id: 'tool1', name: 'Tool X' } },
    { data: { id: 'tool2', name: 'Tool Y' } },
    { data: { id: 'agent2', name: 'Agent B' } },
    { data: { id: 'response', name: 'Final Response' } },
    { data: { source: 'agent1', target: 'tool1' } },
    { data: { source: 'tool1', target: 'response' } },
    { data: { source: 'agent1', target: 'tool2' } },
    { data: { source: 'tool2', target: 'agent2' } },
  ];

  return (
    <div>
      <h1>Interactive Attack Graph Visualization</h1>
      <Graph data={data} />
    </div>
  );
};

export default Home;