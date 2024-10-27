import React from "react";
import { Driver } from "../types";
import ActivityBox from "./ActivityBox";
import { styles } from "../styling/styles";

interface DriverRowProps {
    driver: Driver;
}

type ActivityTypes = {
    drive: number;
    rest: number;
    work: number;
    available: number;
};

const DriverRow: React.FC<DriverRowProps> = ({ driver }) => {
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const startDate = new Date("2021-02-01");

    const activityTotals = driver.traces.reduce((totals, trace) => {
        trace.activity.forEach((act) => {
            totals[act.type as keyof ActivityTypes] =
                (totals[act.type as keyof ActivityTypes] || 0) + act.duration;
        });
        return totals;
    }, {} as ActivityTypes);

    const totalDuration = Object.values(activityTotals).reduce(
        (sum, duration) => sum + (duration || 0),
        0
    );

    const hasActivityOnDay = (date: string) => {
        return driver.traces.some((trace) => trace.date === date);
    };

    const formatDate = (date: Date): string => {
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div style={styles.driverRow}>
            <div style={styles.driverName}>
                {`${driver.forename} ${driver.surname}`}
            </div>
            <div style={styles.vehicleReg}>{driver.vehicleRegistration}</div>
            <div style={styles.activityDurations}>
                <div style={styles.totalDuration}>
                    <span style={styles.totalLabel}>Total:</span>
                    {totalDuration} min
                </div>
                <div style={styles.typeContainer}>
                    <div style={styles.activityDuration}>
                        <span style={styles.activityLabel}>Drive:</span>
                        {activityTotals.drive || 0} min
                    </div>
                    <div style={styles.activityDuration}>
                        <span style={styles.activityLabel}>Rest:</span>
                        {activityTotals.rest || 0} min
                    </div>
                    <div style={styles.activityDuration}>
                        <span style={styles.activityLabel}>Work:</span>
                        {activityTotals.work || 0} min
                    </div>
                    <div style={styles.activityDuration}>
                        <span style={styles.activityLabel}>Available:</span>
                        {activityTotals.available || 0} min
                    </div>
                </div>
            </div>
            <div style={styles.activityBoxes}>
                {weekDays.map((day, index) => {
                    const currentDate = new Date(startDate);
                    currentDate.setDate(currentDate.getDate() + index);
                    const dateString = currentDate.toISOString().split("T")[0];
                    return (
                        <ActivityBox
                            key={day}
                            hasActivity={hasActivityOnDay(dateString)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default DriverRow;
