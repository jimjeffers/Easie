###
Easie.coffee (https://github.com/jimjeffers/Easie)
Project created by J. Jeffers

Robert Penner's Easing Equations in CoffeeScript
http://robertpenner.com/easing/

DISCLAIMER: Software provided as is with no warranty of any type. 
Don't do bad things with this :)
###

class @Easie
  
  # Back Easing 
  # -----------------------------------------------------
  
  @backIn: (time,begin,change,duration,overshoot=1.70158) ->
    change*(time/=duration)*time*((overshoot+1)*time - overshoot) + begin;
  
  @backOut: (time,begin,change,duration,overshoot=1.70158) ->
    change*((time=time/duration-1)*time*((overshoot+1)*time + overshoot) + 1) + begin
  
  @backInOut: (time,begin,change,duration,overshoot=1.70158) ->
    if ((time = time/(duration/2)) < 1)
      return change/2*(time*time*(((overshoot*=(1.525))+1)*time - overshoot)) + begin
    else
      return change/2*((time-=2)*time*(((overshoot*=(1.525))+1)*time + overshoot) + 2) + begin
  
  # Bounce Easing
  # -----------------------------------------------------
  
  @bounceOut: (time,begin,change,duration) ->
    if (time /= duration) < 1/2.75
      return change * (7.5625*time*time) + begin
    else if time < 2/2.75
      return change * (7.5625*(time -= (1.5/2.75)) * time + 0.75) + begin
    else if time < 2.5/2.75
      return change * (7.5625*(time -= (2.25/2.75)) * time + 0.9375) + begin
    else
      return change * (7.5625*(time -= (2.625/2.75)) * time + 0.984375) + begin
  
  @bounceIn: (time,begin,change,duration) ->
    return change - Easie.bounceOut(duration-time, 0, change, duration) + begin
  
  @bounceInOut: (time,begin,change,duration) ->
    if time < duration/2
      return Easie.bounceIn(time*2, 0, change, duration) * 0.5 + begin
    else
      return Easie.bounceOut(time*2-duration, 0, change, duration) * 0.5 + change*0.5 + begin
  
  # Circ Easing
  # -----------------------------------------------------
  
  @circIn: (time,begin,change,duration) ->
    -change * (Math.sqrt(1 - (time = time/duration) * time) - 1) + begin
  
  @circOut: (time,begin,change,duration) ->
    change * Math.sqrt(1 - (time = time/duration-1) * time) + begin
  
  @circInOut: (time,begin,change,duration) ->
    if (time = time / (duration/2)) < 1
      return -change/2 * (Math.sqrt(1 - time*time) - 1) + begin
    else
      return change/2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + begin
  
  # Cubic Easing
  # -----------------------------------------------------
  
  @cubicIn: (time,begin,change,duration) ->
    change * (time/=duration)*time*time + begin
  
  @cubicOut: (time,begin,change,duration) ->
    change * ((time=time/duration-1)*time*time + 1) + begin
  
  @cubicInOut: (time,begin,change,duration) ->
    if (time = time/(duration/2)) < 1
      return change/2 * time*time*time + begin
    else
      return change/2 * ((time -= 2)*time*time + 2) + begin
  
  # Elastic Easing
  # -----------------------------------------------------
  
  @elasticOut:  (time,begin,change,duration,amplitude=null,period=null) ->
    if time == 0
      return begin
    else if (time=time/duration) == 1
      return begin+change
    else
      if !period?
        period = duration*0.3
      if !amplitude? or amplitude < Math.abs(change)
        amplitude = change
        overshoot = period/4
      else
        overshoot = period/(2*Math.PI) * Math.asin(change/amplitude)
      (amplitude*Math.pow(2,-10*time)) * Math.sin((time*duration-overshoot)*(2*Math.PI)/period)+change+begin
  
  @elasticIn: (time,begin,change,duration,amplitude=null,period=null) ->
    if time == 0
      return begin 
    else if (time=time/duration) == 1
      return begin+change
    else
      if !period?
        period = duration*0.3
      if !amplitude? or amplitude < Math.abs(change)
        amplitude = change
        overshoot = period/4
      else
        overshoot = period/(2*Math.PI) * Math.asin(change/amplitude)
      time -= 1
      -(amplitude*Math.pow(2,10*time)) * Math.sin((time*duration-overshoot)*(2*Math.PI)/period)+begin
  
  @elasticInOut: (time,begin,change,duration,amplitude=null,period=null) ->
    if time == 0
      return begin
    else if (time = time/(duration/2)) == 2
      return begin+change
    else
      if !period?
        period = duration*(0.3*1.5)
      if !amplitude? or amplitude < Math.abs(change)
        amplitude = change
        overshoot = period/4
      else
        overshoot = period/(2*Math.PI)*Math.asin(change/amplitude)
      if time < 1
        return -0.5*(amplitude*Math.pow(2,10*(time-=1))) * Math.sin((time*duration-overshoot)*((2*Math.PI)/period)) + begin
      else
        return amplitude * Math.pow(2,-10*(time-=1)) * Math.sin((time*duration-overshoot)*(2*Math.PI)/period) + change + begin
  
  # Exponential Easing
  # -----------------------------------------------------
  
  @expoIn: (time,begin,change,duration) ->
    return begin if time == 0
    change * Math.pow(2, 10*(time/duration-1))+begin
    
  @expoOut: (time,begin,change,duration) ->
    return begin+change if time == duration
    change * (-Math.pow(2,-10*time/duration)+1)+begin
  
  @expoInOut: (time,begin,change,duration) ->
    if time == 0
      return begin
    else if time == duration
      return begin+change
    else if (time = time/(duration/2)) < 1
      return change/2 * Math.pow(2,10*(time-1)) + begin
    else
      change/2*(-Math.pow(2,-10*(time-1))+2)+begin;
  
  # Linear
  # -----------------------------------------------------
  
  @linearNone: (time,begin,change,duration) ->
    change*time/duration + begin
  
  @linearIn: (time,begin,change,duration) ->
    Easie.linearNone(time,begin,change,duration)
  
  @linearOut: (time,begin,change,duration) ->
    Easie.linearNone(time,begin,change,duration)
  
  @linearInOut: (time,begin,change,duration) ->
    Easie.linearNone(time,begin,change,duration)

  
  # Quad Easing
  # -----------------------------------------------------
  
  @quadIn: (time,begin,change,duration) ->
    change * (time = time/duration)*time + begin
  
  @quadOut: (time,begin,change,duration) ->
    -change * (time = time/duration)*(time-2) + begin
  
  @quadInOut: (time,begin,change,duration) ->
    if (time = time/(duration/2)) < 1
      return change/2 * time*time + begin
    else
      return -change/2 * ((time -= 1)*(time-2)-1) + begin
  
  # Quart Easing
  # -----------------------------------------------------
  
  @quartIn: (time,begin,change,duration) ->
    change * (time = time/duration)*time*time*time + begin
  
  @quartOut: (time,begin,change,duration) ->
    -change * ((time = time/duration - 1)*time*time*time - 1) + begin
  
  @quartInOut: (time,begin,change,duration) ->
    if (time = time/(duration/2)) < 1
      return change/2 * time*time*time*time + begin
    else
      return -change/2 * ((time -= 2)*time*time*time - 2) + begin
  
  # Quint Easing
  # -----------------------------------------------------
  
  @quintIn: (time,begin,change,duration) ->
    change * (time = time/duration)*time*time*time*time + begin
  
  @quintOut: (time,begin,change,duration) ->
    change * ((time = time/duration-1)*time*time*time*time + 1) + begin
  
  @quintInOut: (time,begin,change,duration) ->
    if (time = time/(duration/2)) < 1
      return change/2 * time*time*time*time*time + begin
    else
      return change/2 * ((time -= 2)*time*time*time*time + 2) + begin
  
  # Sine Easing
  # -----------------------------------------------------
  
  @sineIn: (time,begin,change,duration) ->
    -change * Math.cos(time/duration * (Math.PI/2)) + change + begin
  
  @sineOut: (time,begin,change,duration) ->
    change * Math.sin(time/duration * (Math.PI/2)) + begin
  
  @sineInOut: (time,begin,change,duration) ->
    -change/2 * (Math.cos(Math.PI*time/duration) - 1) + begin