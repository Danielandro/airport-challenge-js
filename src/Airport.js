var Airport = function () {
  this._hangar = [];
};

Airport.prototype.hangar = function () {
  return this._hangar;
};

Airport.prototype.checkHangar = function () {
  return this._isHangarEmpty();
}

Airport.prototype.clearedForLanding = function (plane) {
  this._hangar.push(plane);
  return "Cleared for landing"
};

Airport.prototype.clearedForTakeOff = function (plane) {
  var planeInHangar = this.hangar().indexOf(plane);
  this.hangar().splice(planeInHangar, 1);
  return "Cleared for takeoff"
}

Airport.prototype._isHangarEmpty = function (hangar) {
  return this.hangar().length === 0 ?
    "No planes in hangar" :
    `${this.hangar().length} plane(s) in hangar`
}
