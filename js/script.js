const velocidadLuz = 299792458;

        function calcularDistancia() {
            const t1 = parseFloat(document.getElementById('t1').value);
            const t2 = parseFloat(document.getElementById('t2').value);

            if (!isNaN(t1) && !isNaN(t2)) {
                const distancia = (t2 - t1) * velocidadLuz;
                document.getElementById('resultado').textContent = `La distancia entre nosotros y el satélite es de ${distancia.toFixed(2)} metros.`;
            } else {
                document.getElementById('resultado').textContent = 'Ingresa valores válidos para t1 y t2.';
            }
             // Configurar la escena
                    const scene = new THREE.Scene();
                    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                    const renderer = new THREE.WebGLRenderer();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    document.getElementById("canvas-container").appendChild(renderer.domElement);
            
                    // Configurar el fondo blanco
                    scene.background = new THREE.Color(0xffffff);
            
                    // Agregar Tierra (esfera marrón)
                    const earthRadius = 2; // Radio de la Tierra
                    const earthGeometry = new THREE.SphereGeometry(earthRadius, 32, 32);
                    const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 }); // Marrón
                    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
                    scene.add(earth);
            
                    // Agregar esferas (satélites celestes)
                    const numSatellites = 5;
                    const satellites = [];
            
                    for (let i = 0; i < numSatellites; i++) {
                        const radius = 0.1; // Radio de las esferas (satélites)
                        const widthSegments = 16;
                        const heightSegments = 16;
                        const satelliteGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
                        const satelliteMaterial = new THREE.MeshBasicMaterial({ color: 0x87CEEB }); // Celeste
                        const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
            
                        // Posición aleatoria para cada satélite
                        satellite.position.x = Math.random() * 4 - 2;
                        satellite.position.y = Math.random() * 4 - 2;
                        satellite.position.z = Math.random() * 4 - 2;
            
                        satellites.push(satellite);
                        scene.add(satellite);
                    }
            
                    // Configurar la cámara
                    camera.position.z = 7;
            
                    // Animación
                    const animate = () => {
                        requestAnimationFrame(animate);
            
                        // Rotación de las esferas (satélites)
                        satellites.forEach(satellite => {
                            satellite.rotation.x += 0.01;
                            satellite.rotation.y += 0.01;
                        });
            
                        // Rotación de la Tierra
                        earth.rotation.y += 0.005;
            
                        renderer.render(scene, camera);
                    };
            
                    animate();
        }
