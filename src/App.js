import "./App.css";
import FlapImage from "./Components/FlapImage";

function App() {
    return (
        <div
            className="App"
            style={{
                background: "#000",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <h1>Hello World</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px"
                }}
            >
                <FlapImage />
            </div>
        </div>
    );
}

export default App;
