/**
 * Months data
 * @author [Satoshi Ishida]
 */
const months: any = {
  month: {
    "january": { 
      id: "jan",
      title: "January", 
      disabledDays1: ["28","29","30","31"],
      disabledDays2: ["1","2","3","4","5","6","7"],
      days: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20",
             "21","22","23","24","25","26","27","28","29","30","31"], 
      dayLetter: ["M","T","W","T","F","S","S"],
      dayLetters: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      monday: [
        ["Monday"],
        ["4","11","18","25"]
      ],
      tuesday: [
        ["Tuesday"],
        ["5","12","19","26"]
      ],
      wednesday:[
        ["Wednesday"],
        ["6","13","20","27"]
      ],
      thursday: [
        ["Thursday"],
        ["7","14","21","28"]
      ],
      friday: [
        ["Friday"],
        ["1","8","15","22","29"]
      ],
      saturday: [
        ["Saturday"],
        ["2","9","16","23","30"]
      ],
      sunday: [
        ["Sunday"],
        ["3","10","17","24","31"]
      ],
    },
    "february": {
      id: "feb",
      title: "February",
      disabledDays1: [],
      disabledDays2: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14"],
      days: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24",
             "25","26","27","28"], 
      dayLetter: ["M","T","W","T","F","S","S"],
      dayLetters: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      monday: [
        ["Monday"],
        ["1","8","15","22"]
      ],
      tuesday: [
        ["Tuesday"],
        ["2","9","16","23"]
      ],
      wednesday: [
        ["Wednesday"],
        ["3","10","17","24"]
      ],
      thursday: [
        ["Thursday"],
        ["4","11","18","25"]
      ],
      friday: [
        ["Friday"],
        ["5","12","19","26"]
      ],
      saturday: [
        ["Saturday"],
        ["6","13","20","27"]
      ],
      sunday: [
        ["Sunday"],
        ["7","14","21","28"]
      ],
    },
    "march": {
      id: "mar",
      title: "March",
      disabledDays1: [],
      disabledDays2: ["1","2","3","4","5","6","7","8","9","10","11"],
      days: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24",
             "25","26","27","28","29","30","31"],
      dayLetter: ["M","T","W","T","F","S","S"],
      dayLetters: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      monday: [
        ["Monday"],
        ["1","8","15","22","29"]
      ],
      tuesday: [
        ["Tuesday"],
        ["2","9","16","23","30"]
      ],
      wednesday: [
        ["Wednesday"],
        ["3","10","17","24","31"]
      ],
      thursday: [
        ["Thursday"],
        ["4","11","18","25"]
      ],
      friday: [
        ["Friday"],
        ["5","12","19","26"]
      ],
      saturday: [
        ["Saturday"],
        ["6","13","20","27"]
      ],
      sunday: [
        ["Sunday"],
        ["7","14","21","28"]
      ],
    },
    "april": {
      id: "apr",
      title: "April",
      disabledDays1: ["29","30","31"],
      disabledDays2: ["1","2","3","4","5","6","7","8","9"],
      days: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21",
             "22","23","24","25","26","27","28","29","30"], 
      dayLetter: ["M","T","W","T","F","S","S"],
      dayLetters: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      monday: [
        ["Monday"],
        ["5","12","19","26"]
      ],
      tuesday: [
        ["Tuesday"],
        ["6","13","20","27"]
      ],
      wednesday: [
        ["Wednesday"],
        ["7","14","21","28"]
      ],
      thursday: [
        ["Thursday"],
        ["1","8","15","22","29"]
      ],
      friday: [
        ["Friday"],
        ["2","9","16","23","30"]
      ],
      saturday: [
        ["Saturday"],
        ["3","10","17","24"]
      ],
      sunday: [
        ["Sunday"],
        ["4","11","18","25"]
      ],
    },
    "may": {
      id: "may",
      title: "May",
      disabledDays1: ["26","27","28","29","30"],
      disabledDays2: ["1","2","3","4","5","6"],
      days: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
             "20","21","22","23","24","25","26","27","28","29","30","31"], 
      dayLetter: ["M","T","W","T","F","S","S"],
      dayLetters: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      monday: [
        ["Monday"],
        ["3","10","17","24","31"]
      ],
      tuesday: [
        ["Tuesday"],
        ["4","11","18","25"]
      ],
      wednesday: [
        ["Wednesday"],
        ["5","12","19","26"]
      ],
      thursday: [
        ["Thursday"],
        ["6","13","20","27"]
      ],
      friday: [
        ["Friday"],
        ["7","14","21","28"]
      ],
      saturday: [
        ["Saturday"],
        ["1","8","15","22","29"]
      ],
      sunday: [
        ["Sunday"],
        ["2","9","16","23","30"]
      ],
    },
    "june": {
      id: "jun",
      title: "June",
      disabledDays1: ["31"],
      disabledDays2: ["1","2","3","4","5","6","7","8","9","10","11"],
      days: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23",
             "24","25","26","27","28","29","30"], 
      dayLetter: ["M","T","W","T","F","S","S"],
      dayLetters: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      monday: [
        ["Monday"],
        ["7","14","21","28"] 
      ],
      tuesday: [ 
        ["Tuesday"],
        ["1","8","15","22","29"] 
      ],
      wednesday: [ 
        ["Wednesday"],
        ["2","9","16","23","30"] 
      ],
      thursday: [ 
        ["Thursday"],
        ["3","10","17","24"] 
      ],
      friday: [ 
        ["Friday"],
        ["4","11","18","25"] 
      ],
      saturday: [ 
        ["Saturday"],
        ["5","12","19","26"] 
      ],
      sunday: [ 
        ["Sunday"],
        ["6","13","20","27"] 
      ],
    },
    "july": {
      id: "jul",
      title: "July",
      disabledDays1: ["28","29","30"],
      disabledDays2: ["1","2","3","4","5","6","7","8"],
      days: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21",
             "22","23","24","25","26","27","28","29","30","31"], 
      dayLetter: ["M","T","W","T","F","S","S"],
      dayLetters: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      monday: [ 
        ["Monday"],
        ["5","12","19","26"] 
      ],
      tuesday: [ 
        ["Tuesday"],
        ["6","13","20","27"] 
      ],
      wednesday: [ 
        ["Wednesday"],
        ["7","14","21","28"] 
      ],
      thursday: [ 
        ["Thursday"],
        ["1","8","15","22","29"] 
      ],
      friday: [ 
        ["Friday"],
        ["2","9","16","23","30"] 
      ],
      saturday: [ 
        ["Saturday"],
        ["3","10","17","24","31"] 
      ],
      sunday: [ 
        ["Sunday"],
        ["4","11","18","25"] 
      ],
    },
    "august": {
      id: "aug",
      title: "August",
      disabledDays1: ["26","27","28","29","30","31"],
      disabledDays2: ["1","2","3","4","5"],
      days: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18",
             "19","20","21","22","23","24","25","26","27","28","29","30","31"], 
      dayLetter: ["M","T","W","T","F","S","S"],
      dayLetters: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      monday: [ 
        ["Monday"],
        ["2","9","16","23","30"] 
      ],
      tuesday: [ 
        ["Tuesday"],
        ["3","10","17","24","31"] 
      ],
      wednesday: [ 
        ["Wednesday"],
        ["4","11","18","25"] 
      ],
      thursday: [ 
        ["Thursday"],
        ["5","12","19","26"] 
      ],
      friday: [ 
        ["Friday"],
        ["6","13","20","27"] 
      ],
      saturday: [ 
        ["Saturday"],
        ["7","14","21","28"] 
      ],
      sunday: [ 
        ["Sunday"],
        ["1","8","15","22","29"] 
      ],
    },
    "september": {
      id: "sep",
      title: "September",
      disabledDays1: ["30","31"],
      disabledDays2: ["1","2","3","4","5","6","7","8","9","10"],
      days: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22",
             "23","24","25","26","27","28","29","30"],
      dayLetter: ["M","T","W","T","F","S","S"],
      dayLetters: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      monday: [ 
        ["Monday"],
        ["6","13","20","27"] 
      ],
      tuesday: [ 
        ["Tuesday"],
        ["7","14","21","28"] 
      ],
      wednesday: [ 
        ["Wednesday"],
        ["1","8","15","22","29"] 
      ],
      thursday: [ 
        ["Thursday"],
        ["2","9","16","23","30"] 
      ],
      friday: [ 
        ["Friday"],
        ["3","10","17","24"] 
      ],
      saturday: [ 
        ["Saturday"], 
        ["4","11","18","25"] 
      ],
      sunday: [ 
        ["Sunday"],
        ["5","12","19","26"] 
      ],
    },
    "october": {
      id: "oct",
      title: "October",
      disabledDays1: ["27","28","29","30"],
      disabledDays2: ["1","2","3","4","5","6","7"],
      days: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20",
             "21","22","23","24","25","26","27","28","29","30","31"], 
      dayLetter: ["M","T","W","T","F","S","S"],
      dayLetters: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      monday: [ 
        ["Monday"],
        ["4","11","18","25"] 
      ],
      tuesday: [ 
        ["Tuesday"],
        ["5","12","19","26"] 
      ],
      wednesday: [ 
        ["Wednesday"],
        ["6","13","20","27"] 
      ],
      thursday: [ 
        ["Thursday"],
        ["7","14","21","28"] 
      ],
      friday: [ 
        ["Friday"],
        ["1","8","15","22","29"] 
      ],
      saturday: [ 
        ["Saturday"],
        ["2","9","16","23","30"] 
      ],
      sunday: [ 
        ["Sunday"],
        ["3","10","17","24","31"] 
      ],
    },
    "november": {
      id: "nov",
      title: "November",
      disabledDays1: [],
      disabledDays2: ["1","2","3","4","5","6","7","8","9","10","11","12"],
      days: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24",
             "25","26","27","28","29","30"], 
      dayLetter: ["M","T","W","T","F","S","S"],
      dayLetters: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      monday: [ 
        ["Monday"],
        ["1","8","15","22","29"] 
      ],
      tuesday: [ 
        ["Tuesday"],
        ["2","9","16","23","30"] 
      ],
      wednesday: [ 
        ["Wednesday"],
        ["3","10","17","24"] 
      ],
      thursday: [ 
        ["Thursday"],
        ["4","11","18","25"] 
      ],
      friday: [ 
        ["Friday"],
        ["5","12","19","26"] 
      ],
      saturday: [ 
        ["Saturday"],
        ["6","13","20","27"] 
      ],
      sunday: [ 
        ["Sunday"],
        ["7","14","21","28"] 
      ],
    },
    "december": {
      id: "dec",
      title: "December",
      disabledDays1: ["29","30"],
      disabledDays2: ["1","2","3","4","5","6","7","8","9"],
      days: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22",
             "23","24","25","26","27","28","29","30","31"], 
      dayLetter: ["M","T","W","T","F","S","S"],
      dayLetters: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      monday: [ 
        ["Monday"],
        ["6","13","20","27"] 
      ],
      tuesday: [ 
        ["Tuesday"],
        ["7","14","21","28"] 
      ],
      wednesday: [ 
        ["Wednesday"],
        ["1","8","15","22","29"] 
      ],
      thursday: [ 
        ["Thursday"],
        ["2","9","16","23","30"] 
      ],
      friday: [ 
        ["Friday"],
        ["3","10","17","24","31"] 
      ],
      saturday: [ 
        ["Saturday"],
        ["4","11","18","25"] 
      ],
      sunday: [ 
        ["Sunday"],
        ["5","12","19","26"] 
      ],
    },
  },

  outputMonth: [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ],

};

export default months;