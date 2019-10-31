describe('Plane', function () {
  var plane;
  var airport;

  beforeEach(function () {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', [
      'clearedForLanding',
      'clearedForTakeOff'
    ]);
  });

  describe('#land', function () {
    it('allows plane to land at airport', function () {
      plane.land(airport);
      expect(airport.clearedForLanding).toHaveBeenCalledWith(plane);
    });
  });

  describe('#takeOff', function () {
    it('allows planes to takeOff from airport', function () {
      plane.land(airport);
      plane.takeOff(airport);
      expect(airport.clearedForTakeOff).toHaveBeenCalledWith(plane);
    })
  })
});
