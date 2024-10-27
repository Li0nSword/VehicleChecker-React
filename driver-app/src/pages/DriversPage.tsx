import React, { useState, useEffect } from "react";
import DriversList from "../components/DriverList";
import { Driver } from "../types";
import driversData from "../data/drivers.json";

const DriversPage: React.FC = () => {
    const [drivers, setDrivers] = useState<Driver[]>([]);

    useEffect(() => {
        const transformedDrivers = driversData.data.map((driver) => ({
            driverID: driver.driverID,
            surname: driver.surname,
            forename: driver.forename,
            vehicleRegistration: driver.vehicleRegistration,
            traces: driver.traces,
        }));
        setDrivers(transformedDrivers);
    }, []);

    return (
        <div>
            <h2>Drivers</h2>
            <p>
                View the information we hold on our drivers below. Search for
                Drivers by Forename, Surname or Vehicle Registration. You can
                also sort the grid below by ascending or descending for each
                column.{" "}
            </p>
            <br />
            <DriversList drivers={drivers} />
        </div>
    );
};

export default DriversPage;
