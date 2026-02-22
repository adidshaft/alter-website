"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronRight, HeartHandshake, Shield, Sparkles, Network, Plus, BrainCircuit, Mic2, Search, ArrowRight, Lock } from 'lucide-react';
import React, { useRef } from 'react';
import Image from 'next/image';
import { ThemeToggle } from "@/components/theme-toggle";
import dynamic from 'next/dynamic';
import { AgentNetwork } from '@/components/agent-network';

const WaitlistForm = dynamic(() => import('@/components/waitlist-form').then(mod => mod.WaitlistForm), { ssr: false });

const agentLogs = [
  "Agent log 0xf2... found metabolic harmony @ 94%",
  "Dossier 0x81... analyzing aesthetic alignment",
  "Agent 004 negotiating boundaries on nightlife...",
  "Conflict resolution: Vibe mismatch on long-term intent",
  "Match secured: 98.4% alignment on core values",
  "Scouting global networks for Persona 0x22...",
];

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const scrollYSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(scrollYSpring, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYSpring, [0, 0.2], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <AgentNetwork />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background pointer-events-none"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] p-6 flex justify-between items-center bg-background/5 backdrop-blur-md border-b border-border">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-alter-purple blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Image
              src="/images/logo-dark.png"
              alt="Alter Logo"
              width={32}
              height={32}
              className="relative rounded-lg"
            />
          </div>
          <span className="font-bold text-xl tracking-tighter uppercase italic">Alter</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-tight text-foreground/60">
            <a href="#how" className="hover:text-foreground transition-colors">Protocol</a>
            <a href="#mockups" className="hover:text-foreground transition-colors">Interface</a>
            <a href="#faq" className="hover:text-foreground transition-colors">Safety</a>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <main className="relative z-10 pt-40 pb-20">

        {/* --- HERO SECTION --- */}
        <section className="container mx-auto px-6 text-center mb-64">
          <motion.div style={{ opacity, scale }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative mx-auto w-48 h-48 mb-16"
            >
              <div className="absolute inset-0 bg-alter-purple rounded-full blur-[100px] opacity-40 animate-pulse"></div>
              <div className="absolute inset-4 border border-alter-purple/20 rounded-full animate-orbit opacity-30"></div>
              <div className="absolute inset-8 border border-alter-purple/40 rounded-full animate-[orbit_40s_linear_infinite_reverse] opacity-20"></div>
              <div className="relative w-full h-full glass rounded-full flex items-center justify-center border border-white/10 overflow-hidden">
                <div className="w-24 h-24 bg-gradient-to-br from-alter-purple to-alter-lightpurple rounded-full blur-xl opacity-80"></div>
                <Sparkles className="absolute w-8 h-8 text-white animate-pulse" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
                Stop swiping. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-alter-purple to-alter-lightpurple">
                  Unleash your agent.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/40 max-w-2xl mx-auto font-medium leading-tight">
                Traditional dating is a waste of human potential. Alter builds your autonomous agent—a highly detailed digital dossier that scouts, vets, and negotiates for you 24/7.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12"
            >
              <WaitlistForm />
              <div className="flex items-center gap-2 px-6 py-4 glass rounded-[2rem] border border-white/5 text-sm font-semibold text-foreground/40">
                <Lock size={16} className="text-alter-purple" />
                iOS EXCLUSIVE • END-TO-END ENCRYPTED
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- PROTOCOL MARQUEE --- */}
        <div className="relative border-y border-white/5 py-8 mb-64 overflow-hidden bg-black/20 backdrop-blur-sm">
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {[...agentLogs, ...agentLogs, ...agentLogs].map((log, i) => (
              <div key={i} className="flex items-center gap-4 px-8 font-mono text-xs uppercase tracking-widest text-foreground/30">
                <span className="w-1.5 h-1.5 rounded-full bg-alter-purple animate-pulse"></span>
                {log}
              </div>
            ))}
          </div>
        </div>

        {/* --- NARRATIVE REDESIGN: THE SHIFT --- */}
        <section id="how" className="container mx-auto px-6 mb-64">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-alter-purple font-mono text-sm tracking-widest uppercase font-bold">The Protocol</span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none uppercase">
                  Dating apps are <br /> <span className="opacity-20 underline decoration-alter-purple underline-offset-8">broken for humans.</span>
                </h2>
                <p className="text-lg text-foreground/50 max-w-lg leading-relaxed">
                  The current model forces you to optimize for algorithms, not connection. You are reduced to an image. You are forced to perform.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-alter-purple/20 group-hover:scale-110 transition-transform">
                    <Mic2 className="text-alter-purple" size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold uppercase">1. High-Fidelity Training</h4>
                    <p className="text-foreground/40 text-sm max-w-sm">No forms. No prompts. Have a deep, fluid conversation with your agent. It learns your humor, your aesthetics, and your non-negotiables.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-alter-green/20 group-hover:scale-110 transition-transform">
                    <Search className="text-alter-green" size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold uppercase">2. Autonomous Scouting</h4>
                    <p className="text-foreground/40 text-sm max-w-sm">Your agent lives in the background, interacting with thousands of other agents across the network. It filters out mismatches before you ever see them.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-alter-amber/20 group-hover:scale-110 transition-transform">
                    <HeartHandshake className="text-alter-amber" size={20} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold uppercase">3. The Verified Harmony</h4>
                    <p className="text-foreground/40 text-sm max-w-sm">When two agents find profound alignment, they negotiate an introduction. Every night at 11:11, you wake up to a connection that actually matters.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-alter-purple/10 blur-[120px] rounded-full"></div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative glass rounded-[3rem] p-12 border border-white/5 shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8">
                  <Network className="text-alter-purple animate-pulse" />
                </div>
                <div className="space-y-8 font-mono">
                  <div className="flex items-center gap-4 text-xs text-foreground/40 tracking-widest border-b border-white/5 pb-4 uppercase">
                    <span>AGENT STATUS // ONLINE</span>
                    <span className="w-2 h-2 rounded-full bg-alter-green animate-pulse"></span>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm opacity-60">Scanned 14,291 signatures today.</p>
                    <div className="p-4 bg-alter-purple/5 border border-alter-purple/10 rounded-xl space-y-2">
                      <p className="text-xs text-alter-purple uppercase font-bold">Potential Alignment Detected</p>
                      <p className="text-lg font-bold">Match ID: #FF882</p>
                      <p className="text-xs text-foreground/40 leading-relaxed uppercase">High metabolic resonance. Commonality found in minimalism, stoicism, and shared city aesthetics.</p>
                    </div>
                    <div className="flex justify-between items-center pt-8">
                      <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full bg-alter-purple border-2 border-background"></div>
                        <div className="w-10 h-10 rounded-full bg-alter-green border-2 border-background flex items-center justify-center text-[10px] font-bold">0xAF</div>
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase">Negotiation active...</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- BENTO SHOWCASE --- */}
        <section id="mockups" className="container mx-auto px-6 mb-64">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">The Living Interface</h2>
            <p className="text-xl text-foreground/40 max-w-2xl mx-auto italic uppercase tracking-widest font-mono font-bold">A peek into the autonomous ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Main Feature */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-2 md:row-span-2 glass rounded-[3rem] p-12 relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-alter-purple/10 blur-[100px] -z-10 group-hover:bg-alter-purple/20 transition-colors"></div>
              <div className="space-y-8 uppercase">
                <Sparkles size={48} className="text-alter-purple" />
                <h3 className="text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter">Hyper-Individual <br /> Personas</h3>
                <p className="text-foreground/40 text-lg max-w-sm">We don't use profiles. We use personas—dynamic, high-dimensional models that reflect the nuances of your human experience.</p>
              </div>
              <div className="pt-20">
                <Image
                  src="/images/mockups/energy-orb.png"
                  alt="Energy Orb"
                  width={300}
                  height={600}
                  className="mx-auto rounded-[3rem] shadow-2xl relative z-10 animate-float"
                />
              </div>
            </motion.div>

            {/* Scouting */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-2 glass rounded-[3rem] p-8 border border-white/5 relative overflow-hidden group"
            >
              <div className="flex gap-8 items-center h-full">
                <div className="flex-1 space-y-4 uppercase">
                  <h4 className="text-2xl font-black tracking-tighter">Invisible Scouting</h4>
                  <p className="text-foreground/40 text-sm">Your agent works in the shadows, filtering 99% of noise before you ever feel it.</p>
                </div>
                <div className="relative w-40">
                  <Image
                    src="/images/mockups/agent-log.png"
                    alt="Agent Log"
                    width={180}
                    height={360}
                    className="rounded-3xl shadow-xl transform rotate-6 scale-110"
                  />
                </div>
              </div>
            </motion.div>

            {/* Harmony */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-2 glass rounded-[3rem] p-8 border border-white/5 relative overflow-hidden group bg-alter-purple/5"
            >
              <div className="flex gap-8 items-center h-full flex-row-reverse">
                <div className="flex-1 space-y-4 uppercase">
                  <h4 className="text-2xl font-black tracking-tighter">Verified Harmony</h4>
                  <p className="text-foreground/40 text-sm">The reveal happens at 11:11 PM. Pure synchronization, explained by agent reasoning.</p>
                </div>
                <div className="relative w-40">
                  <Image
                    src="/images/mockups/match-reveal.png"
                    alt="Match Reveal"
                    width={180}
                    height={360}
                    className="rounded-3xl shadow-xl transform -rotate-6 scale-110"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section id="faq" className="container mx-auto px-6 mb-64 max-w-4xl">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-center">Protocol FAQ</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is it end-to-end encrypted?",
                  a: "Yes. Your personal training data and dossier never leave the secure enclave of the network. Agents only share semantic signatures, never your raw identity."
                },
                {
                  q: "Why 11:11 PM?",
                  a: "Connection is spiritual. We've synchronized the network reveal to a single moment each day to foster intent and focus on the individual, not the volume."
                },
                {
                  q: "Can my Agent find co-founders?",
                  a: "Alter's protocol is purely about human connection. While we are currently optimized for matchmaking, the next phase will introduce professional and social expansion."
                }
              ].map((item, i) => (
                <details key={i} className="group glass rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-300">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-bold text-lg uppercase tracking-tight hover:bg-white/5 transition-colors">
                    {item.q}
                    <Plus className="w-5 h-5 text-alter-purple group-open:rotate-45 transition-transform" />
                  </summary>
                  <div className="px-8 pb-8 text-foreground/40 leading-relaxed font-medium">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* --- FINAL CALL --- */}
        <section className="container mx-auto px-6 text-center">
          <div className="glass rounded-[4rem] p-24 border border-alter-purple/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-alter-purple/10 to-transparent -z-10"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                Dossier 0x01 <br /> <span className="text-alter-purple">is waiting.</span>
              </h2>
              <p className="text-xl text-foreground/40 max-w-2xl mx-auto uppercase tracking-widest font-mono">
                The ecosystem is growing. Secure your agent now.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
                <WaitlistForm />
                <div className="flex items-center gap-2 text-foreground/30 text-xs font-mono tracking-widest uppercase">
                  AVAILABLE FOR IOS SOON
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 py-12 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono tracking-[0.2em] text-foreground/20 uppercase">
        <div className="flex gap-12">
          <span>ALTER PROTOCOL © 2026</span>
          <span>IOS EXCLUSIVE</span>
        </div>
        <div className="flex gap-12">
          <a href="#" className="hover:text-alter-purple transition-colors">Privacy</a>
          <a href="#" className="hover:text-alter-purple transition-colors">Safety</a>
          <a href="#" className="hover:text-alter-purple transition-colors">Network</a>
        </div>
      </footer>
    </div>
  );
}
