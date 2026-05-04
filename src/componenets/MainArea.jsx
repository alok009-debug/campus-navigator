import { useState, useEffect } from "react";
import Scanner from "./Scanner";
// import { RiQrCodeLine } from "react-icons/ri"
// import { RiQrCodeLine } from "react-icons/ri";


const MainArea = () => {


    const [data, setData] = useState({});
    const [selected, setSelected] = useState('');


    useEffect(() => {
        // Simulating API fetch
        async function fetchData() {
            try {
                // Example: Replace with your API call
                const response = await Promise.resolve({

                    "AllLocations": [
                        {
                            "locId": 1,
                            "loc": "Bsc CA",
                            "x_coor": 10.99,
                            "y-coor": 2.45
                        },
                        {
                            "locId": 2,
                            "loc": "Bsc IT",
                            "x_coor": 1.89,
                            "y-coor": 2.9
                        },
                        {
                            "locId": 3,
                            "loc": "ELL",
                            "x_coor": 9.9,
                            "y-coor": 25.3
                        },
                        {
                            "locId": 4,
                            "loc": "Amanat",
                            "x_coor": 12.9,
                            "y-coor": 5.8
                        }
                    ]

                });

                if (response && typeof response === "object" && !Array.isArray(response)) {
                    setData(response);
                } else {
                    console.error("Invalid data format: expected an object");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>

            {/* <RiQrCodeLine size={30} /> */}
            <span><h4>Scan your location</h4></span>
                {/* calling sacanner component */}
                <Scanner />


            <h4>Select where you want to go</h4>

            <label htmlFor="locSelect">Choose a location: </label>
            <select
                id="locSelect"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
            >
                <option value="">-- Select --</option>
                {data.AllLocations &&
                    data.AllLocations.map((location) => (
                        <option key={location.locId} value={location.locId}>
                            {location.loc}
                        </option>
                    ))}

            </select>

            {selected && (
                <p>
                    You selected:{" "}

                    <strong>{data.AllLocations.find((loc) => loc.locId === Number(selected))?.loc}
                    </strong>{" "}
                    (ID: {selected})
                </p>
            )}
        </div >
    )
}

export default (MainArea)