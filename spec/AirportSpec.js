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
    expect(airport.hangar()).toEqual([]);
  });

  describe('#clearedForLanding', function () {
    it('can clear a plane for landing', function () {
      airport.clearedForLanding(plane);
      expect(airport.hangar()).toEqual([plane]);
    });
  })

  describe('#clearedForTakeOff', function () {
    it('can clear a plane for takeOff', function () {
      airport.clearedForLanding(plane);
      airport.clearedForTakeOff(plane);
      expect(airport.hangar()).not.toContain(plane);
    })
  })
});

// describe('', );