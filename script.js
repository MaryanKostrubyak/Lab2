var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var currentName = names[i];
  var firstLetter = currentName.charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    speakGoodBye.speak(currentName);
  } else {
    speakHello.speak(currentName);
  }

  if (currentName.length > 5) {
    console.log("Name " + currentName + " is selected based on length");
  }

  if (currentName.toLowerCase().includes('s')) {
    console.log("Name " + currentName + " is selected based on the presence of letter 's'");
  }
}

