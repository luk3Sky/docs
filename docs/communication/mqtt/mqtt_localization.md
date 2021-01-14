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
    <tr><td>Destination</td><td>Server</td></tr>
    <tr><td>Data Type</td><td>String</td></tr>
    <tr><td>Sample Message</td><td>
        ?
    </td></tr>
    <tr><td>Description</td><td>
        This will make a publish to the topic <i>{channal}/localization/info</i> as a response
        with all robot coordinates the server has.
    </td></tr>
</table>

### /localization

<table>
    <tr><td>Source</td><td>Robot ( Physical | Virtual )</td></tr>
    <tr><td>Destination</td><td>Server</td></tr>
    <tr><td>Data Type</td><td>JSON</td></tr>
    <tr><td>Sample Message</td><td>
        {"id": 10}
    </td></tr>
    <tr><td>Description</td><td>
        Both physical and virtual robots can publish into this topic to request their own localization details
        from the server. This is mostly used by the hardware robots to correct their internal coordinate variables.
        They will receive the results through the topic <i>/localization/{robotId}</i>
    </td></tr>
</table>

### /localization/{robotId}

<table>
    <tr><td>Source</td><td>Server</td></tr>
    <tr><td>Destination</td><td>Robot ( Physical | Virtual ) </td></tr>
    <tr><td>Data Type</td><td>JSON</td></tr>
    <tr><td>Sample Message</td><td>
        {X} {Y} {heading}
    </td></tr>
    <tr><td>Description</td><td>
        Server will update the robots coordinates to the robot that request their own coordinates
        as requested from the topic <i>/localization</i> through this.
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
        With this, anyone can make an interrupt request to send coordinate updates from the
        Localization System (for physical robots) and Virtual Robots. Recomended to use this once the
        simulation server is started.
    </td></tr>
</table>

###  /localization/info

<table>
    <tr><td>Source</td><td>Localization System, Virtual Robots
    </td></tr>
    <tr><td>Destination</td><td>Any (Simulation Server, GUI)</td></tr>
    <tr><td>Data Type</td><td>JSON List</td></tr>
    <tr><td>Sample Message</td><td>
        [
        {
            "id":"#",
            "x":"10",
            "y":"15",
            "heading":"90.1"
        },
        …
        ]
    </td></tr>
    <tr><td>Description</td><td>
        This is an event triggered update from the localization system or virtual robots,
        only send the updates of the robots with a significant move from the last update
        This will be also invoked as a reply to <i>/localization/update</i> request from the simulation server.
    </td></tr>
</table>
