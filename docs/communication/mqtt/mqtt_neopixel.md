---
layout: default
parent: MQTT
grand_parent: Communication
title: NeoPixel LEDs
nav_order: 7
permalink: communication/mqtt/neopixel
---

## NeoPixel LED Protocols
{: .no_toc }

- TOC
{:toc}

###  /output/neopixel

<table>
    <tr><td>Source</td><td>Robot ( Physical | Virtual ) </td></tr>
    <tr><td>Destination</td><td>Server / GUI</td></tr>
    <tr><td>Data Type</td><td>JSON</td></tr>
    <tr><td>Sample Message</td><td>
        {"id": 10, "R": 0, "G": 0, "B": 0}
    </td></tr>
    <tr><td>Description</td><td>
        Broadcast the RGB values of robot's NeoPixel LED ring to the Server/ GUI through the topic.
        <dd>Range: [0,255]</dd>
    </td></tr>
</table>

### /output/neopixel/{robotId}

<table>
    <tr><td>Source</td><td>Server</td></tr>
    <tr><td>Destination</td><td>Robot ( Physical | Virtual ) </td></tr>
    <tr><td>Data Type</td><td>String</td></tr>
    <tr><td>Sample Message</td><td>
        50 100 150
    </td></tr>
    <tr><td>Description</td><td>
        Server can ask from robot to change their colors by using the topic <i>/output/neopixel/{robotId}</i><br>
        <dd>Message format: String "R G B"</dd>
        <dd>Range: [0,255]</dd>
    </td></tr>
</table>
