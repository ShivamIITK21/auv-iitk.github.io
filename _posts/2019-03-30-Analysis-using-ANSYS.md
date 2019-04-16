---
layout:     post
title:      "Analysis using ANSYS"
subtitle:   "Studying the motion of the vehicle and the subsequent visualisation of fluid flow using ANSYS."
date:       2019-03-30 20:04:33 +0530
author: 
 - name: 
 - fb-link: 
 - github-link: 
 - website-link: 
 - linkedin-link: 

categories: 	
excerpt_separator: <!--more-->
comments: true
social: true
css: blog-post.css
---

AUV-IITK is a multidisciplinary team of IITK students involved in designing, manufacturing, and testing of a series of Autonomous Underwater
Vehicles (AUVs), working towards providing a research platform for geoscientific research while preparing to compete in prestigious competitions such as NIOT, SAUVC, and RoboSub. Our team broadly consists of 4 subdivisions: Mechanical, Electrical, Software, and Business with a total of around 20 members.

After two successful prototypes, we have developed two AUVs, namely,  Varun and Anahita, and both of them have obtained the 1st Runners Up
position in NIOT-SAVe 2017 and 2019 respectively.
   
One of the primary stages in designing and modeling of an AUV is the study of the motion of the vehicle and the subsequent visualization of fluid flow across the body of the bot. One of the major software that we use for the same purpose is ANSYS.

Frame or the outer structure is one of the most critical parts of a vehicle; it holds all the components together and provides structural strength to the AUV. This year, in Anahita, we have implemented an open frame.


To make the the best optimized frame, we use static structural of Ansys Mechanical. In static structural, firstly select the material of the part. Then we need to select a perfect mesh size. Ideally mesh should be as small as possible, but to perform this computation it would require a great processing speed. So we need to select the mesh size according to the processor. Feed all the forces that are applied at different faces in static structural. Upon computing it gives stress of the plate at each point.


![After Structural Analysis](/assets/images/blog/posts/ANSYS/AfterStructuralAnalysis.jpg){:height="300px" width="700px"}

Lastly put the result of the static structural into topology optimization, and select the mass ratio upto which you want to reduce.

![AfterTopologyOptimization](/assets/images/blog/posts/ANSYS/AfterTopologyOptimisation.jpg){:height="400px" width="700px"}

![Final Frame after all analysis](/assets/images/blog/posts/ANSYS/FinalFrame.png){:height="400px" width="700px"}

## Flow Analysis

Using Ansys we can produce the 3 D flow visualisation. Using which we can identify vortex location, find streamlines of velocity across 3D and 2D profiles of the vehicle, find the drag of the vehicle and many other things.

![Flow Velocity Streamlines](/assets/images/blog/posts/ANSYS/VelocityStreamlines.jpg){:height="300px" width="700px"}

For selecting the present design of the vehicle we listed all the possible orientations and then calculated the drag for all the designs and selected the design with least drag.
Then for the design with least drag we simulated our vehicle in Ansys fluent and obtain a drag versus speed graph of our vehicle.
The present vehicle has a drag of 10N about at 0.6m/s speed of the vehicle.

