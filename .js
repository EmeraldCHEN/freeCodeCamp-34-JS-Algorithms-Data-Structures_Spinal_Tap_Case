function spinalCase(str) {
   return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase(); // Split str if a whitespace character [\s] or underscore character [_] is encountered
                                                               // or is followed by an uppercase letter [(?=[A-Z])]
                                                               // then join the array using a hyphen (-) & lowercase the whole resulting string
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap"); // return "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show"); // return "the-andy-griffith-show"





                               
                               
                               
                               
                               
                               
                               
 // Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case/                              
                               
