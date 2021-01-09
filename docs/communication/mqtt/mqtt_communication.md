---
layout: default
parent: MQTT
grand_parent: Communication
title: Communication
nav_order: 2
permalink: communication/mqtt/comm
---

## Communication Protocols
{: .no_toc }

- TOC
{:toc}


### /comm/in/{robotID}

<table>
<tr><td>Source</td><td> Server</td></tr>
<tr><td>Destination</td><td> Robot</td></tr>
<tr><td>Data Type</td><td> String</td></tr>
<tr><td>Sample Message</td><td>
This is a Sample Message
</td></tr>
<tr><td>Description</td><td>
The server will send a communication message to a robot. Pure virtual implementation, receivers will be decided by the simulation server.
</td></tr>
</table>

### Title

<table>
<tr><td>Source</td><td> Robot</td></tr>
<tr><td>Destination</td><td> Server</td></tr>
<tr><td>Data Type</td><td> JSON</td></tr>
<tr><td>Sample Message</td><td>
{
   “id”:{RobotID},
   “msg”: “This is a sample”
}

</td></tr>
<tr><td>Description</td><td>
The robots can transmit messages to other robots using an pre-implemented transmission protocol. Server will decide the destinations for the message.

protocol: simple, directional.
</td></tr>
</table>
