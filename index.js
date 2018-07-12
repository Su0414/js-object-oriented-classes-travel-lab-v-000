
class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear();
  }
}

class Route{
  constructor(beginningLocation , endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation =  endingLocation
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let start = 0
    let end = 0

    eastWest.forEach(location){

    };
    return (endingLocation.vertical - beginningLocation.vertical) + (end - start)
  }
}
