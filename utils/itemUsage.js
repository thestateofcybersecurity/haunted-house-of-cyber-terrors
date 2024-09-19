export const useItem = (item, room) => {
  const correctItem = room.collectibleItems.find(i => i.name === item.name);

  if (correctItem) {
    return {
      success: true,
      message: `You used ${item.name} successfully! ${correctItem.description}`
    };
  } else {
    const spookyMessages = [
      "The shadows seem to laugh at your mistake...",
      "A chill runs down your spine as you realize your error.",
      "The room grows colder, mocking your incorrect choice.",
      "An eerie whisper tells you to try again...",
      "The flickering lights seem to spell out 'WRONG CHOICE'."
    ];
    const randomMessage = spookyMessages[Math.floor(Math.random() * spookyMessages.length)];
    return {
      success: false,
      message: `${randomMessage} The ${item.name} doesn't seem to work here.`
    };
  }
};
