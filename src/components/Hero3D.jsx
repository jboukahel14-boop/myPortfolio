import { useState, useEffect, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import ParticleBackground from "./ParticleBackground";
import { personal } from "../data/portfolioData";

function TechMeshes({ mouse }) {
  const groupRef = useRef();

  useEffect(() => {
    if (!groupRef.current) return;
    if (!mouse.x && !mouse.y) return;
    const targetX = (mouse.x / window.innerWidth - 0.5) * 0.1;
    const targetY = (mouse.y / window.innerHeight - 0.5) * -0.1;
    groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[-2.2, 0.5, 0]}>
          <icosahedronGeometry args={[0.9, 1]} />
          <MeshDistortMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.2}
            roughness={0.2}
            metalness={0.8}
            distort={0.15}
            speed={2}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
        <mesh position={[2, -0.3, -0.5]}>
          <boxGeometry args={[1, 1, 1]} />
          <MeshDistortMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.15}
            roughness={0.3}
            metalness={0.7}
            distort={0.1}
            speed={1.5}
          />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[0, 1.2, -1]}>
          <torusKnotGeometry args={[0.6, 0.2, 64, 8]} />
          <MeshDistortMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.1}
            roughness={0.2}
            metalness={0.9}
            distort={0.05}
            speed={1}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[-1, -0.8, -1.5]} rotation={[0.5, 0.5, 0]}>
          <octahedronGeometry args={[0.7, 0]} />
          <MeshDistortMaterial
            color="#4f46e5"
            emissive="#4f46e5"
            emissiveIntensity={0.1}
            roughness={0.3}
            metalness={0.6}
            distort={0.08}
            speed={1.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

function ThreeScene({ mouse }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#6366f1" />
      <Suspense fallback={null}>
        <TechMeshes mouse={mouse} />
      </Suspense>
    </Canvas>
  );
}

export default function Hero3D() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <ParticleBackground mousePos={mouse} />

      {!isMobile && (
        <div className="absolute inset-0 md:left-1/2 md:w-1/2">
          <ThreeScene mouse={mouse} />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-sm tracking-[0.2em] uppercase text-text-secondary mb-4 font-mono">
              Full-Stack Developer
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">{personal.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-lg">
              {personal.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group relative px-8 py-3 rounded-full font-medium text-sm tracking-wide overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "0 0 30px rgba(99,102,241,0.5), 0 0 60px rgba(99,102,241,0.2)",
                }}
              />
              <span className="relative text-white font-semibold">Hire Me</span>
            </a>

            <a
              href="#projects"
              className="group relative px-8 py-3 rounded-full font-medium text-sm tracking-wide border border-white/10 text-text-secondary hover:text-white hover:border-primary/30 transition-all duration-300"
            >
              View Work
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex items-center gap-6 text-text-secondary"
          >
            {["Laravel", "React", "Flutter", "C++"].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono tracking-wider uppercase opacity-60"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
