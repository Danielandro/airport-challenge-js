describe('Feature test:', function () {
  var airport;
  var plane;

  beforeEach(function () {
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at the airport', function () {
    plane.land(airport);
    expect(airport.checkHangar()).toEqual("1 plane(s) in hangar");
  });

  it('planes can take off from an airport', function () {
    plane.land(airport);
    expect(airport.checkHangar()).toEqual("1 plane(s) in hangar");
    plane.takeOff(airport);
    expect(airport.checkHangar()).toEqual("No planes in hangar");
  })
});
