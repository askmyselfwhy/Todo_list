const MonthsNamesReduced = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'June',
  'July',
  'Aug.',
  'Sept.',
  'Oct.',
  'Nov.',
  'Dec.'
]
const DaysNamesReduced = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
]


export const getDateTime = () => {
  let now     = new Date(); 
  let year    = now.getFullYear();
  let month   = now.getMonth(); 
  let day     = now.getDate();
  if(month.toString().length === 1) {
       month = '0'+month;
  }
  if(day.toString().length === 1) {
       day = '0'+day;
  }   
  let dateTime = year+'-'+month+'-'+day;   
   return dateTime;
}

export const getFormatedDate = (_date) => {
  let date    = new Date(_date); 
  let year    = date.getFullYear();
  let month   = date.getMonth(); 
  let day     = date.getDate();
  let dayOfWeek = date.getDay();

  if(day.toString().length === 1) {
    day = '0'+day;
  }   
  let dateString = 
    DaysNamesReduced[dayOfWeek] + ' ' + day + ', ' + 
    MonthsNamesReduced[month]   + ' ' + year;

  return dateString;
}

export const getOutdatedTasks = (tasks) => {
  let date = new Date(Date.now());
  date.setHours(0,0,0,0);
  date.setDate(date.getDate()-1)
  return tasks.filter((item, index) => {
    let taskDate = new Date(item.endDate)
    if(date - taskDate >= 0){
      return true; 
    }
    return false
  })
}
export const getLastIndexOfOutdatedTasks = (tasks) => {
  let date = new Date(Date.now());
  date.setHours(0,0,0,0);
  date.setDate(date.getDate()-1);
  let _index = tasks.findIndex((item, index) => {
    let taskDate = new Date(item.endDate)
    if(date >= taskDate){
      return true; 
    }
    return false
  })
  console.log(_index)
  return _index
}
export const getTodayTasks = (tasks) => {
  let date = new Date();
  date.setHours(0,0,0,0);
  return tasks.filter((item, index) => {
    let taskDate = new Date(item.endDate)
    if(date.getTime() === taskDate.getTime()){
      return true; 
    }
    return false
  })
}
export const getTomorrowTasks = (tasks) => {
  let date = new Date();
  date.setHours(0,0,0,0);
  date.setDate(date.getDate() + 1)
  return tasks.filter((item, index) => {
    let taskDate = new Date(item.endDate)
    if(date.getTime() === taskDate.getTime()){
      return true;
    }
    return false
  })
}
export const getWeekTasks = (tasks) => {
  let date1 = new Date();
  date1.setHours(0,0,0,0);
  date1.setDate(date1.getDate() + 2)
  let date2 = new Date();
  date2.setHours(0,0,0,0);
  date2.setDate(date2.getDate() + 7)
  return tasks.filter((item, index) => {
    let taskDate = new Date(item.endDate)
    if(taskDate >= date1 && taskDate <= date2){
      return true;
    }
    return false
  })
}
export const getOtherTasks = (tasks) => {
  let date = new Date();
  date.setDate(date.getDate() + 7)
  return tasks.filter((item, index) => {
    let taskDate = new Date(item.endDate)
    if(taskDate >= date){
      return true;
    }
    return false
  })
}
