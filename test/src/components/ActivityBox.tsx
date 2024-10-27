import React from "react";
import { styles } from "../styling/styles";

interface ActivityBoxProps {
    hasActivity: boolean;
}

const ActivityBox: React.FC<ActivityBoxProps> = ({ hasActivity }) => (
    <div
        style={{
            ...styles.activityBox,
            ...(hasActivity ? styles.activeBox : {}),
        }}
    />
);

export default ActivityBox;
