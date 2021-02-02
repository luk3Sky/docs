---
layout: default
parent: JSON
grand_parent: Communication
title: Environment
nav_order: 2
permalink: communication/json/environment
---

# Environment JSON

Following JSON Schemas are used to configure the Swarm Environment.
(Not a fully completed yet)

Example:

```json
{
    "arena": {
        "xMin": -150,
        "xMax": 150,
        "yMin": -150,
        "yMax": 150,
        "units": "virtual"
    },
    "obstacles": [
    {
        "type": "wall",
        "parameters": {
            "x": -150,
            "y": 150,
            "orientation": 0,
            "width": 300,
            "height": 20,
            "color": "#404040"
        }
    },
    {
        "type": "box",
        "description": "A red color box for testings",
        "parameters": {
            "x": 50,
            "y": 40,
            "orientation": -90,
            "width": 40,
            "height": 20,
            "depth": 40,
            "color": "#AA0000"
        }
    },
    {
        "type": "cylinder",
        "description": "A green color box for testings",
        "parameters": {
            "x": -50,
            "y": 40,
            "height": 20,
            "radius": 20,
            "color": "#00AA00"
        }
    }
    ],
    "channel": "v1/"
}
```
