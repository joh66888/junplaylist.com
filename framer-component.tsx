import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useState } from "react"
import { motion } from "framer-motion"
import { motion as motion3d } from "framer-motion-3d"

const playlist = [
    {
        title: "Got7 - Nanana",
        spotify: "https://open.spotify.com/embed/track/2tEMbypmvYhf84mzVbhxwZ",
        color: "#0c893e"
    },
    {
        title: "Stray Kids - S-Class",
        spotify: "https://open.spotify.com/embed/track/3gTQwwDNJ42CCLo3Sf4JDd",
        color: "#535353"
    },
    {
        title: "Enhypen - Polaroid Love",
        spotify: "https://open.spotify.com/embed/track/5elW2CKSoqjYoJ32AGDxf1",
        color: "#b80828"
    }
]

export default function JunPlaylist() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div style={{ width: "100%", height: "100%", background: "black" }}>
            <Canvas camera={{ position: [0, 0, 15], fov: 40 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                
                {playlist.map((track, index) => (
                    <motion3d.group
                        key={track.spotify}
                        position={[
                            Math.cos((index * 2 * Math.PI) / playlist.length) * 8,
                            0,
                            Math.sin((index * 2 * Math.PI) / playlist.length) * 8
                        ]}
                        rotation={[0, -(index * 2 * Math.PI) / playlist.length, 0]}
                        animate={{
                            scale: activeIndex === index ? 1.1 : 1,
                            transition: { duration: 0.3 }
                        }}
                        onClick={() => setActiveIndex(index)}
                    >
                        <Html transform>
                            <div
                                style={{
                                    width: "300px",
                                    height: "352px",
                                    backgroundColor: track.color,
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    transform: "translateX(-50%) translateY(-50%)"
                                }}
                            >
                                <iframe
                                    src={track.spotify}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    allow="encrypted-media; autoplay"
                                    style={{ border: "none" }}
                                />
                            </div>
                        </Html>
                    </motion3d.group>
                ))}
                
                <OrbitControls
                    enableZoom={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
            
            <motion.div
                style={{
                    position: "fixed",
                    top: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                    letterSpacing: "-0.04em"
                }}
            >
                Jun's Playlist
            </motion.div>
            
            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "20px"
                }}
            >
                <motion.button
                    style={{
                        background: "rgba(255, 255, 255, 0.2)",
                        border: "none",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "20px",
                        cursor: "pointer"
                    }}
                    whileHover={{ background: "rgba(255, 255, 255, 0.3)" }}
                    onClick={() => setActiveIndex((activeIndex - 1 + playlist.length) % playlist.length)}
                >
                    Previous
                </motion.button>
                <motion.button
                    style={{
                        background: "rgba(255, 255, 255, 0.2)",
                        border: "none",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "20px",
                        cursor: "pointer"
                    }}
                    whileHover={{ background: "rgba(255, 255, 255, 0.3)" }}
                    onClick={() => setActiveIndex((activeIndex + 1) % playlist.length)}
                >
                    Next
                </motion.button>
            </div>
        </div>
    )
}

function Html({ children, transform }) {
    return (
        <div
            style={{
                position: "absolute",
                transform: transform ? "translate3d(-50%, -50%, 0)" : "none",
                pointerEvents: "auto"
            }}
        >
            {children}
        </div>
    )
}
