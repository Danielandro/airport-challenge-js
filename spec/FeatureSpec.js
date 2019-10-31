describe('Feature test:', function () {
  var airport;
  var plane;

  beforeEach(function () {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at the airport', function () {
    plane.land(airport);
    expect(airport.hangar()).toContain(plane);
  });

  it('planes can take off from an airport', function () {
    plane.land(airport);
    expect(airport.hangar()).toContain(plane);
    plane.takeOff(airport);
    expect(airport.hangar()).not.toContain(plane);
  })
});
