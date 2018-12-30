
/*******************  Solution #1  **************************************************************************************/

function spinalCase(str) {
   return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase(); // Split str if a whitespace character [\s] or underscore character [_] is encountered
                                                               // or is followed by an uppercase letter [(?=[A-Z])]
                                                               // then join the array using a hyphen (-) & lowercase the whole resulting string
}
spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap"); // return "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show"); // return "the-andy-griffith-show"



/*******************  Solution #2  **************************************************************************************/

function spinalCase2(str) {
    // Create a variable for the white space and underscores.
    let regex = /\s+|_+/g;
  
    // Put a space before any encountered uppercase characters in str
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');   
  
    // Replace space and underscore with -
    return str.replace(regex, '-').toLowerCase();
  }







                               
                               
                               
                               
                               
                               
                               
 // Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case/                              
                               
