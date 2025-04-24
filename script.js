const emojiDictionary = {
    "😀": "Grinning Face",
    "😂": "Face with Tears of Joy",
    "❤️": "Red Heart",
    "🔥": "Fire",
    "😢": "Crying Face",
    "🤔": "Thinking Face",
    "😎": "Smiling Face with Sunglasses",
    "🎉": "Party Popper",
    "👍": "Thumbs Up"
  };
  
  const input = document.getElementById("emoji-input");
  const meaning = document.getElementById("meaning");
  const emojiList = document.getElementById("emoji-list");
  
  // Display emojis on page
  Object.keys(emojiDictionary).forEach(emoji => {
    let span = document.createElement("span");
    span.textContent = emoji;
    span.addEventListener("click", () => {
      meaning.textContent = emojiDictionary[emoji];
    });
    emojiList.appendChild(span);
  });
  
  // Input event handler
  input.addEventListener("input", (event) => {
    const userInput = event.target.value;
    if (emojiDictionary[userInput]) {
      meaning.textContent = emojiDictionary[userInput];
    } else {
      meaning.textContent = "We don't know this emoji 😕";
    }
  });
  