---
layout: default
parent: MQTT
grand_parent: Communication
title: Localization
nav_order: 2
permalink: communication/mqtt/localization
---

## Localization Protocols
{: .no_toc }

- TOC
{:toc}


### /localization/{robotId}

<table>
<tr><td>Source</td><td> Server</td></tr>
<tr><td>Destination</td><td> Robot ( Physical | Virtual ) </td></tr>
<tr><td>Data Type</td><td> JSON</td></tr>
<tr><td>Sample Message</td><td>
{X} {Y} {heading}
</td></tr>
<tr><td>Description</td><td>
Server will update the robots coordinates.
</td></tr>
</table>

## /localization/update

<table>
<tr><td>Source</td><td> Any</td></tr>
<tr><td>Destination</td><td> Local Server, Virtual Robots
</td></tr>
<tr><td>Data Type</td><td> Null</td></tr>
<tr><td>Sample Message</td><td>
N/A
</td></tr>
<tr><td>Description</td><td>
With this, the server can make an interrupt request to send coordinate updates from the Localization System (for physical robots) and Virtual Robots.
</td></tr>
</table>

## /localization/info

<table>
<tr><td>Source</td><td> Local Server, Virtual Robots
</td></tr>
<tr><td>Destination</td><td> Any (Server, GUI)</td></tr>
<tr><td>Data Type</td><td> JSON Array</td></tr>
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
This is an event triggered update, only send the updates of the robots with a significant move from the last update

This will be invoked on ‘{channal}/localization/update’ request too.

[only physical robots]
</td></tr>
</table>

## /localization/?

<table>
<tr><td>Source</td><td> Any</td></tr>
<tr><td>Destination</td><td> Server</td></tr>
<tr><td>Data Type</td><td> JSON Array</td></tr>
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
This will make a publish to the topic ‘{channal}/localization/info’ with both physical and virtual robot coordinates.
</td></tr>
</table>