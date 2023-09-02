import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {
  let students = getStudentsOfClass(className);
  let mentors = getMentorsOfClass(className);

  let studentObjects = students.map((s) => {
    return {
      name: s.name,
      role: "student",
    };
  });

  let mentorObjects = mentors.map((s) => {
    return {
      name: s.name,
      role: "mentor",
    };
  });

  return [...studentObjects, ...mentorObjects];
};

const getStudentsOfClass = (className) =>
  students.filter((s) => s.class == className);

const getMentorsOfClass = (className) =>
  mentors.filter((m) => m.nowTeaching == getSubjectOfClass(className));

const getSubjectOfClass = (className) => {
  let filteredClasses = classes.filter((c) => c.name == className);
  let currentClass = filteredClasses[0];
  return currentClass.currentModule;
};

console.log(getPeopleOfClass("class34"));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
  let activeClasses = classes.filter((c) => c.active == true);

  let peopleInActiveClasses = {};

  activeClasses.forEach((element) => {
    let activePeople = getPeopleOfClass(element.name);
    peopleInActiveClasses[element.name] = activePeople;
  });
  return peopleInActiveClasses;
};

console.log(getActiveClasses());
