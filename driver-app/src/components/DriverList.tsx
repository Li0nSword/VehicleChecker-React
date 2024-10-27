import React, { useState, useEffect } from "react";
import { Driver } from "../types";
import DriverRow from "./DriverRow";
import SearchBar from "./SearchBar";
import { styles } from "../styling/styles";

interface DriversListProps {
    drivers: Driver[];
}

type SortField = "name" | "vehicleReg" | "totalActivity";
type SortDirection = "asc" | "desc" | null;

interface SortState {
    field: SortField | null;
    direction: SortDirection;
}

const DriversList: React.FC<DriversListProps> = ({ drivers }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [sortState, setSortState] = useState<SortState>({
        field: null,
        direction: null,
    });

    useEffect(() => {
        if (searchTerm) {
            setIsSearching(true);

            const debounceTimer = setTimeout(() => {
                setIsSearching(false);
            }, 300);

            return () => clearTimeout(debounceTimer);
        } else {
            setIsSearching(false);
        }
    }, [searchTerm]);

    const handleSort = (field: SortField) => {
        setSortState((prevState) => ({
            field,
            direction:
                prevState.field === field && prevState.direction === "asc"
                    ? "desc"
                    : "asc",
        }));
    };

    const calculateTotalActivity = (driver: Driver): number => {
        return driver.traces.reduce((total, trace) => {
            return (
                total +
                trace.activity.reduce((sum, act) => sum + act.duration, 0)
            );
        }, 0);
    };

    const getSortedDrivers = (driversToSort: Driver[]) => {
        if (!sortState.field || !sortState.direction) return driversToSort;

        return [...driversToSort].sort((a, b) => {
            const multiplier = sortState.direction === "asc" ? 1 : -1;

            switch (sortState.field) {
                case "name":
                    const nameA = `${a.forename} ${a.surname}`.toLowerCase();
                    const nameB = `${b.forename} ${b.surname}`.toLowerCase();
                    return nameA.localeCompare(nameB) * multiplier;
                case "vehicleReg":
                    return (
                        a.vehicleRegistration.localeCompare(
                            b.vehicleRegistration
                        ) * multiplier
                    );
                case "totalActivity":
                    const totalA = calculateTotalActivity(a);
                    const totalB = calculateTotalActivity(b);
                    return (totalA - totalB) * multiplier;
                default:
                    return 0;
            }
        });
    };

    const filteredDrivers = drivers.filter((driver) => {
        const fullName = `${driver.forename} ${driver.surname}`.toLowerCase();
        return (
            fullName.includes(searchTerm.toLowerCase()) ||
            driver.vehicleRegistration
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    });

    const sortedAndFilteredDrivers = getSortedDrivers(filteredDrivers);
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const startDate = new Date("2021-02-01");

    const renderSortIcon = (field: SortField) => {
        if (sortState.field !== field) {
            return (
                <span className="ms-1">
                    <i className="bi bi-chevron-expand"></i>
                </span>
            );
        }
        return (
            <span className="ms-1">
                <i
                    className={`bi bi-chevron-${
                        sortState.direction === "asc" ? "up" : "down"
                    }`}
                ></i>
            </span>
        );
    };

    return (
        <>
            <SearchBar onSearch={setSearchTerm} />

            {isSearching && (
                <div style={styles.spinnerContainer}>
                    <div style={styles.spinner}></div>
                </div>
            )}

            <div style={styles.driversList}>
                <div style={styles.listHeader}>
                    <div
                        style={{ ...styles.driverName, cursor: "pointer" }}
                        onClick={() => handleSort("name")}
                    >
                        Driver Name {renderSortIcon("name")}
                    </div>
                    <div
                        style={{ ...styles.vehicleReg, cursor: "pointer" }}
                        onClick={() => handleSort("vehicleReg")}
                    >
                        Vehicle Reg {renderSortIcon("vehicleReg")}
                    </div>
                    <div style={styles.activityDurations}>
                        <div
                            style={{
                                ...styles.totalDuration,
                                cursor: "pointer",
                            }}
                            onClick={() => handleSort("totalActivity")}
                        >
                            Total Activity Time{" "}
                            {renderSortIcon("totalActivity")}
                        </div>
                    </div>
                    <div style={styles.activityBoxes}>
                        {weekDays.map((day, index) => {
                            const currentDate = new Date(startDate);
                            currentDate.setDate(currentDate.getDate() + index);
                            return (
                                <div key={day} style={styles.dayLabel}>
                                    {`${day}`}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {sortedAndFilteredDrivers.length > 0
                    ? sortedAndFilteredDrivers.map((driver) => (
                          <DriverRow key={driver.driverID} driver={driver} />
                      ))
                    : !isSearching && (
                          <div style={styles.noResults}>
                              No drivers found. Try searching for a different
                              name or vehicle registration
                          </div>
                      )}
            </div>
        </>
    );
};

export default DriversList;
