/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      // hours from history
      let hoursToLearnWithSkills = 800;
      let hoursToLearnWithoutSkills = 1300;
      
      //simple condition
      if (knowsProgramming) {
        return Math.ceil(hoursToLearnWithSkills / config[focus]);
      }else {
        return Math.ceil(hoursToLearnWithoutSkills / config[focus]); 
      }

  };
  