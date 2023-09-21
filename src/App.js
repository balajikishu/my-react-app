import React, { useState, useEffect } from 'react';
import './App.css';
import VehicleList from './vehicle/VehicleList';
import EquipmentList from './equipment/EquipmentList';
import vehiclesData from './vehicles.json'; // Import vehicle data
import equipmentsData from './equipments.json'; // Import equipment data

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    // Set vehicle data
    setVehicles(vehiclesData);

    // Set equipment data
    setEquipments(equipmentsData);
  }, []);

  return (
    <div className="App">
      <h1>Fleet Management</h1>
      <VehicleList vehicles={vehicles} />
      <EquipmentList equipments={equipments} />
    </div>
  );
}

export default App;