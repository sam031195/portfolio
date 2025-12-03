---
title: "Research"
layout: archive
permalink: /research/
entries_layout: list # Display research in a vertical list
---

## Key Research Areas
My research is centered on **Reliable & Verifiable ML/NLP**, focusing on Calibration, RAG, and Graph Neural Networks for decision support.

### GNN for Multi-Echelon Demand Forecasting
* **Project:** Built a **graph-neural-network prototype** with message passing over a multi-echelon interaction graph and a variational last layer
* **Goal:** Output **calibrated uncertainty** for risk-aware forecasts
* **Findings:** Benchmarked against a deterministic LSTM baseline and observed improved error and coverage characteristics

### Evidence-first Retrieval-Augmented Generation (RAG) with Conflict Auditing
* **Project:** Prototyped a **detect-then-decode RAG pipeline**
* **Methodology:** Used NLI models to audit contradictions and implemented a selective abstention policy when evidence was weak or conflicting
* **Results:** Structured auditing reduced contradiction-tagged generations in stress tests while maintaining the fraction of answerable questions

### Explainable Supplier Risk Modelling for SME Inclusion
* **Project:** Implemented **SHAP-based explanation pipelines** on generalized additive supplier-risk models
* **Goal:** Produced human-readable rationales to enable fairness audits focused on SME (Small and Medium-sized Enterprise) inclusion
