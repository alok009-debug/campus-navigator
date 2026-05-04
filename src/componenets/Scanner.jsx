import { useEffect, useState } from "react";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";

function Scanner() {
    const [scanResult, setScanResult] = useState(null)

    const yourLocation = () => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: { width: 300, height: 300 },
            fps: 2,
        });

        const onScanSuccess = (result) => {
            setScanResult(result);
            scanner.clear();
        };

        const onScanFailure = (err) => {
            console.warn(err);

        };
        scanner.render(onScanSuccess, onScanFailure);

    };

    return (
        <div>
            {
                scanResult ? (
                    <div>
                        Success: <a herf={scanResult}> {scanResult}</a>
                    </div>)
                    : (
                        <div>
                            <div id="reader"></div>
                            <button onClick={yourLocation}>Scan your location</button>
                        </div>)
            }
        </div >
    )
}
export default (Scanner)