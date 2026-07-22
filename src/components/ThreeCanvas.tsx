import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeCanvasProps {
  activeSection: number; // 0 to 10 for the 11 sections
  selectedServiceIndex?: number | null;
  hoveredTechIndex?: number | null;
}

export default function ThreeCanvas({
  activeSection,
  selectedServiceIndex,
  hoveredTechIndex,
}: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Keep references of targets to interpolate in the animation loop
  const stateRef = useRef({
    activeSection,
    selectedServiceIndex,
    hoveredTechIndex,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    scrollProgress: 0,
    time: 0,
  });

  // Keep activeSection and other triggers in sync with stateRef
  useEffect(() => {
    stateRef.current.activeSection = activeSection;
  }, [activeSection]);

  useEffect(() => {
    stateRef.current.selectedServiceIndex = selectedServiceIndex ?? -1;
  }, [selectedServiceIndex]);

  useEffect(() => {
    stateRef.current.hoveredTechIndex = hoveredTechIndex ?? -1;
  }, [hoveredTechIndex]);

  // Handle Mouse Movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse to -1 to 1
      stateRef.current.targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      stateRef.current.targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Main Three.js Initialization & Render Loop
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.05);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    // 3. Renderer setup with high precision and transparency
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0x0a0a0c, 2);
    scene.add(ambientLight);

    // Mouse Follow spotlight/point light (Electric blue/Neon Cyan)
    const followLight = new THREE.PointLight(0x00f0ff, 8, 15);
    followLight.position.set(0, 0, 4);
    scene.add(followLight);

    // Purple Ambient/Directional Key Light
    const keyLight = new THREE.DirectionalLight(0xbd00ff, 4);
    keyLight.position.set(5, 5, 2);
    scene.add(keyLight);

    // Electric Blue Backlight
    const blueBackLight = new THREE.DirectionalLight(0x004cff, 4);
    blueBackLight.position.set(-5, -3, -2);
    scene.add(blueBackLight);

    // 5. Background Starfield/Data Particles
    const particleCount = 800;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Box spread
      positions[i] = (Math.random() - 0.5) * 15;
      positions[i + 1] = (Math.random() - 0.5) * 15;
      positions[i + 2] = (Math.random() - 0.5) * 10 - 2;

      // Color palette transition (Cyan to Deep Purple)
      const ratio = Math.random();
      colors[i] = ratio * 0.4; // R
      colors[i + 1] = (1 - ratio) * 0.8 + 0.1; // G
      colors[i + 2] = ratio * 0.9 + 0.1; // B
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Texture for perfectly round particles (anti-aliased circular points)
    const createCircleTexture = () => {
      const size = 32;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2 - 1, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      map: createCircleTexture(),
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const starfield = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(starfield);

    // 6. Section-Specific Meshes

    // SECTION 1: Dynamic High-Tech Globe
    const globeGroup = new THREE.Group();
    const globeRadius = 1.6;
    
    // Core glowing globe (wireframe)
    const globeGeo = new THREE.SphereGeometry(globeRadius, 32, 32);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x004cff,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const innerGlobe = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(innerGlobe);

    // Outer orbiting data points
    const globePointsCount = 600;
    const globePointsGeo = new THREE.BufferGeometry();
    const globePos = new Float32Array(globePointsCount * 3);
    for (let i = 0; i < globePointsCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = globeRadius + 0.05 * (Math.random() - 0.5);

      globePos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      globePos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      globePos[i * 3 + 2] = r * Math.cos(phi);
    }
    globePointsGeo.setAttribute("position", new THREE.BufferAttribute(globePos, 3));
    const globePointsMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.04,
      transparent: true,
      opacity: 0.9,
      map: createCircleTexture(),
      blending: THREE.AdditiveBlending,
    });
    const globePoints = new THREE.Points(globePointsGeo, globePointsMat);
    globeGroup.add(globePoints);

    // Orbiting rings
    const ringGeo1 = new THREE.RingGeometry(globeRadius + 0.2, globeRadius + 0.23, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xbd00ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
      wireframe: true,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    globeGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(globeRadius + 0.3, globeRadius + 0.32, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
      wireframe: true,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    globeGroup.add(ring2);

    scene.add(globeGroup);

    // SECTION 2: Liquid-Morphing Glass Sculpture (About)
    // High-poly sphere we displace procedurally in the animation loop
    const sculptureGeo = new THREE.IcosahedronGeometry(1.2, 5); // Subdivision level 5
    // Make standard luxury glass-morphism material
    const sculptureMat = new THREE.MeshPhysicalMaterial({
      color: 0x0d0d12,
      emissive: 0x004cff,
      emissiveIntensity: 0.15,
      metalness: 0.1,
      roughness: 0.08,
      transmission: 0.9, // Luxury glass look
      thickness: 1.5,
      ior: 1.5,
      transparent: true,
      opacity: 0.85,
      wireframe: false,
    });
    const sculpture = new THREE.Mesh(sculptureGeo, sculptureMat);
    // Wireframe overlay for neon cyber details
    const sculptureWireMat = new THREE.MeshBasicMaterial({
      color: 0xbd00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const sculptureWire = new THREE.Mesh(sculptureGeo, sculptureWireMat);
    sculpture.add(sculptureWire);
    sculpture.position.set(0, -10, 0); // Hide initially, we interpolate positions
    scene.add(sculpture);

    // Get original positions of the sculpture vertices to do procedural wave displacement
    const origPositions = sculptureGeo.attributes.position.clone();

    // SECTION 3: Floating Wireframe Interactive Cubes & Services Showcase
    const servicesGroup = new THREE.Group();
    servicesGroup.position.set(0, -20, 0);

    const serviceGeos = [
      new THREE.BoxGeometry(1.5, 1.5, 1.5), // Web Dev Cube
      new THREE.TorusKnotGeometry(0.7, 0.25, 100, 16), // SEO Knot
      new THREE.OctahedronGeometry(1.1), // Social Media Octa
      new THREE.IcosahedronGeometry(1.1, 1), // Branding Icosa
      new THREE.DodecahedronGeometry(1.1), // AI Automation Dodeca
      new THREE.ConeGeometry(0.9, 1.8, 4), // CRM Pyramids
    ];

    const serviceMaterials = serviceGeos.map((_, i) => {
      const colors = [0x00f0ff, 0xbd00ff, 0x004cff, 0x00f0ff, 0xbd00ff, 0x004cff];
      return new THREE.MeshPhysicalMaterial({
        color: 0x050505,
        emissive: colors[i],
        emissiveIntensity: 0.3,
        roughness: 0.1,
        metalness: 0.8,
        transmission: 0.5,
        transparent: true,
        opacity: 0.7,
        wireframe: true,
      });
    });

    const serviceMeshes = serviceGeos.map((geo, i) => {
      const mesh = new THREE.Mesh(geo, serviceMaterials[i]);
      // Nested glowing inside core
      const innerGeo = geo.clone();
      innerGeo.scale(0.5, 0.5, 0.5);
      const innerMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xbd00ff : 0x00f0ff,
        transparent: true,
        opacity: 0.35,
        wireframe: false,
      });
      const inner = new THREE.Mesh(innerGeo, innerMat);
      mesh.add(inner);
      
      mesh.position.set((i - 2.5) * 2.2, 0, 0); // Side-by-side array
      servicesGroup.add(mesh);
      return mesh;
    });

    scene.add(servicesGroup);

    // SECTION 5: Holographic Technologies Orbit System
    const techOrbitGroup = new THREE.Group();
    techOrbitGroup.position.set(0, -30, 0);

    // Central digital star
    const techCoreGeo = new THREE.SphereGeometry(0.6, 16, 16);
    const techCoreMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
    });
    const techCore = new THREE.Mesh(techCoreGeo, techCoreMat);
    techOrbitGroup.add(techCore);

    // 10 Orbiting holographic nodes
    const techCount = 10;
    const techNodes: THREE.Mesh[] = [];
    const orbitRings: THREE.Line[] = [];

    for (let i = 0; i < techCount; i++) {
      const radius = 1.8 + i * 0.18;
      // Orbit Ring line
      const ringGeo = new THREE.BufferGeometry();
      const ringPoints = [];
      const steps = 64;
      for (let s = 0; s <= steps; s++) {
        const theta = (s / steps) * Math.PI * 2;
        ringPoints.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }
      ringGeo.setFromPoints(ringPoints);
      const ringMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0x004cff : 0xbd00ff,
        transparent: true,
        opacity: 0.15,
      });
      const ringLine = new THREE.Line(ringGeo, ringMat);
      // Give orbit plane some tilt
      ringLine.rotation.x = Math.PI / 12 * (i - 5);
      ringLine.rotation.z = Math.PI / 16 * i;
      techOrbitGroup.add(ringLine);
      orbitRings.push(ringLine);

      // Node sphere
      const nodeGeo = new THREE.SphereGeometry(0.12, 12, 12);
      const nodeMat = new THREE.MeshPhysicalMaterial({
        color: 0x050505,
        emissive: i % 2 === 0 ? 0x00f0ff : 0xbd00ff,
        emissiveIntensity: 0.9,
        transparent: true,
        opacity: 0.9,
        roughness: 0.1,
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      techOrbitGroup.add(node);
      techNodes.push(node);
    }

    scene.add(techOrbitGroup);

    // SECTION 11: Cyber Tunnel/Neon Grid (Contact)
    const gridHelper1 = new THREE.GridHelper(30, 30, 0x00f0ff, 0x004cff);
    gridHelper1.position.set(0, -45, -5);
    gridHelper1.rotation.x = Math.PI / 2.5;
    scene.add(gridHelper1);

    const gridHelper2 = new THREE.GridHelper(30, 30, 0xbd00ff, 0x050505);
    gridHelper2.position.set(0, -45, -10);
    gridHelper2.rotation.x = -Math.PI / 2.5;
    scene.add(gridHelper2);


    // 7. Handle Window Resize
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 8. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      stateRef.current.time += 0.01;
      const t = stateRef.current.time;

      // Smooth mouse interpolation (lerp)
      stateRef.current.mouseX += (stateRef.current.targetMouseX - stateRef.current.mouseX) * 0.08;
      stateRef.current.mouseY += (stateRef.current.targetMouseY - stateRef.current.mouseY) * 0.08;

      const mx = stateRef.current.mouseX;
      const my = stateRef.current.mouseY;

      // Update follow light with mouse coordinate
      followLight.position.x = mx * 4;
      followLight.position.y = my * 4;
      followLight.position.z = 2.5 + Math.sin(t * 2) * 0.5;

      // Starfield drift & parallax
      starfield.rotation.y = t * 0.02 + mx * 0.05;
      starfield.rotation.x = t * 0.01 + my * 0.05;

      // Section Transitions: Bind camera targets based on scroll section index (0-11)
      const currentSec = stateRef.current.activeSection;

      // Define target positions for our meshes & camera based on section
      let targetCamY = 0;
      let targetCamZ = 5;
      let targetCamRotX = 0;

      // Reset meshes visibility / y-positions to avoid crowding
      // Standard linear interpolations (lerps)
      globeGroup.position.y += (0 - (currentSec * 0.8) - globeGroup.position.y) * 0.08;
      // Fade out globe as we scroll down
      globePointsMat.opacity = Math.max(0, 1 - (currentSec * 0.6));
      globeMat.opacity = Math.max(0, 0.12 - (currentSec * 0.1));
      
      // Rotate globe group
      globeGroup.rotation.y = t * 0.05 + mx * 0.3;
      globeGroup.rotation.x = t * 0.02 + my * 0.2;

      // About Section morphing sculpture (active around section 1-2)
      let sculptureTargetY = -12;
      if (currentSec >= 1 && currentSec <= 3) {
        sculptureTargetY = (currentSec === 1) ? -1.5 : (currentSec === 2 ? 0 : 2);
        targetCamZ = 4.2;
      }
      sculpture.position.y += (sculptureTargetY - sculpture.position.y) * 0.08;
      sculpture.position.x += (mx * 0.5 - sculpture.position.x) * 0.08;
      sculpture.rotation.y = t * 0.15 + mx * 0.4;
      sculpture.rotation.x = t * 0.08 + my * 0.3;

      // Procedural liquid glass displacement
      const posAttr = sculptureGeo.attributes.position;
      const origAttr = origPositions;
      for (let i = 0; i < posAttr.count; i++) {
        const x = origAttr.getX(i);
        const y = origAttr.getY(i);
        const z = origAttr.getZ(i);

        // Simple math noise function (sine waves)
        const ripple = Math.sin(x * 2.5 + t * 2) * Math.cos(y * 2.5 + t * 2) * 0.12;
        posAttr.setXYZ(
          i,
          x + (x * ripple),
          y + (y * ripple),
          z + (z * ripple)
        );
      }
      posAttr.needsUpdate = true;

      // Services Section meshes (active around section 2-4)
      let servicesTargetY = -12;
      if (currentSec >= 2 && currentSec <= 4) {
        servicesTargetY = 0;
      }
      servicesGroup.position.y += (servicesTargetY - servicesGroup.position.y) * 0.08;
      
      // Animate services meshes
      serviceMeshes.forEach((mesh, index) => {
        // base rotation
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.005;

        // Interactive hover focus zoom/glow
        const isSelected = stateRef.current.selectedServiceIndex === index;
        const targetScale = isSelected ? 1.4 : 1.0;
        mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, targetScale, 0.1));
        
        // Tilt based on mouse
        if (isSelected) {
          mesh.rotation.y += (mx * 0.8 - mesh.rotation.y) * 0.1;
          mesh.rotation.x += (my * 0.8 - mesh.rotation.x) * 0.1;
        }
      });

      // Technology System Section (active around section 4-5)
      let techTargetY = -15;
      if (currentSec >= 4 && currentSec <= 6) {
        techTargetY = 0;
      }
      techOrbitGroup.position.y += (techTargetY - techOrbitGroup.position.y) * 0.08;
      techOrbitGroup.position.x += (mx * 0.3 - techOrbitGroup.position.x) * 0.08;

      techCore.rotation.y += 0.01;
      techCore.rotation.z += 0.005;

      // Nodes orbiting calculation
      techNodes.forEach((node, i) => {
        const orbitSpeed = 0.15 + i * 0.05;
        const ring = orbitRings[i];
        const radius = 1.8 + i * 0.18;

        // Calculate orbit position using ring's rotation tilts
        const angle = t * orbitSpeed + (i * Math.PI * 2 / techCount);
        const localPos = new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
        
        // Apply ring's tilts
        localPos.applyEuler(ring.rotation);
        
        node.position.copy(localPos);

        // Hover scale feedback
        const isHovered = stateRef.current.hoveredTechIndex === i;
        const targetScale = isHovered ? 1.8 : 1.0;
        node.scale.setScalar(THREE.MathUtils.lerp(node.scale.x, targetScale, 0.15));
      });

      // Contact Cyber Tunnel section grid
      let gridTargetY = -35;
      if (currentSec >= 9) {
        gridTargetY = -1.5;
        gridHelper1.rotation.y = t * 0.05 + mx * 0.2;
        gridHelper2.rotation.y = -t * 0.03 - mx * 0.2;
      }
      gridHelper1.position.y += (gridTargetY - gridHelper1.position.y) * 0.08;
      gridHelper2.position.y += (gridTargetY - gridHelper2.position.y) * 0.08;

      // Camera Position interpolation
      // Scroll based cam movement
      if (currentSec === 0) {
        // Hero camera: simple mouse tilt
        targetCamY = 0;
        targetCamZ = 5 + my * 0.3;
        camera.position.x += (mx * 0.4 - camera.position.x) * 0.06;
      } else if (currentSec === 1) {
        // About Section Cam
        targetCamY = 0;
        targetCamZ = 4.2;
        camera.position.x += (mx * 0.2 - camera.position.x) * 0.06;
      } else if (currentSec === 2) {
        // Services
        targetCamY = 0;
        targetCamZ = 4.8;
        camera.position.x += (mx * 0.3 - camera.position.x) * 0.06;
      } else if (currentSec === 3) {
        // Portfolio: push slightly back for layout
        targetCamY = 0;
        targetCamZ = 5.2;
        camera.position.x += (mx * 0.2 - camera.position.x) * 0.06;
      } else if (currentSec === 4) {
        // Tech
        targetCamY = 0;
        targetCamZ = 4.4;
        camera.position.x += (mx * 0.1 - camera.position.x) * 0.06;
      } else if (currentSec >= 9) {
        // Contact: Zoom deep into cyber grid
        targetCamY = 0.5;
        targetCamZ = 3.2;
        camera.position.x += (mx * 0.5 - camera.position.x) * 0.06;
      } else {
        // Default standard intermediate layout
        targetCamY = 0;
        targetCamZ = 5;
        camera.position.x += (mx * 0.2 - camera.position.x) * 0.06;
      }

      camera.position.y += (targetCamY - camera.position.y) * 0.08;
      camera.position.z += (targetCamZ - camera.position.z) * 0.08;
      camera.rotation.x += (targetCamRotX - camera.rotation.x) * 0.08;

      // Always look toward slightly offset center
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
