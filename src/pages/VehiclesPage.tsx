import React, { useState, useEffect } from "react";
import VehicleList from "../components/VehicleList";
import vehicleData from "../data/drivers.json";

const VehiclesPage: React.FC = () => {
    const [vehicles, setVehicles] = useState<string[]>([]);

    useEffect(() => {
        const vehicleRegistrations = vehicleData.data.map(
            (driver) => driver.vehicleRegistration
        );
        setVehicles(vehicleRegistrations);
    }, []);

    return (
        <div>
            <h2>Vehicles</h2>
            <p>Below is a list of vehicles we have stored in our database.</p>
            <br />
            <VehicleList vehicles={vehicles} />
        </div>
    );
};

export default VehiclesPage;
