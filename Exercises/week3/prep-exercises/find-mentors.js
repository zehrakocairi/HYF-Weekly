import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */

const possibleMentorsForModule = (moduleName) => {
  return mentors
    .map((mentor) => {
      if (mentor.canTeach.includes(moduleName)) {
        return mentor.name;
      }
    })
    .filter((mentorName) => {
      return mentorName !== undefined;
    });
};

console.log(possibleMentorsForModule("using-apis"));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  let mentorsList = possibleMentorsForModule(moduleName);

  return mentorsList[Math.floor(Math.random() * mentorsList.length)];
};
console.log(findMentorForModule("javascript"));
