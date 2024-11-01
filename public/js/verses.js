const techVerses = [
  {
    text: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
    reference: "2 Timothy 1:7",
  },
  {
    text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    reference: "Isaiah 40:31",
  },
  {
    text: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13",
  },
  {
    text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
  },
  // Add more verses as needed
];

document.querySelector(".refresh-verse").addEventListener("click", function () {
  const verse = techVerses[Math.floor(Math.random() * techVerses.length)];
  const verseText = document.querySelector(".verse-text");
  const verseRef = document.querySelector(".text-black/60");

  // Fade out
  verseText.style.opacity = 0;
  verseRef.style.opacity = 0;

  setTimeout(() => {
    verseText.textContent = verse.text;
    verseRef.textContent = verse.reference;

    // Fade in
    verseText.style.opacity = 1;
    verseRef.style.opacity = 1;
  }, 300);
});
