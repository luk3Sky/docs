---
layout: default
parent: MQTT
grand_parent: Communication
title: Sensor
nav_order: 6
permalink: communication/mqtt/sensor
---

## Sensor Protocols
{: .no_toc }

- TOC
{:toc}

## Distance Sensor

### /sensor/distance/{robotID}/?

<table>
<tr><td>Source</td><td> Server</td></tr>
<tr><td>Destination</td><td> Robot ( Physical | Virtual ) </td></tr>
<tr><td>Data Type</td><td> Null</td></tr>
<tr><td>Sample Message</td><td>
?
</td></tr>
<tr><td>Description</td><td>
This will request distance sensor readings from a physical robot
</td></tr>
</table>

### /sensor/distance

<table>
<tr><td>Source</td><td> Robot</td></tr>
<tr><td>Destination</td><td> Server
</td></tr>
<tr><td>Data Type</td><td> JSON</td></tr>
<tr><td>Sample Message</td><td>
{
   "id":0,
   "dist":0
}
</td></tr>
<tr><td>Description</td><td>
Robot sends its own distance sensor readings to the simulator, as reply to the ‘{channal}/sensor/distance/{robotID}/?’ request
</td></tr>
</table>

### /sensor/distance/{robotID}

<table>
<tr><td>Source</td><td> Server
</td></tr>
<tr><td>Destination</td><td> Robot</td></tr>
<tr><td>Data Type</td><td> String</td></tr>
<tr><td>Sample Message</td><td>
{distance}
</td></tr>
<tr><td>Description</td><td>
Server will update virtual distance sensor readings to the robot.
</td></tr>
</table>

## Color  Sensor

### /sensor/color/{robotID}/?

<table>
<tr><td>Source</td><td> Server</td></tr>
<tr><td>Destination</td><td> Physical Robot </td></tr>
<tr><td>Data Type</td><td> Null</td></tr>
<tr><td>Sample Message</td><td>
N/A
</td></tr>
<tr><td>Description</td><td>
This will request color sensor readings from a physical robot..
</td></tr>
</table>

### /sensor/color

<table>
<tr><td>Source</td><td> Physical Robot</td></tr>
<tr><td>Destination</td><td> Server
</td></tr>
<tr><td>Data Type</td><td> JSON</td></tr>
<tr><td>Sample Message</td><td>
{
   "id":0,
   "R":0,
   "G":255,
   "B":127,
   "ambient":50
}

</td></tr>
<tr><td>Description</td><td>
Robot sends its own sensor readings to the server, as a reply to the ‘{channal}/sensor/color/{robotID}/?’ request
</td></tr>
</table>

### /sensor/color/{robotID}

<table>
<tr><td>Source</td><td> Server
</td></tr>
<tr><td>Destination</td><td> Robot</td></tr>
<tr><td>Data Type</td><td> String</td></tr>
<tr><td>Sample Message</td><td>
{R} {G} {B} {ambient}
</td></tr>
<tr><td>Description</td><td>
Server will update virtual sensor readings to the robot. Sensor readings must wait for this reply before deciding the final reading.
</td></tr>
</table>

## Proximity Sensor

### /sensor/proximity

<table>
<tr><td>Source</td><td> Physical Robot</td></tr>
<tr><td>Destination</td><td> Server </td></tr>
<tr><td>Data Type</td><td> JSON</td></tr>
<tr><td>Sample Message</td><td>
{
   "id":0,
   "dist": [%d,%d,%d,%d,%d]
}

</td></tr>
<tr><td>Description</td><td>
‘dist’ parameter will not be implemented in this phase because the sensor is entirely virtual. 

Here, ‘dist’ parameter is optional.

Full implementation should reply to the server with its proximity readings of 5 sensors
</td></tr>
</table>

### /sensor/proximity/{robotID}

<table>
<tr><td>Source</td><td> Server</td></tr>
<tr><td>Destination</td><td> Robot (Physical, Virtual)</td></tr>
<tr><td>Data Type</td><td> String</td></tr>
<tr><td>Sample Message</td><td>
%d %d %d %d %d 
</td></tr>
<tr><td>Description</td><td>
Server will update virtual proximity sensor readings to the robot, as the reply to the ‘{channal}/sensor/proximity’ topic.
</td></tr>
</table>
