const facts = [
    {
      fact: "Although the setting is fictional Maine, exterior shots of Cabot Cove were filmed in Mendocino, California, and scenes also appear on Universal Studios’ Jaws lake backlot tour.",
      source: "https://www.remindmagazine.com/article/20100/murder-she-wrote-angela-lansbury-fun-fact-things-you-didnt-know-trivia/?utm_source=chatgpt.com"
    },
    {
      fact: "Angela Lansbury’s character, Jessica Fletcher, is officially recognized as the most prolific amateur sleuth in TV history—having solved more cases than any other fictional detective—as per Guinness .",
      source: "https://en.wikipedia.org/wiki/Jessica_Fletcher"
    },
    {
      fact: "The show ran 12 seasons (1984–1996) and produced 264 episodes, plus 4 TV movies .'",
      source: "https://en.wikipedia.org/wiki/Murder%2C_She_Wrote"
    },
    {
      fact: "Jessica’s given middle name, Beatrice, was a nod to Angela Lansbury’s dear friend and Mame co‑star Bea Arthur.",
      source: "https://interestingfacts.com/murder-she-wrote-facts/"
    },
    {
      fact: "In the pilot episode titled 'The Murder of Sherlock Holmes,' Jessica Fletcher debuts as author J.B. Fletcher, whose first novel, The Corpse Danced at Midnight, launches her crime‑solving journey.",
      source: "https://en.wikipedia.org/wiki/Murder%2C_She_Wrote"
    
    },
    {
      fact: "Throughout the series, Jessica never learns to drive—she’s always seen commuting via bicycle, taxi, or rides from local friends or law enforcement.",
      source: "https://www.hallmarkmystery.com/murder-she-wrote/trivia"
    },
    {
      fact: "The creators first pitched a concept starring a retired magician-turned-sleuth. When networks asked for a female lead, Jessica Fletcher was born instead.",
      source: "https://www.csmonitor.com/1988/0419/umurd-f.html"
    },
    {
      fact: "Angela Lansbury had played two Agatha Christie characters before. Before portraying Jessica, Lansbury had appeared in Death on the Nile (Salome Otterbourne) and played Miss Marple in The Mirror Crack’d (1980), giving her strong Christie credentials.",
      source: "https://people.com/tv/how-angela-lansbury-landed-her-murder-she-wrote-role-exclusive/"
    },
        {
      fact: "For most of its run the series aired Sundays, but in Season 12, it was moved to Thursdays—directly competing with Friends. The change caused the show’s ratings to plummet dramatically—from top‑10 to No. 58—so it briefly aired in both slots.",
      source: "https://www.remindmagazine.com/article/20100/murder-she-wrote-angela-lansbury-fun-fact-things-you-didnt-know-trivia/"
    },
        {
      fact: "Several official novels starring Jessica Fletcher have been published (ghostwritten under her name), and two point‑and‑click video games were released in 2009 and 2012—both using Lansbury’s likeness (but not her voice).",
      source: "https://www.mentalfloss.com/article/503317/9-mysterious-facts-about-murder-she-wrote"
    },
            {
      fact: "Lansbury earned 12 consecutive Emmy nominations for Outstanding Lead Actress in a Drama, one for each season—but never won. She holds the record both for nominations and wins at the Golden Globes in that category.",
      source: "https://en.wikipedia.org/wiki/Murder%2C_She_Wrote"
    }
  ];

  const randomFact = facts[Math.floor(Math.random() * facts.length)];

  document.getElementById("fact").textContent = randomFact.fact;
  document.getElementById("source").href = randomFact.source;