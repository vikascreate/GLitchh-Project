
import { Button, Paper, Skeleton, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import {  Environment, OrbitControls, Plane } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Glitch } from '@react-three/postprocessing';
import { Suspense, useState } from "react";
import Model from "../Model";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [controlActiv,setControlActiv]=useState(false)
  function handleAnimationClick(num){
    setIndex(num);
    setControlActiv(true)
    setTimeout(()=>setControlActiv(false),500)
      
  }
  return (
    <div className="App">
      <Paper
        sx={{
          margin: "40px 40px 40px 40px",
          display: "flex",
          backgroundColor: grey[800],
        }}
      >
        <Suspense
          fallback={
            <Skeleton sx={{ width: "100%", height: "80vh", paddingTop: "0" }} />
          }
        >
          <Canvas style={{ height: "80vh", width: "100%" }} >
            {/* <directionalLight position={[0,0,10]}/> */}
          <ambientLight/>
            <Model index={index} />
           
            <EffectComposer>
              <Glitch active={controlActiv} strength={[0.6,1]} ratio={0} delay={[0,0]}/>
            </EffectComposer>
            <OrbitControls
              maxDistance={8}
              minDistance={8}
              maxPolarAngle={Math.PI / 2-0.02}
              minPolarAngle={Math.PI / 2-0.02}
              target={[0,4.5,0]}
            />
          </Canvas>
        </Suspense>
        <div
          style={{
            paddingTop: "50px",
            width: "100%",
            backgroundColor: grey[900],
          }}
        >
          <Typography
            sx={{
              color: "green",
              textAlign: "center",
              paddingBottom: "50px",
              fontFamily: "Jolly Lodger",
            }}
            variant={"h3"}
          >
   
   GLITCH
          </Typography>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              paddingBottom: "50px",
              fontFamily:'Marcellus SC'
            }}
            variant={"h3"}
          >
            REMY CLASSIC
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => handleAnimationClick(0)}
              sx={{ color: "white", borderColor: "white" }}
              variant="outlined"
            >
              Dance
            </Button>
            <Button
              onClick={() => handleAnimationClick(1)}
              sx={{ color: "white", borderColor: "white", margin: "0 10px" }}
              variant="outlined"
            >
              Die
            </Button>
            <Button
              onClick={() => handleAnimationClick(1)}
              sx={{ color: "white", borderColor: "white" }}
              variant="outlined"
            >
              Kick
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default App;
