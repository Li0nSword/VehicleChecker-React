export const styles = {
    header: {
        backgroundColor: "#fafafa", //"#E0E0E0",
        color: "white",
        padding: "1rem",
    },

    logo: {
        height: "50px",
        width: "100%",
        margin: "10px",
        //padding: "5px",
        objectFit: "contain",
    } as React.CSSProperties,

    sideMenu: {
        width: "250px",
        backgroundColor: "#e6f2ff",
        padding: "1rem",
        height: "fit-content",
        marginTop: "1rem",
        //borderRadius: "8px",
    },

    menuList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
    },

    menuItem: {
        marginBottom: "0.5rem",
    },

    menuLink: {
        textDecoration: "none",
        color: "#333",
        display: "block",
        padding: "0.5rem",
        borderRadius: "4px",
    },

    searchBar: {
        marginBottom: "1.5rem",
    },

    searchInput: {
        width: "100%",
        maxWidth: "400px",
        padding: "0.5rem",
        border: "1px solid #ddd",
        borderRadius: "4px",
    },

    noResults: {
        textAlign: "center",
        color: "#999",
        marginTop: "10px",
        paddingBottom: "10px",
        fontSize: "16px",
    } as React.CSSProperties,

    spinner: {
        display: "inline-block",
        width: "20px",
        height: "20px",
        border: "3px solid rgba(0, 0, 0, 0.1)",
        borderTop: "3px solid #333",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
    } as React.CSSProperties,

    spinnerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
    } as React.CSSProperties,

    driversList: {
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        paddingRight: "0rem",
    },

    listHeader: {
        display: "flex",
        padding: "1rem",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #ddd",
        fontWeight: 600,
    },

    driverRow: {
        display: "flex",
        padding: "1rem",
        borderBottom: "1px solid #ddd",
    },

    driverName: {
        width: "160px",
    },

    vehicleReg: {
        width: "160px",
    },

    activityDurations: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "8px",
        minWidth: "200px",
        marginRight: "15px",
    },

    totalDuration: {
        fontSize: "15px",
        //fontWeight: "bold" as const,
        //borderBottom: "1px solid #eee",
        paddingBottom: "4px",
        marginBottom: "4px",
        display: "flex",
        justifyContent: "space-between",
    },

    totalLabel: {
        marginRight: "8px",
    },

    typeContainer: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "4px",
    },

    activityDuration: {
        fontSize: "14px",
        display: "flex",
        justifyContent: "space-between",
        padding: "2px 0",
    },

    activityLabel: {
        // fontWeight: "bold" as const,
        marginRight: "8px",
    },

    activityBoxes: {
        display: "flex",
        gap: "8px",
    },

    activityBox: {
        width: "32px",
        height: "32px",
        border: "1px solid #ddd",
        backgroundColor: "white",
    },

    activeBox: {
        backgroundColor: "#4caf50",
    },

    dayLabel: {
        width: "32px",
        textAlign: "center" as const,
        fontSize: "0.875rem",
    },

    vehicleList: {
        padding: "10px",
        margin: "10px",
        marginTop: "0px",
        paddingTop: "0px",
    },
};

//keyframe animation for loading animation
const globalStyle = document.createElement("style");
globalStyle.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(globalStyle);
