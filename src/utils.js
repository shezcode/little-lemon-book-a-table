  export default function convertDate(date) {
    const dateArray = date.split('-')
    const year = dateArray[0]
    const month = dateArray[1]
    // change month from number to name
    const nameMonth = new Date(year, month - 1).toLocaleString('en-US', { month: 'long' })
    const day = dateArray[2]
    switch(day) {
      case '01' || '21' || '31':
        return `${day}st of ${nameMonth}, ${year}`
      case '02':
        return `${day}nd of ${nameMonth}, ${year}`
      case '03':
        return `${day}rd of ${nameMonth}, ${year}`
      default:
        return `${day}th of ${nameMonth}, ${year}`
    }
  }
