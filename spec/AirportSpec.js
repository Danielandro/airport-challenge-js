describe('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane', ['land']);
  });

  it('has an empty hangar by default', function() {
    expect(airport.hangar()).toEqual([]);
  });

  it('can clear a plane for landing', function() {
    airport.clearedForLanding(plane);
    expect(airport.hangar()).toEqual([plane]);
  });
});
