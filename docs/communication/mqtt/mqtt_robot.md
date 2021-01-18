---
layout: default
parent: MQTT
grand_parent: Communication
title: Robot
nav_order: 1
permalink: communication/mqtt/robot
---

## Robot Protocols
{: .no_toc }

- TOC
{:toc}

### /robot/msg/{robotID}

<table>
    <tr><td>Source</td><td>Simulation Server</td></tr>
    <tr><td>Destination</td><td>Robot (Virtual | Physical)</td></tr>
    <tr><td>Data Type</td><td>String</td></tr>
    <tr><td>Sample Message</td><td>
        <i>[MessageType] [MessageValue]</i>
    </td></tr>
    <tr><td>Description</td><td>Send a control message to an individual robot.</td></tr>
</table>

### /robot/msg/broadcast

<table>
    <tr><td>Source</td><td>Simulation Server</td></tr>
    <tr><td>Destination</td><td>Robot (Virtual | Physical)</td></tr>
    <tr><td>Data Type</td><td>String</td></tr>
    <tr><td>Sample Message</td><td>
        <i>[MessageType] [MessageValue]</i>
    </td></tr>
    <tr><td>Description</td><td>Send a control message to all active robots.
    </td></tr>
</table>


Example *MessageType* and *MessageValue* pairs:
- ID? -1
- START -1
- STOP -1
- RESET -1


### /robot/live

<table>
    <tr><td>Source</td><td>Robot (Virtual | Physical)</td></tr>
    <tr><td>Destination</td><td>Simulation Server</td></tr>
    <tr><td>Data Type</td><td>JSON</td></tr>
    <tr><td>Sample Message</td><td>
        {"id": <i>[robotId]</i>, "reality": <i>[reality]</i>}
    </td></tr>
    <tr><td>Description</td><td>
        Heartbeat signal from the robots to server.
        Simulation Server will keep a track of this to remove dead robots from the system.

        <dd>robotId: ID number of the robot</dd>
        <dd>reality: 0: virtual, 1: real</dd>
    </td></tr>
</table>

### /robot/create

<table>
    <tr><td>Source</td><td>Localization System, Virtual Robot</td></tr>
    <tr><td>Destination</td><td>Simulation Server, Visualizer</td></tr>
    <tr><td>Data Type</td><td>JSON</td></tr>
    <tr><td>Sample Message</td><td>
        { "id":0, "x":10, "y":10, "heading":0.0 }
    </td></tr>
    <tr><td>Description</td><td>
        This will be originated by virtual robots themself at the beginning,
        or by the localization system for physical robots.
        Information taken by the <i>Simulator</i> will create a robot instance,
        and the <i>Visualizer</i> will create a robot object too.

        <dd>id: ID number of the robot</dd>
        <dd>x, y, z, heading : floating point number with 2 decimals</dd>
    </td></tr>
</table>

### /robot/delete

<table>
    <tr><td>Source</td><td>Simulation Server</td></tr>
    <tr><td>Destination</td><td>Visualizer</td></tr>
    <tr><td>Data Type</td><td>JSON</td></tr>
    <tr><td>Sample Message</td><td>
        { "id": [robotId] }
    </td></tr>
    <tr><td>Description</td><td>
        This will inform other systems to remove the robot.
        Invoked by the prune scheduler on the <i>Simulator</i>.

        <dd>robotId: ID number of the robot</dd>
    </td></tr>
</table>
