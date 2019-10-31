var Plane = function () {

};

Plane.prototype.land = function (airport) {
  airport.clearedForLanding(this);
  return `Landed at airport`
};

Plane.prototype.takeOff = function (airport) {
  airport.clearedForTakeOff(this);
  return `Departed from airport`
}
