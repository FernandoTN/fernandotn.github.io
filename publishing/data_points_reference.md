# Data Points Reference Document

## AI Agents Research Publishing Project - Quick Reference Tables

**Purpose**: Centralized reference for all quantitative findings from research project
**Source**: Theme_Frequency_Analysis.md and extraction documents
**Last Updated**: December 3, 2025

---

## 1. Core Theme Frequency Statistics

| Theme                                   | Source Count | Percentage | Weight Score |
| --------------------------------------- | ------------ | ---------- | ------------ |
| **System Integration**                  | 24/26        | 92%        | 114.0        |
| **Framework & Tooling Ecosystem**       | 22/26        | 85%        | 103.0        |
| **Probabilistic Systems & Reliability** | 22/26        | 85%        | 106.0        |
| **Enterprise Blockers & Governance**    | 21/26        | 81%        | 100.0        |
| **Context Management & Memory**         | 18/26        | 69%        | 88.0         |
| **Model Capabilities & Limitations**    | 16/26        | 62%        | 78.1         |

**Methodology Note**: Analysis covers 26 extraction documents (18 interviews, 5 conferences, 3 prototypes). Weight = (occurrence count) x (average relevance score of sources mentioning theme). Relevance scores range 2-5 from extraction metadata.

---

## 2. Weighted Theme Rankings (Full Table)

| Rank | Theme                               | Occurrences | Avg Relevance | Weight | Notes                                                     |
| ---- | ----------------------------------- | ----------- | ------------- | ------ | --------------------------------------------------------- |
| 1    | System Integration                  | 24          | 4.75          | 114.0  | Universally critical; highest occurrence x high relevance |
| 2    | Probabilistic Systems & Reliability | 22          | 4.82          | 106.0  | Demo-to-production gap; evaluation challenges             |
| 3    | Framework & Tooling Ecosystem       | 22          | 4.68          | 103.0  | Framework bloat; observability gaps                       |
| 4    | Enterprise Blockers & Governance    | 21          | 4.76          | 100.0  | Security, identity, organizational change                 |
| 5    | Context Management & Memory         | 18          | 4.89          | 88.0   | Technical depth; concentrated in practitioner sources     |
| 6    | Model Capabilities & Limitations    | 16          | 4.88          | 78.1   | Least prevalent core theme; capabilities "good enough"    |
| 7    | Business Case & ROI (emergent)      | 5           | 5.00          | 25.0   | Highest relevance; primary failure mode                   |
| 8    | Infrastructure Economics (emergent) | 4           | 4.75          | 19.0   | GPU/power constraints; cost sustainability                |

---

## 3. Key Production Statistics

### Failure and Abandonment Rates

| Statistic                                   | Value  | Source                  |
| ------------------------------------------- | ------ | ----------------------- |
| Pilot failure rate (never reach production) | 90%    | David (Qurrent)         |
| Framework abandonment rate (LangChain)      | 80-90% | Cynthia (WiseAgents)    |
| General agent failure rate                  | 95%    | Why 95% Fail Conference |
| Demo reliability threshold                  | 70%    | Mrinal (Autonomy)       |

### Time and Contribution Allocation

| Statistic                          | Value  | Source          |
| ---------------------------------- | ------ | --------------- |
| Integration time (% of deployment) | 40-50% | David (Qurrent) |
| Model contribution to success      | 30-40% | Manus Fireside  |
| Framework/system contribution      | 60-70% | Manus Fireside  |

### Technical Limits

| Statistic                                  | Value       | Source                   |
| ------------------------------------------ | ----------- | ------------------------ |
| MCP tool limit (before accuracy drop)      | 25 tools    | CC (Vivgrid)             |
| Accuracy after exceeding tool limit        | 30%         | CC (Vivgrid)             |
| Context utilization rule (max recommended) | 40%         | Production Agents Summit |
| Framework speed disadvantage               | 3-4x slower | Sahil (Clientell)        |

---

## 4. Productivity and ROI Statistics

| Statistic                           | Value                              | Source          |
| ----------------------------------- | ---------------------------------- | --------------- |
| Coding agent productivity gain      | 3x                                 | Tian (Okta)     |
| Lead processing throughput increase | 3-4x (4,000 to 12,000-16,000/year) | ChatPRD         |
| Single use case savings example     | $2M                                | CrewAI customer |
| Annual target (enterprise platform) | $100M                              | CrewAI          |
| Cost disadvantage vs offshore labor | 3-5x                               | Tian (Okta)     |
| Sustainable agent pricing target    | $20-30/month                       | Alibaba         |
| Actual token cost per agent         | $5+                                | Alibaba         |

---

## 5. Source Quality Distribution

| Category                    | Count | Percentage |
| --------------------------- | ----- | ---------- |
| Relevance 5/5 (Exceptional) | 19    | 73%        |
| Relevance 4/5 (High)        | 6     | 23%        |
| Relevance 2/5 (Low)         | 1     | 4%         |

| Source Type | Count | Percentage |
| ----------- | ----- | ---------- |
| Interviews  | 18    | 69%        |
| Conferences | 5     | 19%        |
| Prototypes  | 3     | 12%        |

