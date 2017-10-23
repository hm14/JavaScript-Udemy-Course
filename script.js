// functions returning functions

function getInterviewQuestion(job) {
  if (job === 'Teacher') {
    return function(name) {
      console.log(name + ', what do you know about growth mindset?');
    }
  } else if (job === 'Designer') {
    return function(name) {
      console.log(name + ', what is your design philosophy?');
    }
  } else if (job === 'Web developer') {
    return function(name) {
      console.log(name + ', what is CSRF?');
    }
  } else {
    return function(name) {
      console.log('Hello, ' + name + '. What motivates you?')
    }
  }
}

var teacherQuestion = getInterviewQuestion('Teacher');
teacherQuestion('John');

var designerQuestion = getInterviewQuestion('Designer');
designerQuestion('Jane');

var developerQuestion = getInterviewQuestion('Web developer');
developerQuestion('Joanne');

getInterviewQuestion('Manager')('Mary');
