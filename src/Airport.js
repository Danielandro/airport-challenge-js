var Airport = function () {
  this._hangar = [];
};

Airport.prototype.checkHangar = function () {
  return this._isHangarEmpty();
}

Airport.prototype.clearedForLanding = function (plane) {
  this._hangar.push(plane);
  return "Cleared for landing"
};

Airport.prototype.clearedForTakeOff = function (plane) {
  var planeInHangar = this._hangar.indexOf(plane);
  this._hangar.splice(planeInHangar, 1);
  return "Cleared for takeoff"
}

Airport.prototype._isHangarEmpty = function (hangar) {
  return this._hangar.length === 0 ?
    "No planes in hangar" :
    `${this._hangar.length} plane(s) in hangar`
}
