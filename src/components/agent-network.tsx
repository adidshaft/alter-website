"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Node {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
}

export function AgentNetwork() {
    const [nodes, setNodes] = useState<Node[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const { clientWidth, clientHeight } = containerRef.current;

        const nodeCount = clientWidth < 768 ? 40 : 80;

        const initialNodes = Array.from({ length: nodeCount }).map((_, i) => ({
            id: i,
            x: Math.random() * clientWidth,
            y: Math.random() * clientHeight,
            vx: (Math.random() - 0.5) * 0.2, // Very slow drift
            vy: (Math.random() - 0.5) * 0.2,
            size: Math.random() * 2 + 1, // Tiny dots
        }));

        setNodes(initialNodes);
    }, []);

    const animate = () => {
        if (!containerRef.current) return;
        const { clientWidth, clientHeight } = containerRef.current;

        setNodes(prevNodes =>
            prevNodes.map(node => {
                let { x, y, vx, vy } = node;

                if (x <= 0 || x >= clientWidth) vx *= -1;
                if (y <= 0 || y >= clientHeight) vy *= -1;

                return {
                    ...node,
                    x: x + vx,
                    y: y + vy,
                    vx,
                    vy
                };
            })
        );

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current!);
    }, []);

    const getConnectionDistance = () => typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 120;

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20 dark:opacity-30">
            <svg className="absolute inset-0 w-full h-full">
                {nodes.map((node, i) =>
                    nodes.slice(i + 1).map(otherNode => {
                        const dx = node.x - otherNode.x;
                        const dy = node.y - otherNode.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        const maxDistance = getConnectionDistance();

                        if (distance < maxDistance) {
                            const opacity = (1 - (distance / maxDistance)) * 0.5;
                            return (
                                <line
                                    key={`${node.id}-${otherNode.id}`}
                                    x1={node.x} y1={node.y}
                                    x2={otherNode.x} y2={otherNode.y}
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    className="text-alter-purple/20 dark:text-alter-purple/40"
                                    opacity={opacity}
                                />
                            );
                        }
                        return null;
                    })
                )}
            </svg>

            {nodes.map(node => (
                <div
                    key={node.id}
                    className="absolute rounded-full bg-alter-purple/40 dark:bg-alter-purple/60 shadow-[0_0_10px_rgba(124,58,237,0.3)]"
                    style={{
                        left: node.x,
                        top: node.y,
                        width: node.size,
                        height: node.size,
                        marginLeft: -node.size / 2,
                        marginTop: -node.size / 2,
                    }}
                />
            ))}
        </div>
    );
}
