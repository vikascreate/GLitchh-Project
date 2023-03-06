import React from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
function Model({index}) {
    const model=useGLTF('./assets/Models/Remy.glb')
 // const model2=useGLTF('./assets/Models/Walk.glb')
   const {camera}=useThree();
    const getAnim=useAnimations(model.animations)
  //  const secondAnim=useAnimations(model.animations)
   useEffect(()=>{
    console.log(camera)
    console.log(getAnim.actions)
   },[])
      useEffect(()=>{
        getAnim.actions[getAnim.names[0]].reset().fadeIn(0.5).play()
        return  ()=>{
           getAnim.actions[getAnim.names[0]].fadeOut(0.5)
        }
      },[index])
    return (
        <group ref={getAnim.ref}>
            <primitive object={model.scene} scale={[3,3,3]}/>
        </group>
    );
}

export default Model;