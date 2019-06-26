describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearedForLanding']);
  });

  it('allows plane to land at airport', function() {
    // expect(plane.land.not.toBeUndefined());
    plane.land(airport);
    expect(airport.clearedForLanding).toHaveBeenCalledWith(plane);
  });
});
