import React from "react";

const AboutPage: React.FC = () => {
    return (
        <div>
            <h2>About</h2>
            <p>
                Vehicle Checker is a driver and vehicle checking web application
                developed in <b>TypeScript + React</b>. The React application
                was initially created and configured using Vite. The
                requirements and wireframe were followed to meet the needs of
                the stakeholders. The bonus tasks were also completed. An
                additional feature to sort the Drivers grid by Name, Vehicle
                Registration, Total Activity Time was also added. I have also
                added some smaller quality of life features like a loading
                animation whilst the user is searching for a driver and a no
                drivers found message if no data is returned.
            </p>
            <br />
            <p>Developed by Saifullah Hossenbaccus</p>
        </div>
    );
};

export default AboutPage;
