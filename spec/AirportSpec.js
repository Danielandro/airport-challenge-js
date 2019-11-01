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

    it('errors if plane already at airport', function () {
      airport.clearedForLanding(plane);
      expect(() => airport.clearedForLanding(plane)).toThrow("Plane cannot land. Already in hangar");
    })
  })

  describe('#clearedForTakeOff', function () {
    it('can clear a plane for takeOff', function () {
      airport.clearedForLanding(plane);
      expect(airport.clearedForTakeOff(plane)).toEqual("Cleared for takeoff");
    })

    it('errors if plane not at aiport', function () {
      expect(() => airport.clearedForTakeOff(plane)).toThrow("Plane cannot takeoff. Not in hangar")
    })
  })
});

// describe('', );