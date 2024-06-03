import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";
import './App.css'

function App() {

  return (
    <CustomizationProvider>
      <div className="App">
        <Suspense fallback={
          <div className="loading">Loading...</div>
        }>
          <Canvas shadows camera={{ position: [0, 0, 4] }}>
            <color attach="background" args={["#273548"]} />
            <fog attach="fog" args={["#273548", 10, 20]} />
              <Experience />
          </Canvas>
        </Suspense>
        <Configurator />
      </div>
    </CustomizationProvider>
  )

}

export default App
