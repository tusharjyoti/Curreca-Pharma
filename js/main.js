// NAVIGATION SCROLL EFFECT
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// MOBILE MENU TOGGLE
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
}

// THREE.JS HERO ANIMATION (Home Page Only)
if (document.getElementById('canvas-container')) {
    const initThreeJS = () => {
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        
        // Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Object: Abstract Molecule
        const geometry = new THREE.IcosahedronGeometry(2.2, 1);
        const material = new THREE.MeshPhongMaterial({
            color: 0x008080,
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Inner Nucleus
        const innerGeo = new THREE.IcosahedronGeometry(1, 0);
        const innerMat = new THREE.MeshPhongMaterial({ color: 0x4fd1c5, flatShading: true });
        const innerSphere = new THREE.Mesh(innerGeo, innerMat);
        sphere.add(innerSphere);

        // Lights
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(2, 5, 10);
        scene.add(light);
        const ambient = new THREE.AmbientLight(0x404040);
        scene.add(ambient);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.002;
            sphere.rotation.x += 0.001;
            renderer.render(scene, camera);
        };
        animate();

        // Responsive Three.js
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    };
    initThreeJS();
}

// DYNAMIC YEAR IN FOOTER
const yearSpan = document.getElementById('year');
if(yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}