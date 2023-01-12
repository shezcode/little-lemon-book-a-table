  export default function convertDate(date) {
    const dateArray = date.split('-')
    const year = dateArray[0]
    const month = dateArray[1]
    // change month from number to name
    const nameMonth = new Date(year, month - 1).toLocaleString('en-US', { month: 'long' })
    const day = dateArray[2]
    // change day from 01 to 1
    const dayNumber = parseInt(day)
    // change day from 1 to 1st

    switch(dayNumber) {
      // 1st, 21st, 31st
      case 1:
      case 21:
      case 31:
        return `${dayNumber}st of ${nameMonth}, ${year}`
      // 2nd, 22nd
      case 2:
      case 22:
        return `${dayNumber}nd of ${nameMonth}, ${year}`
      // 3rd, 23rd
      case 3:
      case 23:
        return `${dayNumber}rd of ${nameMonth}, ${year}`
      default:
        return `${dayNumber}th of ${nameMonth}, ${year}`
    }
  }





//had to modify this function because the api that meta gave us was not working in any way shape or form lmao

export const fetchAPI = function(date) {
    let result = [];

    for(let i = 17; i < 23; i++) {
        let random = Math.random();
        if(random < 0.5) {
            result.push(i + ':00');
        }
        if(random < 0.5) {
            result.push(i + ':30');
        }
    }

    return result;
};

//also what the fuck is this even supposed to be doing ???
//i'm assuming it's supposed to be sending the data to the api but it's not doing that either
export const submitAPI = (formData) => {
    return true;
};