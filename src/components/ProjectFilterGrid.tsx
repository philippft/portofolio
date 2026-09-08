"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";

type CategoryFilter = "all" | "ai" | "web";

const gamelanFftBars = [
  { h: "35%", bg: "bg-signal-orange/60" },
  { h: "60%", bg: "bg-amber-500/80" },
  { h: "90%", bg: "bg-signal-orange" },
  { h: "75%", bg: "bg-amber-400" },
  { h: "45%", bg: "bg-signal-orange/70" },
  { h: "85%", bg: "bg-primary dark:bg-stone-100" },
  { h: "100%", bg: "bg-signal-orange" },
  { h: "65%", bg: "bg-amber-500" },
  { h: "40%", bg: "bg-signal-orange/80" },
  { h: "25%", bg: "bg-stone-500 dark:bg-stone-600" },
  { h: "15%", bg: "bg-stone-600 dark:bg-stone-700" },
];

export function ProjectFilterGrid() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex p-1 sm:p-1.5 rounded-full bg-surface/90 dark:bg-stone-900/90 border border-outline-variant/60 dark:border-stone-800 gap-1 shadow-sm overflow-x-auto max-w-full">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full font-sans text-[12px] sm:text-[13px] whitespace-nowrap transition-all ${
              filter === "all"
                ? "bg-primary text-canvas font-semibold shadow-sm"
                : "text-on-surface-variant dark:text-stone-400 font-medium hover:text-primary dark:hover:text-stone-100"
            }`}
          >
            All (7)
          </button>
          <button
            type="button"
            onClick={() => setFilter("ai")}
            className={`px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full font-sans text-[12px] sm:text-[13px] whitespace-nowrap transition-all ${
              filter === "ai"
                ? "bg-primary text-canvas font-semibold shadow-sm"
                : "text-on-surface-variant dark:text-stone-400 font-medium hover:text-primary dark:hover:text-stone-100"
            }`}
          >
            AI / ML (5)
          </button>
          <button
            type="button"
            onClick={() => setFilter("web")}
            className={`px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full font-sans text-[12px] sm:text-[13px] whitespace-nowrap transition-all ${
              filter === "web"
                ? "bg-primary text-canvas font-semibold shadow-sm"
                : "text-on-surface-variant dark:text-stone-400 font-medium hover:text-primary dark:hover:text-stone-100"
            }`}
          >
            Web Systems (2)
          </button>
        </div>

        <div className="font-mono text-[11px] text-on-surface-variant dark:text-stone-500 uppercase tracking-wider hidden sm:inline">
          BENCHMARK REPRODUCIBILITY 100%
        </div>
      </div>

      {/* CLUSTER 01: AI & DATA SCIENCE */}
      {(filter === "all" || filter === "ai") && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-signal-orange shrink-0" />
              <span className="font-mono text-[11px] tracking-widest uppercase text-primary dark:text-stone-300 font-semibold">
                CLUSTER 01 // MACHINE INTELLIGENCE &amp; EMPIRICAL SYSTEMS
              </span>
            </div>
            <span className="font-mono text-[11px] text-on-surface-variant dark:text-stone-500 uppercase tracking-wider">
              5 Canonical Deployments
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 1: Waste Image Classification (Wide 8-Col) */}
            <div className="md:col-span-12 lg:col-span-8">
              <ScrollReveal delay={0.05} yOffset={30}>
                <article className="project-card bg-surface/90 dark:bg-stone-900/60 border border-outline-variant/60 dark:border-stone-800/90 rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 md:p-9 shadow-[0px_24px_48px_rgba(0,0,0,0.04)] dark:shadow-[0px_24px_48px_rgba(0,0,0,0.3)] flex flex-col justify-between group backdrop-blur-sm transition-all h-full">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas dark:bg-stone-950/80 border border-outline-variant/60 dark:border-stone-800 font-mono text-[11px] text-primary dark:text-stone-200">
                        <span className="w-2 h-2 rounded-full bg-signal-orange animate-pulse" />
                        <span>Inference 24ms (TensorRT)</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[11px] text-on-surface-variant dark:text-stone-400">
                        <span>EXP_ID: #ML-2024-WST</span>
                        <span className="w-8 h-8 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 flex items-center justify-center text-primary dark:text-stone-200 group-hover:bg-primary group-hover:text-canvas transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* ROC-PR Telemetry Visual */}
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-canvas/80 dark:bg-[#121110] border border-outline-variant/60 dark:border-stone-800/80 mb-6 overflow-hidden">
                      <div className="flex flex-col xs:flex-row justify-between xs:items-center gap-1 mb-2 font-mono text-[11px] text-on-surface-variant dark:text-stone-400">
                        <span>ROC-PR TELEMETRY // MULTI-CLASS EQUILIBRIUM</span>
                        <span className="text-signal-orange font-medium">Top-1 Accuracy: 98.1%</span>
                      </div>
                      <svg className="w-full h-20 sm:h-24 overflow-visible" fill="none" viewBox="0 0 600 90">
                        <line className="text-outline-variant/40 dark:text-stone-800" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="600" y1="20" y2="20" />
                        <line className="text-outline-variant/40 dark:text-stone-800" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="600" y1="50" y2="50" />
                        <line className="text-outline-variant/40 dark:text-stone-800" stroke="currentColor" strokeDasharray="3 3" x1="0" x2="600" y1="80" y2="80" />
                        
                        {/* Secondary Dashed Baseline */}
                        <motion.path
                          className="text-stone-400 dark:text-stone-600"
                          d="M0,80 C100,75 220,40 320,38 C420,35 520,28 600,24"
                          stroke="currentColor"
                          strokeDasharray="4 2"
                          strokeWidth="1.5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        />

                        {/* Animated Primary ROC Curve */}
                        <motion.path
                          className="text-signal-orange"
                          d="M0,80 C120,78 180,25 280,22 C380,18 480,15 600,10"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                        />

                        {/* Pulsing Midpoint Dot */}
                        <motion.circle
                          className="fill-signal-orange"
                          cx="280"
                          cy="22"
                          r="4.5"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 }}
                        />
                        <motion.circle
                          cx="280"
                          cy="22"
                          className="stroke-signal-orange fill-none"
                          strokeWidth="1.5"
                          animate={{ r: [4.5, 11, 4.5], opacity: [0.7, 0, 0.7] }}
                          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                        />

                        {/* Pulsing Endpoint Dot */}
                        <motion.circle
                          className="fill-primary dark:fill-stone-100"
                          cx="600"
                          cy="10"
                          r="4.5"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.5 }}
                        />
                        <motion.circle
                          cx="600"
                          cy="10"
                          className="stroke-primary dark:stroke-stone-100 fill-none"
                          strokeWidth="1.5"
                          animate={{ r: [4.5, 10, 4.5], opacity: [0.6, 0, 0.6] }}
                          transition={{ repeat: Infinity, duration: 2.2, delay: 0.5, ease: "easeInOut" }}
                        />
                      </svg>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 pt-2 border-t border-outline-variant/40 dark:border-stone-800/60 font-mono text-[11px] text-on-surface-variant dark:text-stone-400">
                        <div>Recyclable: <strong className="text-primary dark:text-stone-200">99.2%</strong></div>
                        <div>Organic: <strong className="text-primary dark:text-stone-200">96.8%</strong></div>
                        <div>Hazardous: <strong className="text-primary dark:text-stone-200">95.4%</strong></div>
                        <div>Residual: <strong className="text-primary dark:text-stone-200">97.3%</strong></div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[48px] sm:text-[56px] font-bold tracking-tight text-primary dark:text-stone-50 leading-none">0.972</span>
                        <span className="font-mono text-[13px] text-signal-orange uppercase font-semibold bg-surface-container dark:bg-stone-950 px-2 py-0.5 rounded border border-signal-orange/30">Macro F1</span>
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant dark:text-stone-400 block mt-2">
                        PEAK VALIDATION MACRO F1-SCORE
                      </span>
                    </div>

                    <h2 className="font-serif text-[26px] sm:text-[28px] text-primary dark:text-stone-100 mb-2 font-medium tracking-tight">
                      Waste Image Classification &amp; Edge Deduplication
                    </h2>
                    <p className="font-sans text-[15px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450]">
                      Automated computer vision pipeline classifying recyclables with sub-30ms edge inference latency, perceptual hashing deduplication, and automated data augmentation for continuous drift adaptation.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-outline-variant/40 dark:border-stone-800/60">
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">EfficientNetB3</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">MD5 &amp; pHash</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">PyTorch Edge</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">TensorRT</span>
                  </div>
                </article>
              </ScrollReveal>
            </div>

            {/* Card 2: Traditional Balinese Gamelan (Tall 4-Col) */}
            <div className="md:col-span-12 lg:col-span-4">
              <ScrollReveal delay={0.1} yOffset={30}>
                <article className="project-card bg-surface/90 dark:bg-stone-900/60 border border-outline-variant/60 dark:border-stone-800/90 rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 md:p-9 shadow-[0px_24px_48px_rgba(0,0,0,0.04)] dark:shadow-[0px_24px_48px_rgba(0,0,0,0.3)] flex flex-col justify-between group backdrop-blur-sm transition-all h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-[12px] text-signal-orange font-semibold">ACOUSTICS // DSP</span>
                      <span className="w-8 h-8 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 flex items-center justify-center text-primary dark:text-stone-200 group-hover:bg-primary group-hover:text-canvas transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Acoustic FFT Spectrogram Bars Visual */}
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-canvas/80 dark:bg-[#121110] border border-outline-variant/60 dark:border-stone-800/80 mb-6">
                      <div className="font-mono text-[11px] text-on-surface-variant dark:text-stone-400 mb-3">FFT SPECTRAL COEFFICIENTS (20Hz - 22kHz)</div>
                      <div className="flex items-end gap-1.5 h-20 w-full">
                        {gamelanFftBars.map((bar, idx) => (
                          <motion.div
                            key={idx}
                            className={`w-full rounded-t ${bar.bg}`}
                            style={{ height: bar.h, transformOrigin: "bottom" }}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.6,
                              delay: idx * 0.04,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between font-mono text-[10px] text-on-surface-variant dark:text-stone-400 mt-2.5">
                        <span>Pelog Pentatonic</span>
                        <span>MFCC n_fft=2048</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-[36px] xs:text-[44px] sm:text-[56px] font-bold tracking-tight text-signal-orange leading-none">96%</span>
                        <span className="font-mono text-[13px] text-on-surface-variant dark:text-stone-400 uppercase font-semibold">Accuracy</span>
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant dark:text-stone-400 block mt-2">
                        AUDIO CLASSIFICATION ACCURACY
                      </span>
                    </div>

                    <h2 className="font-serif text-[22px] sm:text-[26px] text-primary dark:text-stone-100 mb-2 font-medium tracking-tight">
                      Balinese Gamelan Preservation
                    </h2>
                    <p className="font-sans text-[15px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450]">
                      Acoustic waveform and spectral feature pipeline for regional cultural instrument preservation using short-time Fourier transforms and ensemble classifiers.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-outline-variant/40 dark:border-stone-800/60">
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">MFCC + STFT</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">SVM</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">LSTM</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">Scikit-Learn</span>
                  </div>
                </article>
              </ScrollReveal>
            </div>

            {/* Card 3: PsychoLens AI (6-Col) */}
            <div className="md:col-span-12 lg:col-span-6">
              <ScrollReveal delay={0.15} yOffset={30}>
                <article className="project-card bg-surface/90 dark:bg-stone-900/60 border border-outline-variant/60 dark:border-stone-800/90 rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 md:p-9 shadow-[0px_24px_48px_rgba(0,0,0,0.04)] dark:shadow-[0px_24px_48px_rgba(0,0,0,0.3)] flex flex-col justify-between group backdrop-blur-sm transition-all h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas dark:bg-stone-950/80 border border-outline-variant/60 dark:border-stone-800 font-mono text-[11px] text-primary dark:text-stone-200">
                        <span className="w-2 h-2 rounded-full bg-signal-orange" />
                        <span>Affective NLP</span>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 flex items-center justify-center text-primary dark:text-stone-200 group-hover:bg-primary group-hover:text-canvas transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Attention Matrix Visual */}
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-canvas/80 dark:bg-[#121110] border border-outline-variant/60 dark:border-stone-800/80 mb-6">
                      <div className="flex justify-between font-mono text-[11px] text-on-surface-variant dark:text-stone-400 mb-2.5">
                        <span>LATENT ATTENTION MATRIX</span>
                        <span className="text-primary dark:text-stone-200 font-semibold">Dim: 768</span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs font-mono text-on-surface-variant dark:text-stone-400 mb-1">
                            <span>Valence Discrepancy</span>
                            <span className="text-primary dark:text-stone-200">0.84</span>
                          </div>
                          <div className="w-full h-2.5 bg-surface-container dark:bg-stone-950 rounded-full overflow-hidden border border-outline-variant/40 dark:border-stone-800">
                            <motion.div
                              className="h-full bg-primary dark:bg-stone-200 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: "84%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs font-mono text-on-surface-variant dark:text-stone-400 mb-1">
                            <span>Arousal Index</span>
                            <span className="text-signal-orange">0.71</span>
                          </div>
                          <div className="w-full h-2.5 bg-surface-container dark:bg-stone-950 rounded-full overflow-hidden border border-outline-variant/40 dark:border-stone-800">
                            <motion.div
                              className="h-full bg-signal-orange rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: "71%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-[36px] xs:text-[44px] sm:text-[56px] font-bold tracking-tight text-primary dark:text-stone-50 leading-none">8-Class</span>
                        <span className="font-mono text-[13px] text-signal-orange font-medium uppercase">Affective Depth</span>
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant dark:text-stone-400 block mt-2">
                        EMOTIONAL LATENT PSYCHOLOGY
                      </span>
                    </div>

                    <h2 className="font-serif text-[22px] sm:text-[26px] text-primary dark:text-stone-100 mb-2 font-medium tracking-tight">
                      PsychoLens AI Affective Discourse System
                    </h2>
                    <p className="font-sans text-[15px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450]">
                      Transformer-based affective computing pipeline processing nuanced conversational nuances and sentiment vectors with fine-tuned contextual representations.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-outline-variant/40 dark:border-stone-800/60">
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">IndoBERT</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">HuggingFace</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">PyTorch</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">Attention Heads</span>
                  </div>
                </article>
              </ScrollReveal>
            </div>

            {/* Card 4: SME Success Prediction (6-Col) */}
            <div className="md:col-span-12 lg:col-span-6">
              <ScrollReveal delay={0.2} yOffset={30}>
                <article className="project-card bg-surface/90 dark:bg-stone-900/60 border border-outline-variant/60 dark:border-stone-800/90 rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 md:p-9 shadow-[0px_24px_48px_rgba(0,0,0,0.04)] dark:shadow-[0px_24px_48px_rgba(0,0,0,0.3)] flex flex-col justify-between group backdrop-blur-sm transition-all h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas dark:bg-stone-950/80 border border-outline-variant/60 dark:border-stone-800 font-mono text-[11px] text-primary dark:text-stone-200">
                        <span className="w-2 h-2 rounded-full bg-signal-orange" />
                        <span>Synthetic Balancing</span>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 flex items-center justify-center text-primary dark:text-stone-200 group-hover:bg-primary group-hover:text-canvas transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Resampling Vector Visual */}
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-canvas/80 dark:bg-[#121110] border border-outline-variant/60 dark:border-stone-800/80 mb-6">
                      <div className="flex justify-between font-mono text-[11px] text-on-surface-variant dark:text-stone-400 mb-2">
                        <span>RESAMPLING CONVERGENCE</span>
                        <span className="text-signal-orange font-semibold">SMOTE-ENN</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-2.5 sm:p-3 rounded-xl bg-surface-container dark:bg-stone-950/90 border border-outline-variant/40 dark:border-stone-800/80 text-center">
                          <span className="font-mono text-[11px] text-on-surface-variant dark:text-stone-400 block mb-1">Baseline Imbalance</span>
                          <span className="font-mono text-lg sm:text-xl font-bold text-on-surface-variant dark:text-stone-500">1 : 14.8</span>
                        </div>
                        <div className="p-2.5 sm:p-3 rounded-xl bg-surface-container dark:bg-stone-950/90 border border-signal-orange/30 text-center">
                          <span className="font-mono text-[11px] text-signal-orange block mb-1">Post SMOTE-ENN</span>
                          <span className="font-mono text-lg sm:text-xl font-bold text-signal-orange">1 : 1.02</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-[36px] xs:text-[44px] sm:text-[56px] font-bold tracking-tight text-primary dark:text-stone-50 leading-none">+18.4%</span>
                        <span className="font-mono text-[13px] text-signal-orange font-medium uppercase">Recall Delta</span>
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant dark:text-stone-400 block mt-2">
                        RECALL IMPROVEMENT VIA HYBRID RESAMPLING
                      </span>
                    </div>

                    <h2 className="font-serif text-[22px] sm:text-[26px] text-primary dark:text-stone-100 mb-2 font-medium tracking-tight">
                      SME Business Viability Forecaster
                    </h2>
                    <p className="font-sans text-[15px] text-on-surface-variant dark:text-stone-400 leading-relaxed font-[450]">
                      Mitigating severe micro-enterprise insolvency skew through hybrid synthetic over-sampling and edited nearest neighbors with boosted decision forests.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-outline-variant/40 dark:border-stone-800/60">
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">AdaBoost</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">Random Forest</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">SMOTE-ENN</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">Pandas</span>
                  </div>
                </article>
              </ScrollReveal>
            </div>

            {/* Card 5: Water Level Time Series (12-Col Landscape) */}
            <div className="md:col-span-12">
              <ScrollReveal delay={0.25} yOffset={30}>
                <article className="project-card bg-surface/90 dark:bg-stone-900/60 border border-outline-variant/60 dark:border-stone-800/90 rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 md:p-9 shadow-[0px_24px_48px_rgba(0,0,0,0.04)] dark:shadow-[0px_24px_48px_rgba(0,0,0,0.3)] flex flex-col justify-between group backdrop-blur-sm transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    <div className="lg:col-span-7">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas dark:bg-stone-950/80 border border-outline-variant/60 dark:border-stone-800 font-mono text-[11px] text-primary dark:text-stone-200">
                          <span className="w-2 h-2 rounded-full bg-signal-orange" />
                          <span>Multi-Step Horizon Forecaster</span>
                        </span>
                        <span className="font-mono text-[11px] text-on-surface-variant dark:text-stone-400">SERIES #TS-HYDRO-99</span>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-[36px] xs:text-[44px] sm:text-[56px] font-bold tracking-tight text-primary dark:text-stone-50 leading-none">0.041</span>
                          <span className="font-mono text-[13px] text-signal-orange font-medium uppercase bg-surface-container dark:bg-stone-950 px-2 py-0.5 rounded border border-signal-orange/30">MSE HORIZON</span>
                        </div>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant dark:text-stone-400 block mt-2">
                          TIME SERIES PREDICTIVE WINDOW CONVERGENCE
                        </span>
                      </div>

                      <h2 className="font-serif text-[22px] sm:text-[26px] md:text-[30px] text-primary dark:text-stone-100 mb-2 font-medium tracking-tight">
                        Hydrological Wave &amp; Discharge Rate Forecasting
                      </h2>
                      <p className="font-sans text-[15px] text-on-surface-variant dark:text-stone-400 max-w-xl leading-relaxed font-[450]">
                        Robust hydrodynamic telemetry modeling integrating autoregressive lag intervals, dynamic moving variance buffers, and seasonal trend decomposition for environmental flood risk prevention.
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">SARIMA</span>
                        <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">LightGBM</span>
                        <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">Rolling Variance</span>
                        <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">SciPy Stats</span>
                      </div>
                    </div>

                    {/* Sparkline Waveform Visual */}
                    <div className="lg:col-span-5 p-3.5 sm:p-4.5 rounded-xl sm:rounded-2xl bg-canvas/80 dark:bg-[#121110] border border-outline-variant/60 dark:border-stone-800/80 overflow-hidden">
                      <div className="flex justify-between font-mono text-[11px] text-on-surface-variant dark:text-stone-400 mb-2">
                        <span>PREDICTION CONFIDENCE BAND (95% CI)</span>
                        <span className="text-signal-orange font-medium">12-Step Ahead</span>
                      </div>
                      <svg className="w-full h-28 sm:h-32 overflow-visible" fill="none" viewBox="0 0 400 120">
                        {/* Shaded Confidence Polygon */}
                        <motion.polygon
                          className="fill-signal-orange/15"
                          points="0,70 60,65 120,50 180,60 240,40 300,30 360,20 400,10 400,60 360,70 300,80 240,90 180,100 120,95 60,105 0,110"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />

                        {/* Baseline Historical Wave Path */}
                        <motion.path
                          className="text-stone-400 dark:text-stone-600"
                          d="M0,90 Q60,85 120,70 T240,65 T360,40 L400,35"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="2"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        />

                        {/* Projected Prediction Horizon Path */}
                        <motion.path
                          className="text-signal-orange"
                          d="M240,65 Q300,55 360,35 L400,25"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        />

                        {/* Pulsing Confidence Horizon Tip Glow */}
                        <motion.circle
                          className="fill-signal-orange"
                          cx="400"
                          cy="25"
                          r="5"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.2, type: "spring" }}
                        />
                        <motion.circle
                          cx="400"
                          cy="25"
                          className="stroke-signal-orange fill-none"
                          strokeWidth="1.5"
                          animate={{ r: [5, 12, 5], opacity: [0.8, 0, 0.8] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        />
                      </svg>
                      <div className="flex justify-between font-mono text-[11px] text-on-surface-variant dark:text-stone-400 mt-2 border-t border-outline-variant/40 dark:border-stone-800/60 pt-2">
                        <span>T-0: Real-time Ingestion</span>
                        <span className="text-primary dark:text-stone-200 font-semibold">T+12h Horizon Output</span>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* CLUSTER 02: FULL-STACK WEB SYSTEMS */}
      {(filter === "all" || filter === "web") && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary dark:bg-stone-200 shrink-0" />
              <span className="font-mono text-[11px] tracking-widest uppercase text-primary dark:text-stone-300 font-semibold">
                CLUSTER 02 // FULL-STACK WEB SYSTEMS &amp; ENTERPRISE INTEGRATIONS
              </span>
            </div>
            <span className="font-mono text-[11px] text-on-surface-variant dark:text-stone-500 uppercase tracking-wider">
              2 Production Architectures
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card A: Orinimo Commerce Platform */}
            <ScrollReveal delay={0.05} yOffset={30}>
              <article className="project-card bg-surface/90 dark:bg-stone-900/60 border border-outline-variant/60 dark:border-stone-800/90 rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 md:p-9 shadow-[0px_24px_48px_rgba(0,0,0,0.04)] dark:shadow-[0px_24px_48px_rgba(0,0,0,0.3)] flex flex-col justify-between group backdrop-blur-sm transition-all h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[12px] text-signal-orange font-semibold">TRANSACTIONAL COMMERCE</span>
                    <span className="w-8 h-8 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 flex items-center justify-center text-primary dark:text-stone-200 group-hover:bg-primary group-hover:text-canvas transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas dark:bg-stone-950/80 border border-outline-variant/60 dark:border-stone-800 font-mono text-[11px] text-primary dark:text-stone-300 mb-4 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-orange shrink-0" />
                    <span className="truncate">Laravel MVC • Fonnte WhatsApp OTP • Token Auth</span>
                  </div>

                  <h2 className="font-serif text-[22px] sm:text-[26px] text-primary dark:text-stone-100 mb-2 font-medium tracking-tight">
                    Orinimo Commerce Platform
                  </h2>
                  <p className="font-sans text-[15px] text-on-surface-variant dark:text-stone-400 mb-6 leading-relaxed font-[450]">
                    End-to-end multi-tier Laravel MVC e-commerce platform with automated WhatsApp verification dispatch, transactional order state machines, and relational schema optimization.
                  </p>

                  {/* Specification Spec Box */}
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-canvas/80 dark:bg-[#121110] border border-outline-variant/60 dark:border-stone-800/80 mb-4 font-mono text-[12px] space-y-2 text-on-surface-variant dark:text-stone-400">
                    <div className="flex justify-between border-b border-outline-variant/30 dark:border-stone-800/50 pb-1.5">
                      <span>State Machines</span>
                      <span className="text-primary dark:text-stone-200">Cart → Checkout → Dispatched</span>
                    </div>
                    <div className="flex justify-between border-b border-outline-variant/30 dark:border-stone-800/50 pb-1.5">
                      <span>OTP Gateway</span>
                      <span className="text-primary dark:text-stone-200">Fonnte Webhook Event-Driven</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Schema Normalization</span>
                      <span className="text-primary dark:text-stone-200">3NF Structured SQL</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-variant/40 dark:border-stone-800/60">
                  <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">Laravel 11</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">MySQL</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">RESTful API</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">TailwindCSS</span>
                </div>
              </article>
            </ScrollReveal>

            {/* Card B: Tempe Iris Logistics & ERP */}
            <ScrollReveal delay={0.1} yOffset={30}>
              <article className="project-card bg-surface/90 dark:bg-stone-900/60 border border-outline-variant/60 dark:border-stone-800/90 rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 md:p-9 shadow-[0px_24px_48px_rgba(0,0,0,0.04)] dark:shadow-[0px_24px_48px_rgba(0,0,0,0.3)] flex flex-col justify-between group backdrop-blur-sm transition-all h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[12px] text-signal-orange font-semibold">INSTITUTIONAL ERP</span>
                    <span className="w-8 h-8 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 flex items-center justify-center text-primary dark:text-stone-200 group-hover:bg-primary group-hover:text-canvas transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas dark:bg-stone-950/80 border border-outline-variant/60 dark:border-stone-800 font-mono text-[11px] text-primary dark:text-stone-300 mb-4 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-orange shrink-0" />
                    <span className="truncate">FMIPA Inventory System • Mailtrap • Dompdf</span>
                  </div>

                  <h2 className="font-serif text-[22px] sm:text-[26px] text-primary dark:text-stone-100 mb-2 font-medium tracking-tight">
                    Tempe Iris Logistics &amp; ERP
                  </h2>
                  <p className="font-sans text-[15px] text-on-surface-variant dark:text-stone-400 mb-6 leading-relaxed font-[450]">
                    FMIPA institutional laboratory logistics and asset system with event-triggered email reports, dynamic PDF generation, and granular role-based access control (RBAC).
                  </p>

                  {/* Specification Spec Box */}
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-canvas/80 dark:bg-[#121110] border border-outline-variant/60 dark:border-stone-800/80 mb-4 font-mono text-[12px] space-y-2 text-on-surface-variant dark:text-stone-400">
                    <div className="flex justify-between border-b border-outline-variant/30 dark:border-stone-800/50 pb-1.5">
                      <span>Audit Logging</span>
                      <span className="text-primary dark:text-stone-200">Immutable Ledger Events</span>
                    </div>
                    <div className="flex justify-between border-b border-outline-variant/30 dark:border-stone-800/50 pb-1.5">
                      <span>Document Rendering</span>
                      <span className="text-primary dark:text-stone-200">Dompdf Dynamic Stream</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Access Control</span>
                      <span className="text-primary dark:text-stone-200">Multi-Tenant Hierarchical RBAC</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-variant/40 dark:border-stone-800/60">
                  <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">PHP / Laravel</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">Mailtrap</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">Dompdf</span>
                  <span className="px-3 py-1 rounded-full bg-surface-container dark:bg-stone-800/80 border border-outline-variant/40 dark:border-stone-700/50 font-mono text-[11px] text-primary dark:text-stone-300">Alpine.js</span>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </section>
      )}
    </div>
  );
}
