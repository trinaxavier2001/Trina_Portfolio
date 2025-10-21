---
title: "Ocean Chlorophyll Gap-Filling Pipeline"
stack:
  - "Python"
  - "xarray"
  - "PyTorch"
  - "UNet"
  - "DINCAE"
repo: "https://github.com/trinaxavier"
demo: ""
image: "/images/ocean-chlorophyll.jpg"
---

Developed an end-to-end data processing pipeline for reconstructing cloud-masked ocean chlorophyll-a measurements from satellite observations. Leveraged U-Net and DINCAE (Data-Interpolating Convolutional Auto-Encoder) architectures within a modern xarray/Zarr framework to handle large-scale geospatial datasets efficiently. The pipeline's automation reduced manual preprocessing by ~45%, but more importantly, established rigorous QA/QC protocols including unit testing, performance profiling, and spatiotemporal validation on held-out data. This systematic approach to data quality ensures downstream ocean science analyses build on reliable, analysis-ready products rather than inconsistent manual preprocessing.
