var Plane = function() {

};

Plane.prototype.land = function(airport) {
  airport.clearedForLanding(this);
};
