let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

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

  findIndex(avenue){
    return eastWest.indexOf(avenue)
  }
  blocksTravelled(){
    let start = 0
    let end = 0

    start = findIndex(this.beginningLocation.horizontal)
    end = findIndex(this.endingLocation.horizontal)

    return (this.endingLocation.vertical - this.beginningLocation.vertical) + (end - start)
  }



}
