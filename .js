function spinalCase(str) {
   return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap"); // return "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show"); // return "the-andy-griffith-show"


Split the string at one of the following conditions (converted to an array)

a whitespace character [\s] is encountered
underscore character [_] is encountered
or is followed by an uppercase letter [(?=[A-Z])]
Join the array using a hyphen (-)
Lowercase the whole resulting string
                               
                               
                               
                               
                               
                               
                               
 // Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case/                              
                               
