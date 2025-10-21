---
title: "Handling Class Imbalance in Medical AI"
tagline: "When false negatives have consequences"
---

Class imbalance in medical imaging isn't a statistical inconvenience—it's a reflection of disease epidemiology. Rare conditions appear infrequently in training data precisely because they're rare in populations. But when detection failures mean missed diagnoses, optimizing for overall accuracy becomes ethically indefensible.

## Why Standard Metrics Fail Medical AI

The HAM10000 skin lesion dataset mirrors clinical reality: common benign lesions outnumber rare melanoma variants 50-to-1. A naive classifier that never predicts rare classes achieves 85% accuracy while missing every serious condition. This isn't a corner case—it's a systematic failure mode when we optimize the wrong objective.

The lesson: accuracy measures classification convenience, not clinical utility. In medical contexts, we must optimize for the cost of errors, not their frequency.

## Morphology-Faithful Augmentation as Domain Knowledge Encoding

Standard augmentation—random crops, color jitter, rotations—works for natural images but can destroy diagnostic features in dermoscopy. Lesion border asymmetry, color variation patterns, and structural characteristics are the morphological criteria dermatologists use for diagnosis.

I designed augmentation strategies that preserved these clinical features while increasing training diversity:

- Spatial transforms that maintained border irregularity patterns
- Color augmentations constrained to realistic dermoscopy ranges
- Careful avoidance of artifacts (lens flare, unnatural textures) that would never appear in real clinical imagery

This wasn't just good engineering—it was encoding dermatological expertise into the training process. The model learned from realistic variations, not statistical noise.

## Strategic Tradeoffs: SAM+EMA for Rare-Class Generalization

I deliberately accepted ~2% training overhead to implement Sharpness-Aware Minimization (SAM) with Exponential Moving Average (EMA). This choice prioritized rare-class recall over training efficiency.

SAM finds flatter loss minima that generalize better to underrepresented classes. EMA smooths weight updates, preventing the model from overfitting to majority-class patterns. The combination improved macro-F1 from 0.71 to 0.77, with disproportionate gains in rare melanoma detection—exactly where errors matter most.

This tradeoff—accepting longer training for better rare-class performance—reflects a fundamental principle: in medical AI, the cost of false negatives dominates the cost of computation.

## Evaluation as Trust Infrastructure

Reproducible evaluation wasn't about academic rigor; it was about building stakeholder trust. Beyond macro-F1, I tracked:

- Per-class precision and recall with confidence intervals
- Confusion matrices revealing which rare conditions were misclassified as common ones
- Calibration plots ensuring predicted probabilities reflected true diagnostic uncertainty

This evaluation design made model limitations transparent. When the classifier showed poor calibration for a rare subtype, clinicians could compensate with additional testing rather than trusting overconfident predictions.

## Principles for Medical ML

**Optimize for clinical cost, not statistical convenience**: Accuracy optimizes for data distribution; medical AI must optimize for patient outcomes.

**Encode domain expertise in augmentation**: Random data perturbations destroy diagnostic features; meaningful augmentation preserves them.

**Accept computational tradeoffs for reliability**: 2% slower training is negligible compared to the cost of missed diagnoses.

**Make limitations transparent**: Stakeholders need to know when the model is uncertain, not just what it predicts.

Class imbalance in medical AI is irreducible—it reflects epidemiology. But how we handle it determines whether our models serve datasets or patients.
