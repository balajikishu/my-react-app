import React from 'react';
//import './Equipment.css';

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  margin: '10px 0',
};

const thStyle = {
  background: 'gray',
  borderBottom: '1px solid',
};

const tdStyle = {
  borderBottom: '1px solid',
  padding: '8px',
  textAlign: 'center',
};

const EquipmentList = ({ equipments }) => {
  return (
    <div>
      <h2>Equipments</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((equipment) => (
            <tr key={equipment.id}>
              <td style={tdStyle}>{equipment.id}</td>
              <td style={tdStyle}>{equipment.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentList;