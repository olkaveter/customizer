import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import './App.css'

function App() {

  return (
    <div className="App">
      <Canvas shadows camera={{ position: [0, 0, 4] }}>
        <color attach="background" args={["#101010"]} />
        <fog attach="fog" args={["#101010", 10, 20]} />
        <Experience />
      </Canvas>
    </div>
  )
}

export default App
