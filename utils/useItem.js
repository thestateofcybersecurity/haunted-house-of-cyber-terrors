export const useItem = (item, room) => {
  const correctItem = room.collectibleItems.find(i => i.name === item.name);

  // Function to generate dynamic spooky messages
  const generateSpookyMessage = (itemName, roomName) => {
    const spookyPrefixes = [
      "The shadows deepen as", 
      "A chill runs down your spine when", 
      "You hear a faint, eerie whisper saying",
      "The room darkens and", 
      "A cold breeze sends shivers down your back as",
      "The floor creaks beneath you while", 
      "A ghostly wail echoes as", 
      "The walls seem to close in as", 
      "An invisible force pulls at you while", 
      "A dark mist swirls as",
      "The temperature drops suddenly as", 
      "A strange sound reverberates through the air when", 
      "The lights flicker violently as", 
      "The room trembles when", 
      "You feel an unsettling presence as", 
      "A distant scream fills the air when", 
      "A cold hand brushes your arm as", 
      "You feel a sudden pressure in your chest when", 
      "A deep growl echoes from the shadows as", 
      "The walls drip with moisture as", 
      "An unseen entity moves past you while", 
      "The ground trembles beneath your feet as", 
      "The air feels heavy and oppressive as", 
      "You sense an ominous presence while", 
      "A disembodied voice whispers, 'wrong choice,' as", 
      "A flicker of movement in the corner of your eye appears as", 
      "A shadow moves along the wall as", 
      "The hairs on your neck stand on end when", 
      "A haunting melody plays softly as", 
      "You hear footsteps behind you, but no one is there as", 
      "The room feels like it's closing in when", 
      "You see ghostly figures in the fog as", 
      "The floor beneath you feels unstable as", 
      "An eerie wind howls through the room as", 
      "The atmosphere thickens with dread when", 
      "You hear chains rattling faintly as", 
      "The room pulses with a sinister energy as", 
      "A sudden flash of light reveals", 
      "A swarm of whispers surround you as", 
      "The sound of glass shattering breaks the silence as", 
      "The air feels stagnant and suffocating as", 
      "Your breath fogs in the cold air as", 
      "The scent of decay fills the room as", 
      "You hear a door slam shut in the distance as", 
      "A twisted laugh echoes through the room when", 
      "A spectral figure floats past as", 
      "You feel a chill run down your spine as", 
      "A dismal fog envelops you while", 
      "The sound of distant thunder crashes as", 
      "The room is engulfed in an eerie silence when"
    ];

    const spookyOutcomes = [
      "the item dissolves into the void.", 
      "your hand trembles, but nothing happens.", 
      "it crumbles into dust before your eyes.", 
      "it fades from existence, leaving no trace.", 
      "it shatters into pieces, powerless in this realm.", 
      "it flickers briefly, then vanishes without effect.", 
      "the room's darkness swallows it whole.", 
      "it evaporates into a mist, useless here.", 
      "the shadows laugh at your feeble attempt.", 
      "it becomes heavier and slips through your fingers.", 
      "its energy fades, leaving you vulnerable.", 
      "a mocking laugh echoes as it disappears.", 
      "it turns to stone and crumbles to the ground.", 
      "a cold wind sweeps it away, leaving nothing.", 
      "it vanishes in a flash of light, achieving nothing.", 
      "the room consumes it, rendering it useless.", 
      "it breaks apart, its power drained.", 
      "a dark force repels it, casting it aside.", 
      "it dissipates into thin air.", 
      "its glow fades, leaving you in darkness.", 
      "it burns out, offering no protection.", 
      "a strange force pushes it from your hand.", 
      "it disintegrates with a whisper of failure.", 
      "it warps and twists, disappearing into a black hole.", 
      "the walls seem to absorb it, erasing its presence.", 
      "it flickers once before going dark.", 
      "the item fades, as if it never existed.", 
      "it vibrates violently, then vanishes.", 
      "the cold air snuffs out its power.", 
      "the item collapses in on itself.", 
      "it glows faintly before disappearing entirely.", 
      "it fractures with a loud crack, breaking apart.", 
      "the room swallows it, leaving you with nothing.", 
      "it turns to smoke and is gone.", 
      "a gust of wind sweeps it out of your grasp.", 
      "it explodes into dust, disappearing into the shadows.", 
      "its energy is drained away by an unseen force.", 
      "it warps and vanishes before your eyes.", 
      "it is pulled into the floor, vanishing into darkness.", 
      "it falls to the floor, inert and useless.", 
      "it hums briefly, then fades out of existence.", 
      "it turns into shadow and dissipates.", 
      "it is swallowed by the darkness, offering no help.", 
      "it flickers and dissolves into the ether.", 
      "its light dies, and it disintegrates into nothing.", 
      "the item slips from your grasp, disappearing.", 
      "a flash of light consumes it, leaving nothing behind.", 
      "it crumbles, leaving behind a faint echo of failure.", 
      "the item seems to melt away, leaving no trace."
    ];

    const prefix = spookyPrefixes[Math.floor(Math.random() * spookyPrefixes.length)];
    const outcome = spookyOutcomes[Math.floor(Math.random() * spookyOutcomes.length)];

    return `${prefix} the ${itemName} in ${roomName} ${outcome}`;
  };

  if (correctItem) {
    return {
      success: true,
      message: `You used ${item.name} successfully! ${correctItem.description}`
    };
  } else {
    // Generate messages for incorrect items
    const randomIncorrectMessage = generateSpookyMessage(item.name, room.title);

    return {
      success: false,
      message: randomIncorrectMessage
    };
  }
};
