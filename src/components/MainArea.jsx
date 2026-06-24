import { useState } from "react";
import Scanner from "./Scanner";
import styles from './components-css/MainArea.module.css'

const MainArea = () => {
  const [scanResult, setScanResult] = useState(null);
  const [selected, setSelected] = useState("");

  const destinations = [
    { locId: 1, loc: "Bsc CA" },
    { locId: 2, loc: "Bsc IT" },
    { locId: 3, loc: "ELL" },
    { locId: 4, loc: "Amanat" },
  ];

  return (
    <div className={styles.card}>
      {!scanResult ? (
        <>
          <h3>Get your location</h3>
          <Scanner onScanSuccess={setScanResult} />
        </>
      ) : (
        <>
          <h2>Campus: {scanResult.campus}</h2>
          <p>Your current location: <strong>{scanResult.location}</strong></p>
          {scanResult.coords.length > 0 && (
            <p>Coordinates: {scanResult.coords.join(", ")}</p>
          )}

          <button onClick={() => setScanResult(null)}>Scan Again</button>

          <h4>Select where you want to go</h4>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">-- Select --</option>
            {destinations.map((d) => (
              <option key={d.locId} value={d.locId}>{d.loc}</option>
            ))}
          </select>

          {selected && (
            <p>
              You selected:{" "}
              <strong>{destinations.find((d) => d.locId === Number(selected))?.loc}</strong>
            </p>
          )}
        </>
      )}
    </div>
  );
};
export default (MainArea)