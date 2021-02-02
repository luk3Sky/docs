---
layout: default
parent: MQTT
grand_parent: Communication
title: Communication
nav_order: 4
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
    <tr><td>Message Format</td><td>
        <i>[message]</i>
    </td></tr>
    <tr><td>Description</td><td>
        The server will send a communication message to a robot.
        Pure virtual implementation, receivers will be decided by the simulation server.

        <br><br>
        <dd>robotID: ID number of the robot</dd>
        <dd>message: The message string, max lenght: 64 chars</dd>
    </td></tr>
</table>

### /comm/out/{protocol}

<table>
    <tr><td>Source</td><td> Robot</td></tr>
    <tr><td>Destination</td><td> Server</td></tr>
    <tr><td>Data Type</td><td> JSON</td></tr>
    <tr><td>Message Format</td><td>
        <div class="language-json highlighter-rouge">
            <code class="highlight">
                {
                    “id”:{robotID},
                    “msg”: “This is a sample”
                }
            </code>
        </div>
    </td></tr>
    <tr><td>Description</td><td>
        The robots can transmit messages to other robots using an pre-implemented transmission protocol.
        Server will decide the robots who can receive the message.

        <br><br>
        <dd>protocol: simple, directional</dd>
        <dd>id: ID number of the robot</dd>
        <dd>message: The message string, max lenght: 64 chars</dd>
    </td></tr>
</table>
