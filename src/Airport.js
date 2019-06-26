var Airport = function() {
  this._hangar = [];
};

Airport.prototype.hangar = function() {
  return this._hangar;
};

Airport.prototype.clearedForLanding = function(plane) {
  this._hangar.push(plane);
};