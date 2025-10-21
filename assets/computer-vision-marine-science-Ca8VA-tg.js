const e=`---
title: "Computer Vision for Marine Science"
tagline: "Bridging deep learning and ecological decision-making"
---

Marine science applications reveal computer vision's limits and potential in equal measure. Unlike consumer applications where errors might mean misidentified pets, marine CV systems inform fisheries quotas, conservation strategies, and climate research—domains where model failures carry ecological and economic consequences.

## Transfer Learning Under Domain Shift

At the School for Marine Science and Technology, improving scallop detection by 20% recall and 15% precision (PyTorch + VIAME) required confronting a fundamental challenge: pretrained models encode ImageNet's visual priors, not the ocean's.

Underwater imagery violates ImageNet assumptions systematically. Dynamic caustics create spurious textures. Suspended sediment shifts color distributions unpredictably. Scale ambiguity—is that a 2cm scallop at 10cm distance or a 10cm scallop at 50cm?—confounds models trained on fixed-distance photography.

Rather than treating transfer learning as plug-and-play, we built QA/QC workflows that flagged high-confidence incorrect predictions. This meta-approach—monitoring where the model's confidence exceeded its accuracy—proved more valuable than chasing incremental F1 improvements. Marine scientists don't need perfect models; they need models that signal when they're unreliable.

## Sensor Fusion as Reliability Strategy

The Aloft Systems wind-forecasting pipeline (Raspberry Pi + 30 FPS camera + wind sensors, ~33ms sync) demonstrated that computer vision's value isn't replacing traditional sensors—it's disambiguating them.

Optical flow from CNN-LSTM architectures captures spatial wind patterns that point sensors miss. Kalman filtering integrates this visual evidence with direct measurements, producing 15% better wind-speed forecasts. The architecture's key insight: treat vision as one evidence stream among many, not as ground truth.

This multimodal approach also provides robustness. When optical flow fails (rain obscures the camera), wind sensors maintain coverage. When sensors drift (calibration degrades), visual patterns catch anomalies.

## Building Trust in High-Stakes Contexts

Marine conservation models require explainability not as academic curiosity but operational necessity. When fisheries managers adjust harvest limits based on population estimates, they need to understand *why* the model counted 10,000 scallops versus 12,000.

The lesson: integrate domain experts early, not for data labeling but for validation design. Marine scientists identified edge cases—mating aggregations, nursery grounds, seasonal migrations—that standard CV evaluation misses. Their input shaped what metrics we tracked and which failure modes we prioritized.

## Practical Implications

Computer vision in marine science works when you respect domain constraints: acknowledge where transfer learning fails, combine sensors for robustness, and design transparency for stakeholder trust. Metrics improve systems; context makes them useful.
`;export{e as default};
