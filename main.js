import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function main() {

  const scene  = new THREE.Scene();
  scene.background = new THREE.Color("#1a1942");


  
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    });
   
  renderer.setPixelRatio( window.devicePixelRatio);
  renderer.setSize( window.innerWidth, window.innerHeight);
  // camera.position.setZ(30);
  const fov = 1000;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 1.5;
  const far = 5.2;

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 5);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.z = camera.position.z - 0.01;
  controls.update();

  renderer.render(scene, camera);
    // perspective camera setup
    {
      const color = 0xffffff; // white
      const groundColor = 0xb97a20; // brownish orange
      const intensity = 100;
      const light = new THREE.AmbientLight(color, intensity);
      scene.add(light);
    }

    let objects = new THREE.Group();

    function createObjects() {
      let sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 32, 32),
        new THREE.MeshPhongMaterial({ color: 0xff00ff })
      );

      let sphere1 = sphere.clone();
      let sphere2 = sphere.clone();
      let sphere3 = sphere.clone();
      let sphere4 = sphere.clone();
      sphere1.position.set(0, 0, 0);
      sphere2.position.set(5, 0, 5);
      sphere3.position.set(0, 0, 10);
      sphere4.position.set(-5, 0, 5);
      objects.add(sphere1, sphere2, sphere3, sphere4);
    }

    createObjects();
    scene.add(objects);

    function animate() {
      // console.log("animate");

      requestAnimationFrame( animate );
    
      // required if controls.enableDamping or controls.autoRotate are set to true
      // controls.update();
    
      renderer.render( scene, camera );
    
    }
    animate();

}

main();