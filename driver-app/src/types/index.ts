export interface MenuItem {
    title: string;
    url: string;
}

// export interface Activity {
//     startTime: string;
//     type: string;
//     duration: number;
// }

// export interface Trace {
//     date: string;
//     activity: Activity[];
// }

export interface Driver {
    driverID: number;
    surname: string;
    forename: string;
    vehicleRegistration: string;
    traces: {
        date: string;
        activity: {
            startTime: string;
            type: string;
            duration: number;
        }[];
    }[];
}
