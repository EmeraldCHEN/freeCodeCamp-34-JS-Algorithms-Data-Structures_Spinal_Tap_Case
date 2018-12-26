function spinalCase(str) {
   return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap"); // return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); // return "the-andy-griffith-show".
