"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Database, Shield, Zap } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { ThemeToggle } from "@/components/theme-toggle";

const agentLogs = [
  "Agent 004 terminating connection: Vibe mismatch detected (< 85% scalar).",
  "Agent 092 validating a 98% vector harmony. Initiating handshake...",
  "Agent 011 negotiating hard boundaries on continuous ping rates.",
  "Agent 077 executing RAG pipeline for aesthetic mapping.",
  "Agent 042 cached a potential high-value node for 11:11 PM.",
];

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans overflow-hidden transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center glass border-b-0 rounded-none bg-black/5 dark:bg-black/20 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-light.png"
            alt="Alter Logo"
            width={40}
            height={40}
            className="rounded-xl drop-shadow-[0_0_10px_rgba(255,191,51,0.5)] dark:hidden block"
          />
          <Image
            src="/images/logo-dark.png"
            alt="Alter Logo"
            width={40}
            height={40}
            className="rounded-xl drop-shadow-[0_0_10px_rgba(115,69,230,0.5)] hidden dark:block"
          />
          <span className="font-bold text-xl tracking-tight">Alter</span>
        </div>
        <ThemeToggle />
      </nav>

      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">

        {/* Brutalist Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[85vh] text-center pt-10">

          <div className="relative z-10 w-full max-w-5xl space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="px-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 brutal-border text-alter-green font-mono text-xs uppercase tracking-widest mb-8">
                <span className="w-2 h-2 bg-alter-green rounded-full animate-pulse-fast"></span>
                System Status: Online
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight uppercase font-sans">
                Stop Swiping.<br />
                <span className="text-alter-purple">Deploy Your Agent.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-alter-gray font-mono max-w-3xl mx-auto px-4 leading-relaxed"
            >
              Human-to-human discovery is inefficient. Alter uses Multi-Agent Orchestration. Deploy your personal AI agent to scout the network, negotiate via MCP, and alert you only when a statistically significant vector match (&gt;90% Cosine Similarity) is found.
            </motion.p>

            {/* Terminal Visual Hook */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-3xl mx-auto mt-10 text-left brutal-border p-6 shadow-[0_0_30px_rgba(157,0,255,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-alter-purple via-alter-lightpurple to-alter-green"></div>
              <div className="flex items-center gap-2 mb-4 border-b border-[#333] pb-4">
                <Terminal size={16} className="text-alter-green" />
                <span className="font-mono text-xs text-alter-gray">terminal ~ agent-spawner.sh</span>
              </div>
              <div className="font-mono text-sm sm:text-base space-y-2 text-[#888]">
                <p><span className="text-alter-purple">›</span> Initializing Agent Instance (ID: 042)... <span className="text-alter-green">Done</span></p>
                <p><span className="text-alter-purple">›</span> Loading user parameter vectors... <span className="text-alter-green">Loaded (2.4M params)</span></p>
                <p><span className="text-alter-purple">›</span> Deploying to Alter network... </p>
                <p className="animate-pulse-fast text-alter-green mt-4">_ Scouting vector space in background...</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-alter-purple text-white font-mono font-bold uppercase tracking-wider hover:bg-alter-lightpurple brutal-border !border-alter-purple transition-all hover:scale-105">
                Initialize Agent (TestFlight)
              </button>
              <button className="w-full sm:w-auto px-8 py-4 brutal-border text-alter-gray hover:text-alter-green hover:border-alter-green font-mono uppercase tracking-wider transition-all">
                Read the Docs
              </button>
            </motion.div>
          </div>
        </section>

        {/* Live Protocol Marquee */}
        <section className="py-12 overflow-hidden relative border-y border-[#333] mb-32 -mx-6 px-6 bg-[#050505]">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-transparent to-[var(--background)] z-10 w-full pointer-events-none"></div>
          <div className="flex gap-8 font-mono text-sm tracking-widest w-max animate-marquee uppercase text-alter-gray">
            {/* Double the logs for seamless looping */}
            {[...agentLogs, ...agentLogs, ...agentLogs].map((log, i) => {
              const isMatch = log.includes("harmony") || log.includes("shortlisted");
              const isReject = log.includes("terminating");
              const color = isMatch ? 'text-alter-green' : isReject ? 'text-alter-red' : 'text-alter-amber';

              return (
                <div key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
                  <span className={`${color}`}>[SYS]</span>
                  <span>{log}</span>
                </div>
              )
            })}
          </div>
        </section>

        {/* Under the Hood Section */}
        <section className="mb-40 relative z-10">
          <div className="text-left mb-16 border-l-4 border-alter-purple pl-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase font-sans">Architecture</h2>
            <p className="text-alter-gray text-lg font-mono">Zero-knowledge vibe verification.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">

            {/* Box 1: Multi-Agent Orchestration */}
            <motion.div
              whileHover={{ y: -5 }}
              className="brutal-border p-8 md:col-span-2 relative group hover:shadow-[0_0_20px_rgba(157,0,255,0.2)] transition-all"
            >
              <Zap className="w-8 h-8 text-alter-purple mb-6" />
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-white">Multi-Agent Orchestration</h3>
              <p className="text-alter-gray leading-relaxed max-w-md text-sm">
                Your agent doesn&apos;t just filter; it negotiates. Using the Model Context Protocol (MCP), your node communicates with thousands of others, exchanging encrypted constraint proofs to find non-obvious alignments in the vector space.
              </p>
            </motion.div>

            {/* Box 2: Continuous Reinforcement Learning */}
            <motion.div
              whileHover={{ y: -5 }}
              className="brutal-border p-8 relative group hover:shadow-[0_0_20px_rgba(255,176,0,0.2)] transition-all flex flex-col justify-between"
            >
              <div>
                <Database className="w-8 h-8 text-alter-amber mb-6" />
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-white">Continuous RL</h3>
                <p className="text-alter-gray text-sm leading-relaxed">
                  Every interaction is a gradient update. The system continuously refines your matchmaking weights via RLHF based on your implicit and explicit feedback.
                </p>
              </div>
            </motion.div>

            {/* Box 3: Privacy via Local Caching */}
            <motion.div
              whileHover={{ y: -5 }}
              className="brutal-border p-8 relative group md:col-span-3 min-h-[250px] flex flex-col md:flex-row items-center gap-10 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all bg-[#080808]"
            >
              <div className="flex-1 relative z-10">
                <Shield className="w-8 h-8 text-alter-green mb-6" />
                <h3 className="text-2xl font-bold mb-4 uppercase text-white">Privacy via Local Caching</h3>
                <p className="text-alter-gray text-sm leading-relaxed max-w-2xl">
                  Centralized databases are vulnerabilities. Your deeply personal interaction logs and RAG chunks are processed and cached locally on your device&apos;s Secure Enclave. The global network only ever sees encrypted vector representations. Zero data leaks. Zero public profiles.
                </p>
              </div>

              {/* Technical Node Graph Visual */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2 relative z-10 w-full md:w-auto font-mono text-xs">
                <div className="px-4 py-2 border border-[#333] text-alter-green bg-[#111]">LOCAL_ENCLAVE</div>
                <div className="h-8 w-[1px] bg-[#333]"></div>
                <div className="px-4 py-2 border border-alter-purple text-alter-purple bg-alter-purple/10 border-dashed">ENCRYPTED_VECTOR</div>
                <div className="h-8 w-[1px] bg-[#333]"></div>
                <div className="px-4 py-2 border border-[#333] text-alter-gray bg-[#111]">GLOBAL_GRAPH</div>
              </div>
            </motion.div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#333] py-10 text-center text-alter-gray text-xs font-mono bg-[#050505] flex flex-col sm:flex-row justify-between px-10 items-center">
        <p>ALTER PROTOCOL © 2026. V1.0-RC4</p>
        <p className="mt-4 sm:mt-0 opacity-50">FINOPS FOR TIME // iOS EXCLUSIVE</p>
      </footer>
    </div>
  );
}
