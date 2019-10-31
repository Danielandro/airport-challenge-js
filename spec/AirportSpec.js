describe('Airport', function () {
  var airport;

  beforeEach(function () {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane', [
      'land',
      'takeOff'
    ]);
  });

  it('has an empty hangar by default', function () {
    expect(airport.checkHangar()).toEqual("No planes in hangar");
  });

  describe('#clearedForLanding', function () {
    it('can clear a plane for landing', function () {
      expect(airport.clearedForLanding(plane)).toEqual("Cleared for landing");
    });
  })

  describe('#clearedForTakeOff', function () {
    it('can clear a plane for takeOff', function () {
      airport.clearedForLanding(plane);
      expect(airport.clearedForTakeOff(plane)).toEqual("Cleared for takeoff");
    })
  })
});

// describe('', );