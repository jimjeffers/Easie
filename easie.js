(function() {
  /*
  Easie.coffee (https://github.com/jimjeffers/Easie)
  Project created by J. Jeffers
  
  Robert Penner's Easing Equations in CoffeeScript
  http://robertpenner.com/easing/
  
  DISCLAIMER: Software provided as is with no warranty of any type. 
  Don't do bad things with this :)
  */  this.Easie = (function() {
    function Easie() {}
    Easie.backIn = function(time, begin, change, duration, overshoot) {
      if (overshoot == null) {
        overshoot = 1.70158;
      }
      return change * (time /= duration) * time * ((overshoot + 1) * time - overshoot) + begin;
    };
    Easie.backOut = function(time, begin, change, duration, overshoot) {
      if (overshoot == null) {
        overshoot = 1.70158;
      }
      return change * ((time = time / duration - 1) * time * ((overshoot + 1) * time + overshoot) + 1) + begin;
    };
    Easie.backInOut = function(time, begin, change, duration, overshoot) {
      if (overshoot == null) {
        overshoot = 1.70158;
      }
      if ((time = time / (duration / 2)) < 1) {
        return change / 2 * (time * time * (((overshoot *= 1.525) + 1) * time - overshoot)) + begin;
      } else {
        return change / 2 * ((time -= 2) * time * (((overshoot *= 1.525) + 1) * time + overshoot) + 2) + begin;
      }
    };
    Easie.bounceOut = function(time, begin, change, duration) {
      if ((time /= duration) < 1 / 2.75) {
        return change * (7.5625 * time * time) + begin;
      } else if (time < 2 / 2.75) {
        return change * (7.5625 * (time -= 1.5 / 2.75) * time + 0.75) + begin;
      } else if (time < 2.5 / 2.75) {
        return change * (7.5625 * (time -= 2.25 / 2.75) * time + 0.9375) + begin;
      } else {
        return change * (7.5625 * (time -= 2.625 / 2.75) * time + 0.984375) + begin;
      }
    };
    Easie.bounceIn = function(time, begin, change, duration) {
      return change - Easie.bounceOut(duration - time, 0, change, duration) + begin;
    };
    Easie.bounceInOut = function(time, begin, change, duration) {
      if (time < duration / 2) {
        return Easie.bounceIn(time * 2, 0, change, duration) * 0.5 + begin;
      } else {
        return Easie.bounceOut(time * 2 - duration, 0, change, duration) * 0.5 + change * 0.5 + begin;
      }
    };
    Easie.circIn = function(time, begin, change, duration) {
      return -change * (Math.sqrt(1 - (time = time / duration) * time) - 1) + begin;
    };
    Easie.circOut = function(time, begin, change, duration) {
      return change * Math.sqrt(1 - (time = time / duration - 1) * time) + begin;
    };
    Easie.circInOut = function(time, begin, change, duration) {
      if ((time = time / (duration / 2)) < 1) {
        return -change / 2 * (Math.sqrt(1 - time * time) - 1) + begin;
      } else {
        return change / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + begin;
      }
    };
    Easie.cubicIn = function(time, begin, change, duration) {
      return change * (time /= duration) * time * time + begin;
    };
    Easie.cubicOut = function(time, begin, change, duration) {
      return change * ((time = time / duration - 1) * time * time + 1) + begin;
    };
    Easie.cubicInOut = function(time, begin, change, duration) {
      if ((time = time / (duration / 2)) < 1) {
        return change / 2 * time * time * time + begin;
      } else {
        return change / 2 * ((time -= 2) * time * time + 2) + begin;
      }
    };
    Easie.elasticOut = function(time, begin, change, duration, amplitude, period) {
      var overshoot;
      if (amplitude == null) {
        amplitude = null;
      }
      if (period == null) {
        period = null;
      }
      if (time === 0) {
        return begin;
      } else if ((time = time / duration) === 1) {
        return begin + change;
      } else {
        if (!(period != null)) {
          period = duration * 0.3;
        }
        if (!(amplitude != null) || amplitude < Math.abs(change)) {
          amplitude = change;
          overshoot = period / 4;
        } else {
          overshoot = period / (2 * Math.PI) * Math.asin(change / amplitude);
        }
        return (amplitude * Math.pow(2, -10 * time)) * Math.sin((time * duration - overshoot) * (2 * Math.PI) / period) + change + begin;
      }
    };
    Easie.elasticIn = function(time, begin, change, duration, amplitude, period) {
      var overshoot;
      if (amplitude == null) {
        amplitude = null;
      }
      if (period == null) {
        period = null;
      }
      if (time === 0) {
        return begin;
      } else if ((time = time / duration) === 1) {
        return begin + change;
      } else {
        if (!(period != null)) {
          period = duration * 0.3;
        }
        if (!(amplitude != null) || amplitude < Math.abs(change)) {
          amplitude = change;
          overshoot = period / 4;
        } else {
          overshoot = period / (2 * Math.PI) * Math.asin(change / amplitude);
        }
        time -= 1;
        return -(amplitude * Math.pow(2, 10 * time)) * Math.sin((time * duration - overshoot) * (2 * Math.PI) / period) + begin;
      }
    };
    Easie.elasticInOut = function(time, begin, change, duration, amplitude, period) {
      var overshoot;
      if (amplitude == null) {
        amplitude = null;
      }
      if (period == null) {
        period = null;
      }
      if (time === 0) {
        return begin;
      } else if ((time = time / (duration / 2)) === 2) {
        return begin + change;
      } else {
        if (!(period != null)) {
          period = duration * (0.3 * 1.5);
        }
        if (!(amplitude != null) || amplitude < Math.abs(change)) {
          amplitude = change;
          overshoot = period / 4;
        } else {
          overshoot = period / (2 * Math.PI) * Math.asin(change / amplitude);
        }
        if (time < 1) {
          return -0.5 * (amplitude * Math.pow(2, 10 * (time -= 1))) * Math.sin((time * duration - overshoot) * ((2 * Math.PI) / period)) + begin;
        } else {
          return amplitude * Math.pow(2, -10 * (time -= 1)) * Math.sin((time * duration - overshoot) * (2 * Math.PI) / period) + change + begin;
        }
      }
    };
    Easie.expoIn = function(time, begin, change, duration) {
      if (time === 0) {
        return begin;
      }
      return change * Math.pow(2, 10 * (time / duration - 1)) + begin;
    };
    Easie.expoOut = function(time, begin, change, duration) {
      if (time === duration) {
        return begin + change;
      }
      return change * (-Math.pow(2, -10 * time / duration) + 1) + begin;
    };
    Easie.expoInOut = function(time, begin, change, duration) {
      if (time === 0) {
        return begin;
      } else if (time === duration) {
        return begin + change;
      } else if ((time = time / (duration / 2)) < 1) {
        return change / 2 * Math.pow(2, 10 * (time - 1)) + begin;
      } else {
        return change / 2 * (-Math.pow(2, -10 * (time - 1)) + 2) + begin;
      }
    };
    Easie.linearNone = function(time, begin, change, duration) {
      return change * time / duration + begin;
    };
    Easie.linearIn = function(time, begin, change, duration) {
      return Easie.linearNone(time, begin, change, duration);
    };
    Easie.linearOut = function(time, begin, change, duration) {
      return Easie.linearNone(time, begin, change, duration);
    };
    Easie.linearInOut = function(time, begin, change, duration) {
      return Easie.linearNone(time, begin, change, duration);
    };
    Easie.quadIn = function(time, begin, change, duration) {
      return change * (time = time / duration) * time + begin;
    };
    Easie.quadOut = function(time, begin, change, duration) {
      return -change * (time = time / duration) * (time - 2) + begin;
    };
    Easie.quadInOut = function(time, begin, change, duration) {
      if ((time = time / (duration / 2)) < 1) {
        return change / 2 * time * time + begin;
      } else {
        return -change / 2 * ((time -= 1) * (time - 2) - 1) + begin;
      }
    };
    Easie.quartIn = function(time, begin, change, duration) {
      return change * (time = time / duration) * time * time * time + begin;
    };
    Easie.quartOut = function(time, begin, change, duration) {
      return -change * ((time = time / duration - 1) * time * time * time - 1) + begin;
    };
    Easie.quartInOut = function(time, begin, change, duration) {
      if ((time = time / (duration / 2)) < 1) {
        return change / 2 * time * time * time * time + begin;
      } else {
        return -change / 2 * ((time -= 2) * time * time * time - 2) + begin;
      }
    };
    Easie.quintIn = function(time, begin, change, duration) {
      return change * (time = time / duration) * time * time * time * time + begin;
    };
    Easie.quintOut = function(time, begin, change, duration) {
      return change * ((time = time / duration - 1) * time * time * time * time + 1) + begin;
    };
    Easie.quintInOut = function(time, begin, change, duration) {
      if ((time = time / (duration / 2)) < 1) {
        return change / 2 * time * time * time * time * time + begin;
      } else {
        return change / 2 * ((time -= 2) * time * time * time * time + 2) + begin;
      }
    };
    Easie.sineIn = function(time, begin, change, duration) {
      return -change * Math.cos(time / duration * (Math.PI / 2)) + change + begin;
    };
    Easie.sineOut = function(time, begin, change, duration) {
      return change * Math.sin(time / duration * (Math.PI / 2)) + begin;
    };
    Easie.sineInOut = function(time, begin, change, duration) {
      return -change / 2 * (Math.cos(Math.PI * time / duration) - 1) + begin;
    };
    return Easie;
  })();
}).call(this);
