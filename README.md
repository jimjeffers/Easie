# Easie

Easie is a port of [Robert Penner's classic easing equations for ActionScript](http://robertpenner.com/easing/). While many of these equations can be done in CSS today with the use of the ['cubic-bezier' timing functions in CSS3](see http://matthewlein.com/ceaser/), some of the more advanced easing equations such as Elastic or Bounce can be implemented with CSS3. This is where javascript can come to the rescue!

## When Should I Use Easie

There are two primary use cases I had which led me to port Penner's equations to CSS.

1. You want to create an advanced transition like an Elastic, Bounce, or Back ease.
2. You need more control over how the ease will affect a certain property. Take for instance you use the ease to calculate a new x position. You could create a function that calculates the step in your ease from the last interval to get the current velocity of the object. You could use this calculated velocity in another function to affect the scale of the object. (I know.. I know.. this requires an example to make sense. I'm working on an easing tool that will demonstrate this better.)

## Usage

Usage is quite 'easie' (haha). These are just timing functions so you can use them however you'd like. They take in parameters and return a value. It's up to you to determine how you want to implement the results of their calculations. To utilize any of the equations just grab the function from the Easie class.

For example:

`Easie.linearOut(time,begin,change,duration)`
`Easie.elasticOut(time,begin,change,duration)`
`Easie.backInOut(time,begin,change,duration)`

etc... All functions work pretty much identically to Penner's. For a complete tutorial on how they work and how to use them see the sample chapter from [Robert's book](http://robertpenner.com/easing/penner_chapter7_tweening.pdf "The Chapter From Robert Penner's Book on Easing Equations").

For instance if I wanted to do an elastic ease from 300px down to 600px on the screen I would use the easing function as so:

`duration = 1000`
`startY = 300`
`endY = 600`
`while duration > 0`
`   currentTime = -(1-duration)`
`   y = Easie.elasticOut(currentTime,startY,startY-endY,duration)`
`   duration -= 1`
