import React from "react";
import { styles } from "../styling/styles";

interface VehicleListProps {
    vehicles: string[];
}

const VehicleList: React.FC<VehicleListProps> = ({ vehicles }) => {
    return (
        <ul style={styles.vehicleList}>
            {vehicles.map((vehicle, index) => (
                <li key={index}>{vehicle}</li>
            ))}
        </ul>
    );
};

export default VehicleList;
