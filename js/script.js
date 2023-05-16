// Variables globales
let camera, scene, renderer, controls;

// Función de inicialización
function init() {
  // Crear la escena
  scene = new THREE.Scene();

  // Crear la cámara
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Crear el renderizador
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('houses').appendChild(renderer.domElement);

  // Crear controles de órbita para interactuar con el modelo
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  // Cargar el modelo .obj
  const loader = new THREE.OBJLoader();
  loader.load('3D/casa.obj', function (object) {
    scene.add(object);
  });

  // Iniciar el bucle de renderizado
  animate();
}

// Función de animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

// Inicializar la aplicación
init();