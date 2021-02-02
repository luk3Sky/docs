---
layout: default
parent: MQTT
grand_parent: Communication
title: Localization
nav_order: 3
permalink: communication/mqtt/localization
---

## Localization Protocols
{: .no_toc }

- TOC
{:toc}

###  /localization/?

<table>
    <tr><td>Source</td><td>Any</td></tr>
    <tr><td>Destination</td><td>Simulator</td></tr>
    <tr><td>Data Type</td><td>String</td></tr>
    <tr><td>Message Format</td><td>
        {reality}
    </td></tr>
    <tr><td>Description</td><td>
        Once a message received to this, make a publish to the topic
        <i>{channal}/localization/info</i>, the coordinates of the robots in the requested reality.
        <br><br>
        <dd>reality: M: mixed (default), V: virtual, R: real</dd>
    </td></tr>
</table>

### /localization

<table>
    <tr><td>Source</td><td>Robot ( Physical | Virtual )</td></tr>
    <tr><td>Destination</td><td>Simulator</td></tr>
    <tr><td>Data Type</td><td>JSON</td></tr>
    <tr><td>Message Format</td><td>
        <div class="language-json highlighter-rouge">
            <code class="highlight">
                {"id": <i>[robotId]</i>}
            </code>
        </div>
    </td></tr>
    <tr><td>Description</td><td>
        Both physical and virtual robots can publish into this topic to request their own localization details
        from the Simulator. This is mostly used by the hardware robots to correct their internal coordinate variables.
        They will receive the results through the topic <i>/localization/{robotId}</i>

        <br><br>
        <dd>robotID: ID number of the robot</dd>
    </td></tr>
</table>

### /localization/{robotId}

<table>
    <tr><td>Source</td><td>Simulator</td></tr>
    <tr><td>Destination</td><td>Robot ( Physical | Virtual ) </td></tr>
    <tr><td>Data Type</td><td>JSON</td></tr>
    <tr><td>Message Format</td><td>
        {X} {Y} {heading}
    </td></tr>
    <tr><td>Description</td><td>
        Simulator will reply the robots coordinates to the robot that request their own
        coordinates as response to the topic <i>/localization</i> through this.

        <br><br>
        <dd>robotID: ID number of the robot</dd>
        <dd>X,Y: Robot coordinate readings in centimeters</dd>
        <dd>heading: heading of the robot in degrees, 0=x+ direction</dd>
    </td></tr>
</table>

###  /localization/update

<table>
    <tr><td>Source</td><td>Any</td></tr>
    <tr><td>Destination</td><td>Localization System, Virtual Robots
    </td></tr>
    <tr><td>Data Type</td><td>String</td></tr>
    <tr><td>Sample Message</td><td>
        ?
    </td></tr>
    <tr><td>Description</td><td>
        Any subsystem can publish into this topic to request coordinate updates from the
        Localization System (for physical robots) or Virtual Robots. Recomended to use this by
        simulation server, once it is started. It will receive the response through <i>/localization/info</i> topic.
    </td></tr>
</table>

###  /localization/info

<table>
    <tr><td>Source</td><td>Localization System, Virtual Robots
    </td></tr>
    <tr><td>Destination</td><td>Any (Simulator, GUI)</td></tr>
    <tr><td>Data Type</td><td>JSON List</td></tr>
    <tr><td>Sample Message</td><td>
        <div class="language-json highlighter-rouge">
            <code class="highlight">
                {"reality":"<i>[reality]</i>","data":[{
                    "id":"#",
                    "x":"10",
                    "y":"15",
                    "heading":"90.1"
                },…]}
            </code>
        </div>
    </td></tr>
    <tr><td>Description</td><td>
        This is an event triggered update from the localization system or virtual robots,
        only send the updates of the robots with a significant move from the last update
        This will be also invoked as a reply to <i>/localization/update</i> request from the simulator.
        <br><br>
        <dd>reality: M: mixed (default), V: virtual, R: real</dd>
        <dd>data: A JSON <i>list</i> of coordinates of the robots.</dd>

        <br><br>
        <dd>id: ID number of the robot</dd>
        <dd>X,Y: Robot coordinate readings in centimeters</dd>
        <dd>heading: heading of the robot in degrees, 0=x+ direction</dd>

    </td></tr>
</table>
