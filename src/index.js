import * as THREE from "three";
import "./style.css";

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

// Three.js uses a scene, camera and renderer
let scene = new THREE.Scene();

// The camera attributes: FoV, Aspect Ratio, near clipping plane, far clipping plane
// If objects are closer or further than the near/close, then they are not rendered
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Let's make a cube
let geometry = new THREE.BoxGeometry(2, 2, 2);
let material = new THREE.MeshBasicMaterial({
	color: 0x00ffff,
	wireframe: true
});
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// To avoid having the camera inside the cube, we move it back a bit
camera.position.z = 5;

// Now we render the cube at 60fps using the 'render loop'
function render() {
	requestAnimationFrame(render);

	// Rotate the cube
	cube.rotation.y += 0.012;
	cube.rotation.x += 0.012;

	renderer.render(scene, camera);
}

render();