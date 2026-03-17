---
title: Startup Sequence
sidebar_label: Startup Sequence
sidebar_position: 2
---

# Startup Sequence

When the PYCO development board is powered on, it will first execute `boot.py`, followed by `main.py`.

-   `boot.py` is typically used for system or environment initialization.
-   `main.py` contains your primary application logic and will automatically execute after `boot.py`.
