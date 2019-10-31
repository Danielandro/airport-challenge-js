var Airport = function () {
  this._hangar = [];
};

Airport.prototype.hangar = function () {
  return this._hangar;
};

Airport.prototype.clearedForLanding = function (plane) {
  this.hangar().push(plane);
  return this.hangar();
};

Airport.prototype.clearedForTakeOff = function (plane) {
  var planeInHangar = this.hangar().indexOf(plane);
  this.hangar().splice(planeInHangar, 1);
  return this.hangar();
}
