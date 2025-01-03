import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

const Graph = ({ data }) => {
  const cyRef = useRef(null);

  useEffect(() => {
    if (cyRef.current) {
      cyRef.current.destroy();
    }

    const cy = cytoscape({
      container: document.getElementById('cy'), // container to render in
      elements: data, // elements to render
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(name)',
            'text-valign': 'center',
            'text-halign': 'center',
          },
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
          },
        },
      ],
      layout: {
        name: 'cose',
        padding: 10,
      },
    });

    cy.on('tap', 'node', (evt) => {
      const node = evt.target;
      alert(`Node clicked: ${node.data('name')}`);
    });

    cy.on('tap', 'edge', (evt) => {
      const edge = evt.target;
      alert(`Edge clicked: ${edge.data('source')} -> ${edge.data('target')}`);
    });

    cyRef.current = cy;
  }, [data]);

  return <div id="cy" style={{ width: '100%', height: '600px' }} />;
};

export default Graph;