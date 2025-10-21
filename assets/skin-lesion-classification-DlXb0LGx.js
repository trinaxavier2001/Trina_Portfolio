const i=`---
title: "Transformer & CNN Ensemble for Skin Lesion Classification"
stack:
  - "PyTorch"
  - "Transformers"
  - "Computer Vision"
  - "Medical AI"
repo: "https://github.com/trinaxavier2001/SkinLesionClassification"
demo: ""
---

Developed a robust ensemble architecture for medical image classification, improving macro-F1 from 0.71 to 0.77 on the HAM10000 benchmark through clinically-informed augmentation strategies that preserve diagnostic morphology. Tackled severe class imbalance by implementing Sharpness-Aware Minimization (SAM) with Exponential Moving Average (EMA), deliberately trading 2% training efficiency for significantly improved rare-lesion detection—a critical consideration in medical AI where false negatives can have serious consequences. Built comprehensive evaluation infrastructure with per-class metrics, calibration analysis, and reproducible data versioning to support clinical validation workflows.
`;export{i as default};
