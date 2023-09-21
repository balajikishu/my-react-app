import React from 'react';
import "./Vehicle.css"

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

// const VehicleList = ({ vehicles }) => {
//   return (
//     <div>
//       <h2>Vehicles</h2>
//       <table class="tableStyle">
//         <thead>
//           <tr>
//             <th class="thStyle">ID</th>
//             <th class="thStyle">Name</th>
//             <th class="thStyle">Fuel Type</th>
//             <th class="thStyle">Equipments</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vehicles.map((vehicle) => (
//             <tr key={vehicle.id}>
//               <td class="tdStyle">{vehicle.id}</td>
//               <td class="tdStyle">{vehicle.name}</td>
//               <td class="tdStyle">{vehicle.fuelType}</td>
//               <td class="tdStyle">{vehicle.equipments?.join(', ')}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default VehicleList;

const VehicleList = ({ vehicles }) => {
  return (
    <div>
      <h2>Vehicles</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Fuel Type</th>
            <th style={thStyle}>Equipments</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td style={tdStyle}>{vehicle.id}</td>
              <td style={tdStyle}>{vehicle.name}</td>
              <td style={tdStyle}>{vehicle.fuelType}</td>
              <td style={tdStyle}>{vehicle.equipments?.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;