import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DogSpinner, DogContainer } from './voxel-dog-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

let currentModel = null;  // Variable to hold the currently loaded model

const VoxelDog = ({ modelUrl }) => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()
  const urlDogGLB = process.env.NODE_ENV === 'production'
  ? 'https://toan-le-v2.vercel.app/voxelfinal2.glb'  // absolute URL for production
  : '/voxelfinal2.glb';  // relative path for development


  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      const scene = new THREE.Scene()

      const loadModel = async (scene, url) => {
        if (currentModel) {
          // Optionally: currentModel.material.dispose();
          // Optionally: currentModel.geometry.dispose();
          scene.remove(currentModel);
        }
    
        const model = await loadGLTFModel(scene, url, {
          receiveShadow: true,
          castShadow: true,
        });
    
        currentModel = model;
        setLoading(false);
      };

      loadModel(scene, urlDogGLB);  // Load the model when the component mounts

      const target = new THREE.Vector3(-0.5, 1.2, 0)
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )

      const scale = scH * 0.001 + 2.25
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        5000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 3.5)
      directionalLight.position.set(-2, 3, 3)
      directionalLight.castShadow = true
      scene.add(directionalLight)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.25)
      scene.add(ambientLight)

      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)
        
        frame = frame <= 100 ? frame + 1 : frame
        
        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 5
          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      animate();  // Start the animation

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [modelUrl, handleWindowResize])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  )
}

export default VoxelDog
