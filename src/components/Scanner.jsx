import { Html5QrcodeScanner } from "html5-qrcode";

function Scanner({ onScanSuccess }) {
  const startScanner = () => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: { width: 300, height: 300 },
      fps: 2,
    });

    scanner.render(
      (result) => {
        try {
          // Try parsing JSON from QR
          const parsed = JSON.parse(result);
          onScanSuccess(parsed);
        } catch {
          // If not JSON, just send raw string
          onScanSuccess({ campus: "Unknown", location: result, coords: [] });
        }
        scanner.clear();
      },
      (err) => console.warn(err)
    );
  };

  return (
    <div>
      <div id="reader"></div>
      <button onClick={startScanner}>Scan your location</button>
    </div>
  );
}

export default Scanner;