---

## 6. Emergent Themes by Frequency

| Emergent Theme                      | Count | Key Sources                                               |
| ----------------------------------- | ----- | --------------------------------------------------------- |
| Business Case & ROI Calculation     | 5     | David_Qurrent, Tian_Okta, Alibaba_Qwen, CrewAI, ChatPRD   |
| Deployment & Service Models         | 4     | David_Qurrent, Tian_Okta, CrewAI, Cynthia_WiseAgents      |
| Infrastructure & Scaling Economics  | 4     | CC_Vivgrid, Stephen_GMI, Alibaba_Qwen, Project_Nanda      |
| Agent Memory Architecture (Dual)    | 3     | Saurav_RunLLM, Sahil_Clientell, Mehak_Sybill              |
| Software Engineering Paradigm Shift | 3     | Mrinal_Autonomy, ChatPRD, Manus_Fireside                  |
| Evaluation Methodology & Metrics    | 3     | Yujian_Tan, Production_Agents_Summit, Why_95_Percent_Fail |
| Harness Obsolescence & Timing       | 2     | Tushar_CodeForge, Manus_Fireside                          |
| Open Source Strategy & Ecosystem    | 2     | Alibaba_Qwen, Project_Nanda                               |
| Multi-Agent Orchestration Patterns  | 2     | VCatTheory, Good_Agents                                   |
| Agent UX Design Patterns            | 2     | Production_Agents_Summit, Why_95_Percent_Fail             |

---

## 7. Quick Reference: Most-Cited Statistics for Publications

### Tier 1: Universal Findings (Use in Every Post)

- **92%** of sources cite system integration as primary challenge (24/26 sources)
- **90%** of pilot projects fail to reach production
- **85%** of sources discuss probabilistic reliability gaps
- **85%** of sources cite framework ecosystem challenges

### Tier 2: High-Impact Findings (Use Frequently)

- **80-90%** abandon LangChain for production
- **81%** of sources cite enterprise blockers
- **40-50%** of deployment time spent on integration
- **30-40%** model contribution vs 60-70% framework/system

### Tier 3: Technical Specifics (Use for Depth)

- **25-tool** MCP limit before accuracy drops to 30%
- **40%** maximum context utilization rule
- **3-4x** productivity gains for coding agents
- **69%** of sources discuss context management
- **62%** of sources discuss model capabilities (lowest core theme)

---

## 8. Attribution Quick Reference

### Named Sources (Can Use with Attribution)

| Speaker          | Company    | Notable Quote Topic                                             |
| ---------------- | ---------- | --------------------------------------------------------------- |
| David            | Qurrent    | 90% pilot failure, ROI as failure mode, 40-50% integration time |
| Mrinal           | Autonomy   | 70% demo reliability, paradigm shift                            |
| CC               | Vivgrid    | 25-tool MCP limit, 30% accuracy drop                            |
| Cynthia          | WiseAgents | 80-90% LangChain abandonment                                    |
| Manus Co-Founder | Manus      | 30-40% model contribution                                       |
| Mehak            | Sybill     | Build blind after step one                                      |
| Sahil            | Clientell  | 3-4x framework speed disadvantage                               |
| Tian             | Okta       | 3x coding productivity, 3-5x cost disadvantage                  |
| Tushar           | CodeForge  | Coding as only killer app                                       |
| Yujian           | Tan        | Evaluation methodology                                          |
| Stephen          | GMI        | Infrastructure constraints                                      |

### Confidential Sources (Use Anonymously)

- Use: "Multiple interviewees noted..." or "Practitioners we spoke with..."
- Check specPublishing.txt Section 9 for full privacy requirements

---

## 9. Source Count Methodology Note

**Total Sources Analyzed**: 26 extraction documents

**Breakdown**:

- 18 Interviews (documented in /Extractions/Interviews/)
- 5 Conferences (documented in /Extractions/Conferences/)
- 3 Prototypes (documented in /Extractions/Prototypes/)

**Exclusions**:

- Zeena interview (Score 2/5, acquisition focus, not technical) - excluded from weighted analysis
- Confidential Summary placeholder - template only, not scored

**Relevance Scoring**: 2-5 scale from extraction metadata

- Scores determined by relevance to core research questions
- Higher weight given to practitioner sources with production deployment experience

**Triangulation**: Interview findings validated by prototype results and cross-source confirmation

---

## 10. Key Contradictions to Address in Content

| Topic         | Tension                                         | Sources                        |
| ------------- | ----------------------------------------------- | ------------------------------ |
| MCP           | Industry optimism vs practical critique         | David, Saurav, CC              |
| Frameworks    | Billion-dollar valuations vs 80-90% abandonment | Cynthia, Sahil, Shopping Agent |
| Coding Agents | Success vs failure for general agents           | Tushar, Tian, Yujian           |
| Model Scaling | "Good enough" vs continued investment           | David, Manus                   |

---

**Document Version**: 1.0
**Created**: December 3, 2025
**For Use In**: Blog posts, LinkedIn posts, presentations, reports
