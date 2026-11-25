
import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

const escena = new THREE.Scene();

const camara = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);

const materialVerde = new THREE.MeshStandardMaterial({
    color: 0x00ff00
});

const materialAzul = new THREE.MeshStandardMaterial({
    color: 0x0000ff
});

const materialRojo = new THREE.MeshStandardMaterial({
    color: 0xff0000
});

const cuboVerde = new THREE.Mesh(geometry, materialVerde);
const cuboAzul = new THREE.Mesh(geometry, materialAzul);
const cuboRojo = new THREE.Mesh(geometry, materialRojo);

cuboVerde.position.x = -2;
cuboAzul.position.x = 0;
cuboRojo.position.x = 2;

escena.add(cuboVerde);
escena.add(cuboAzul);
escena.add(cuboRojo);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

directionalLight.position.set(5, 5, 5).normalize();

escena.add(directionalLight);

camara.position.z = 5;

function animar() {

    cuboVerde.rotation.x += 0.01;
    cuboVerde.rotation.y += 0.01;

    cuboAzul.rotation.x += 0.03;
    cuboAzul.rotation.y += 0.03;

    cuboRojo.rotation.x += 0.05;
    cuboRojo.rotation.y += 0.05;

    renderer.render(escena, camara);
}

renderer.setAnimationLoop(animar);