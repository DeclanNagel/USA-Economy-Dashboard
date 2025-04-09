import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css'

const example_data = [
    { date: '1', value: 400 },
    { date: '2', value: 300 },
    { date: '3', value: 100 },
    { date: '4', value: 400 },
    { date: '5', value: 250 },
    { date: '6', value: 375 },
  ];

function DataGraph() {
  return (
    <div style={{ width: '65%', height: 425 }} className='datagraph-container'>
      <ResponsiveContainer>
        <LineChart data={example_data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DataGraph;
  

