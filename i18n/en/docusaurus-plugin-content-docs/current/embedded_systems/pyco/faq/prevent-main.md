---
title: How to Prevent or Stop main.py Execution
sidebar_label: Prevent main.py Execution
sidebar_position: 3
---

# How to Prevent or Stop main.py Execution

If your `main.py` script enters an infinite loop, or you wish to prevent it from executing at startup, you have two options:

*   **Software Method:** Use the command `Sys_disableMain` to disable automatic execution of `main.py` at startup.
*   **Hardware Method:** on the PYCO development board, short the `Save` pin before powering on. This will prevent `main.py` from executing at startup.

These methods help you regain control when the program is stuck or when you want to upload new code to the board.
