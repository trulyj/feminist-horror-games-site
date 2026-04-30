(function () {

const GAMES = [{"title": "A Plague Tale: Innocence", "year": 2019, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 4, "themes": ["embodiment", "captivity", "violence", "girlhoodhorror"], "creed": "Monstrous Womb", "damsel": "Yes", "female_antagonist": "No"}, {"title": "Alice: Madness Returns", "year": 2011, "genre": "psychological horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 6, "themes": ["trauma_and_mental_illness", "embodiment", "captivity", "violence", "sexualized_violence", "girlhoodhorror"], "creed": "Femme Castarice", "damsel": "No", "female_antagonist": "No"}, {"title": "Alien: Isolation", "year": 2014, "genre": "survival horror", "perspective": "first-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 2, "themes": ["motherhood", "violence"], "creed": "Archaic Mother", "damsel": "No", "female_antagonist": "No"}, {"title": "American McGee's Alice", "year": 2000, "genre": "adventure horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 5, "themes": ["trauma_and_mental_illness", "embodiment", "captivity", "violence", "girlhoodhorror"], "creed": null, "damsel": "No", "female_antagonist": "Yes"}, {"title": "Amnesia: Rebirth", "year": 2020, "genre": "survival horror", "perspective": "first-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 4, "themes": ["motherhood", "trauma_and_mental_illness", "embodiment", "violence"], "creed": "Monstrous Womb", "damsel": "Yes", "female_antagonist": "Yes"}, {"title": "Amy", "year": 2012, "genre": "survival horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 3, "themes": ["motherhood", "embodiment", "girlhoodhorror"], "creed": "Witch", "damsel": "No", "female_antagonist": "No"}, {"title": "Anchorhead", "year": null, "genre": "lovecraftian horror", "perspective": "unknown", "female_dev": "FALSE", "female_protag": "Yes", "theme_count": 3, "themes": ["motherhood", "domesticity", "violence"], "creed": "Monstrous Womb", "damsel": "No", "female_antagonist": "No"}, {"title": "Araya", "year": 2016, "genre": "adventure horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 3, "themes": ["motherhood", "trauma_and_mental_illness", "violence"], "creed": "Femme Castarice, Monstrous Womb", "damsel": "No", "female_antagonist": "Yes"}, {"title": "BloodRayne", "year": 2002, "genre": "adventure horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 3, "themes": ["embodiment", "violence", "woman_as_monster"], "creed": "Vampire, Archaic Mother", "damsel": "No", "female_antagonist": "No"}, {"title": "Clock Tower", "year": 1995, "genre": "survival horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 3, "themes": ["captivity", "violence", "girlhoodhorror"], "creed": "Monstrous Mother, Monstrous Womb", "damsel": "No", "female_antagonist": "Yes"}, {"title": "Clock Tower 3", "year": 2002, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 4, "themes": ["motherhood", "embodiment", "violence", "girlhoodhorror"], "creed": "Witch", "damsel": "Yes", "female_antagonist": "No"}, {"title": "Clock Tower II: The Struggle Within", "year": 1998, "genre": "survival horror", "perspective": "unknown", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 4, "themes": ["trauma_and_mental_illness", "embodiment", "violence", "girlhoodhorror"], "creed": "Possessed Body, Monstrous Womb", "damsel": "No", "female_antagonist": "No"}, {"title": "D", "year": 1995, "genre": "adventure horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 2, "themes": ["violence", "woman_as_monster"], "creed": "Vampire, Monstrous Womb", "damsel": "No", "female_antagonist": "No"}, {"title": "Deadly Premonition 2: A Blessing in Disguise", "year": 2020, "genre": "survival horror", "perspective": "point-and-click", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 9, "themes": ["motherhood", "trauma_and_mental_illness", "embodiment", "captivity", "violence", "sexualized_violence", "girlhoodhorror", "woman_as_monster", "queer_themes"], "creed": "Archaic Mother, Possessed Body", "damsel": "Yes", "female_antagonist": "Yes"}, {"title": "Detention", "year": 2017, "genre": "adventure horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 3, "themes": ["trauma_and_mental_illness", "violence", "girlhoodhorror"], "creed": "Femme Castarice", "damsel": "No", "female_antagonist": "No"}, {"title": "Devotion", "year": 2019, "genre": "psychological horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "No", "theme_count": 5, "themes": ["motherhood", "domesticity", "trauma_and_mental_illness", "captivity", "girlhoodhorror"], "creed": null, "damsel": "No", "female_antagonist": "No"}, {"title": "Doki Doki Literature Club!", "year": 2017, "genre": "psychological horror", "perspective": "first-person", "female_dev": "TRUE", "female_protag": "No", "theme_count": 3, "themes": ["trauma_and_mental_illness", "violence", "girlhoodhorror"], "creed": null, "damsel": "No", "female_antagonist": "Yes"}, {"title": "Echo Night: Beyond", "year": 2004, "genre": "survival horror", "perspective": "first-person", "female_dev": "TRUE", "female_protag": "No", "theme_count": 1, "themes": ["embodiment"], "creed": null, "damsel": "Yes", "female_antagonist": "No"}, {"title": "Emily Wants to Play", "year": 2015, "genre": "survival horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "No", "theme_count": 5, "themes": ["trauma_and_mental_illness", "captivity", "violence", "girlhoodhorror", "woman_as_monster"], "creed": "Witch", "damsel": "No", "female_antagonist": "Yes"}, {"title": "Eternal Darkness: Sanity\u2019s Requiem", "year": 2002, "genre": "lovecraftian horror", "perspective": "third-person", "female_dev": "TRUE", "female_protag": "Unknown", "theme_count": 2, "themes": ["embodiment", "violence"], "creed": "Archaic Mother", "damsel": "No", "female_antagonist": "No"}, {"title": "FAITH: The Unholy Trinity", "year": 2017, "genre": "survival horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "No", "theme_count": 3, "themes": ["trauma_and_mental_illness", "violence", "woman_as_monster"], "creed": "Archaic Mother, Monstrous Womb", "damsel": "Yes", "female_antagonist": "Yes"}, {"title": "Fatal Frame", "year": 2001, "genre": "survival horror", "perspective": "third-person", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 3, "themes": ["trauma_and_mental_illness", "embodiment", "violence"], "creed": "Archaic Mother, Possessed Body", "damsel": "No", "female_antagonist": "Yes"}, {"title": "Fatal Frame II: Crimson Butterfly", "year": 2003, "genre": "survival horror", "perspective": "third-person", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 4, "themes": ["embodiment", "violence", "girlhoodhorror", "woman_as_monster"], "creed": null, "damsel": "No", "female_antagonist": "Yes"}, {"title": "Fatal Frame III: The Tormented", "year": 2005, "genre": "survival horror", "perspective": "third-person", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 2, "themes": ["embodiment", "violence"], "creed": "Archaic Mother", "damsel": "No", "female_antagonist": "Yes"}, {"title": "Fatal Frame IV: Mask of the Lunar Eclipse", "year": 2008, "genre": "survival horror", "perspective": "first-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 4, "themes": ["embodiment", "captivity", "violence", "girlhoodhorror"], "creed": "Archaic Mother", "damsel": "No", "female_antagonist": "Yes"}, {"title": "Fatal Frame V: Maiden of Black Water", "year": 2014, "genre": "survival horror", "perspective": "first-person", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 4, "themes": ["motherhood", "trauma_and_mental_illness", "embodiment", "violence"], "creed": "Femme Castarice", "damsel": "No", "female_antagonist": "Yes"}, {"title": "Forbidden Siren 2", "year": 2006, "genre": "survival horror", "perspective": "unknown", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 7, "themes": ["motherhood", "trauma_and_mental_illness", "embodiment", "captivity", "violence", "girlhoodhorror", "woman_as_monster"], "creed": "Archaic Mother, Monstrous Womb", "damsel": "No", "female_antagonist": "Yes"}, {"title": "Fran Bow", "year": 2015, "genre": "psychological horror", "perspective": "unknown", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 6, "themes": ["trauma_and_mental_illness", "embodiment", "captivity", "violence", "girlhoodhorror", "woman_as_monster"], "creed": "Archaic Mother", "damsel": "No", "female_antagonist": null}, {"title": "Haunting Ground", "year": 2005, "genre": "survival horror", "perspective": "unknown", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 5, "themes": ["motherhood", "embodiment", "captivity", "violence", "sexualized_violence"], "creed": "Monstrous Womb", "damsel": "No", "female_antagonist": null}, {"title": "Ib", "year": 2012, "genre": "adventure horror", "perspective": "top-down", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 3, "themes": ["captivity", "violence", "girlhoodhorror"], "creed": "Witch", "damsel": "No", "female_antagonist": "Yes"}, {"title": "Koudelka", "year": 1999, "genre": "horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 5, "themes": ["motherhood", "embodiment", "violence", "girlhoodhorror", "woman_as_monster"], "creed": "Possessed Body", "damsel": "No", "female_antagonist": "Yes"}, {"title": "Layers of Fear", "year": 2016, "genre": "psychological horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "No", "theme_count": 4, "themes": ["motherhood", "domesticity", "trauma_and_mental_illness", "embodiment"], "creed": "Femme Castarice", "damsel": "TRUE", "female_antagonist": null}, {"title": "Layers of Fear 2", "year": 2019, "genre": "psychological horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "No", "theme_count": 5, "themes": ["domesticity", "trauma_and_mental_illness", "embodiment", "violence", "sexualized_violence"], "creed": "Monstrous Mother", "damsel": "TRUE", "female_antagonist": null}, {"title": "Life Weaver", "year": 2012, "genre": "survival horror", "perspective": "unknown", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 1, "themes": ["violence"], "creed": null, "damsel": "FALSE", "female_antagonist": null}, {"title": "Little Goody Two Shoes", "year": 2023, "genre": "adventure horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 2, "themes": ["girlhoodhorror", "woman_as_monster"], "creed": "Witch", "damsel": "FALSE", "female_antagonist": null}, {"title": "Little Misfortune", "year": 2019, "genre": "adventure horror", "perspective": "unknown", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 4, "themes": ["motherhood", "domesticity", "trauma_and_mental_illness", "girlhoodhorror"], "creed": null, "damsel": "FALSE", "female_antagonist": null}, {"title": "Little Nightmares", "year": 2017, "genre": "survival horror", "perspective": "unknown", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 2, "themes": ["captivity", "girlhoodhorror"], "creed": "Possessed Body", "damsel": "FALSE", "female_antagonist": null}, {"title": "Mad Father", "year": 2012, "genre": "survival horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 5, "themes": ["motherhood", "domesticity", "captivity", "violence", "girlhoodhorror"], "creed": null, "damsel": "FALSE", "female_antagonist": null}, {"title": "Maid of Sker", "year": 2020, "genre": "psychological horror", "perspective": "first-person", "female_dev": "unlisted", "female_protag": "No", "theme_count": 3, "themes": ["motherhood", "domesticity", "captivity"], "creed": "Possessed Body", "damsel": "TRUE", "female_antagonist": null}, {"title": "Martha Is Dead", "year": 2022, "genre": "psychological thriller", "perspective": "first-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 5, "themes": ["motherhood", "trauma_and_mental_illness", "embodiment", "violence", "woman_as_monster"], "creed": null, "damsel": "FALSE", "female_antagonist": null}, {"title": "Milk Inside a Bag of Milk Inside a Bag of Milk", "year": 2020, "genre": "psychological horror", "perspective": "first-person", "female_dev": "FALSE", "female_protag": "Yes", "theme_count": 2, "themes": ["motherhood", "trauma_and_mental_illness"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "Milk Outside a Bag of Milk Outside a Bag of Milk", "year": 2021, "genre": "psychological horror", "perspective": "first-person", "female_dev": "FALSE", "female_protag": "Yes", "theme_count": 1, "themes": ["trauma_and_mental_illness"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "Misao", "year": 2011, "genre": "survival horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 2, "themes": ["violence", "sexualized_violence"], "creed": "Possessed Body", "damsel": null, "female_antagonist": null}, {"title": "Outlast 2", "year": 2017, "genre": "survival horror", "perspective": "first-person", "female_dev": "unlisted", "female_protag": "No", "theme_count": 7, "themes": ["motherhood", "trauma_and_mental_illness", "embodiment", "captivity", "violence", "sexualized_violence", "girlhoodhorror"], "creed": "Femme Castarice", "damsel": null, "female_antagonist": null}, {"title": "Oxenfree II: Lost Signals", "year": 2023, "genre": "supernatural horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 4, "themes": ["motherhood", "trauma_and_mental_illness", "captivity", "girlhoodhorror"], "creed": "Possessed Body", "damsel": null, "female_antagonist": null}, {"title": "Phantasmagoria", "year": 1995, "genre": "adventure horror", "perspective": "point-and-click", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 5, "themes": ["domesticity", "trauma_and_mental_illness", "embodiment", "violence", "sexualized_violence"], "creed": "Possessed Body", "damsel": null, "female_antagonist": null}, {"title": "Remothered: Broken Porcelain", "year": 2020, "genre": "survival horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 8, "themes": ["motherhood", "domesticity", "trauma_and_mental_illness", "embodiment", "captivity", "violence", "sexualized_violence", "queer_themes"], "creed": "Possessed Body", "damsel": null, "female_antagonist": null}, {"title": "Remothered: Tormented Fathers", "year": 2018, "genre": "survival horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 7, "themes": ["motherhood", "domesticity", "trauma_and_mental_illness", "embodiment", "captivity", "violence", "queer_themes"], "creed": "Possessed Body", "damsel": null, "female_antagonist": null}, {"title": "Resident Evil 2", "year": 2019, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 5, "themes": ["motherhood", "trauma_and_mental_illness", "embodiment", "captivity", "violence"], "creed": "Monstrous Mother", "damsel": null, "female_antagonist": null}, {"title": "Resident Evil 3: Nemesis", "year": 1999, "genre": "survival horror", "perspective": "third-person", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 3, "themes": ["embodiment", "captivity", "violence"], "creed": "Monstrous Mother", "damsel": null, "female_antagonist": null}, {"title": "Resident Evil 4", "year": 2005, "genre": "survival horror", "perspective": "third-person", "female_dev": "TRUE", "female_protag": "No", "theme_count": 5, "themes": ["motherhood", "trauma_and_mental_illness", "embodiment", "captivity", "girlhoodhorror"], "creed": "Witch", "damsel": null, "female_antagonist": null}, {"title": "Resident Evil 5", "year": 2009, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 2, "themes": ["embodiment", "captivity"], "creed": "Monstrous Mother", "damsel": null, "female_antagonist": null}, {"title": "Resident Evil: Code Veronica", "year": 2000, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 3, "themes": ["domesticity", "embodiment", "captivity"], "creed": "Monstrous Mother", "damsel": null, "female_antagonist": null}, {"title": "Rule of Rose", "year": 2006, "genre": "survival horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 5, "themes": ["trauma_and_mental_illness", "embodiment", "captivity", "violence", "girlhoodhorror"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "Scarlet Hollow", "year": 2021, "genre": "horror", "perspective": "visual novel", "female_dev": "TRUE", "female_protag": "No", "theme_count": 5, "themes": ["motherhood", "domesticity", "embodiment", "captivity", "violence"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "Scorn", "year": 2022, "genre": "survival horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "No", "theme_count": 2, "themes": ["embodiment", "queer_themes"], "creed": "Archaic Mother", "damsel": null, "female_antagonist": null}, {"title": "Senua's Saga: Hellblade II", "year": 2024, "genre": "psychological horror", "perspective": "unknown", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 3, "themes": ["motherhood", "trauma_and_mental_illness", "embodiment"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "Shadows of the Damned", "year": 2011, "genre": "psychological horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "No", "theme_count": 3, "themes": ["captivity", "violence", "woman_as_monster"], "creed": null, "damsel": "TRUE", "female_antagonist": null}, {"title": "Signalis", "year": 2022, "genre": "survival horror", "perspective": "top-down", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 2, "themes": ["embodiment", "queer_themes"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "Silent Hill", "year": 1999, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "No", "theme_count": 3, "themes": ["motherhood", "embodiment", "girlhoodhorror"], "creed": "Monstrous Mother", "damsel": null, "female_antagonist": null}, {"title": "Silent Hill 2", "year": 2001, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "No", "theme_count": 7, "themes": ["motherhood", "domesticity", "trauma_and_mental_illness", "embodiment", "captivity", "violence", "sexualized_violence"], "creed": "Monstrous Mother", "damsel": null, "female_antagonist": null}, {"title": "Silent Hill 3", "year": 2003, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 4, "themes": ["motherhood", "embodiment", "violence", "girlhoodhorror"], "creed": "Archaic Mother, Monstrous Mother", "damsel": null, "female_antagonist": null}, {"title": "Silent Hill 4: The Room", "year": 2004, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "No", "theme_count": 4, "themes": ["motherhood", "trauma_and_mental_illness", "embodiment", "violence"], "creed": "Possessed Body", "damsel": null, "female_antagonist": null}, {"title": "Silent Hill: Origins", "year": 2007, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "No", "theme_count": 7, "themes": ["motherhood", "domesticity", "trauma_and_mental_illness", "embodiment", "captivity", "violence", "girlhoodhorror"], "creed": "Archaic Mother, Monstrous Womb", "damsel": null, "female_antagonist": null}, {"title": "Silent Hill: Shattered Memories", "year": 2009, "genre": "survival horror", "perspective": "first-person", "female_dev": "FALSE", "female_protag": "No", "theme_count": 4, "themes": ["motherhood", "domesticity", "trauma_and_mental_illness", "embodiment"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "Silent Hill: The Short Message", "year": 2024, "genre": "psychological horror", "perspective": "unknown", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 8, "themes": ["motherhood", "domesticity", "trauma_and_mental_illness", "embodiment", "captivity", "violence", "girlhoodhorror", "woman_as_monster"], "creed": "Monstrous Mother, Witch", "damsel": null, "female_antagonist": null}, {"title": "Siren: Blood Curse", "year": 2008, "genre": "survival horror", "perspective": "third-person", "female_dev": "TRUE", "female_protag": "No", "theme_count": 5, "themes": ["motherhood", "embodiment", "captivity", "violence", "girlhoodhorror"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "Slender: The Arrival", "year": 2013, "genre": "survival horror", "perspective": "first-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 2, "themes": ["trauma_and_mental_illness", "captivity"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "Sorry We're Closed", "year": 2024, "genre": "survival horror", "perspective": "first-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 3, "themes": ["embodiment", "woman_as_monster", "queer_themes"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "The 7th Guest", "year": 1993, "genre": "adventure horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "No", "theme_count": 1, "themes": ["violence"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "The Cat Lady", "year": 2012, "genre": "adventure horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 5, "themes": ["motherhood", "domesticity", "trauma_and_mental_illness", "captivity", "violence"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "The Dark Pictures: Switchback VR", "year": 2023, "genre": "horror", "perspective": "unknown", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 1, "themes": ["woman_as_monster"], "creed": "Femme Castarice", "damsel": null, "female_antagonist": null}, {"title": "The Dishwasher: Vampire Smile", "year": 2011, "genre": "psychological horror", "perspective": "side-scroll", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 4, "themes": ["trauma_and_mental_illness", "embodiment", "captivity", "violence"], "creed": "Possessed Body", "damsel": null, "female_antagonist": null}, {"title": "The Evil Within 2", "year": 2017, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "No", "theme_count": 3, "themes": ["motherhood", "captivity", "violence"], "creed": "Archaic Mother", "damsel": null, "female_antagonist": null}, {"title": "The Last of Us", "year": 2013, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 4, "themes": ["trauma_and_mental_illness", "captivity", "girlhoodhorror", "queer_themes"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "The Last of Us Part II", "year": 2020, "genre": "survival horror", "perspective": "third-person", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 5, "themes": ["motherhood", "trauma_and_mental_illness", "captivity", "girlhoodhorror", "queer_themes"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "The Medium", "year": 2021, "genre": "psychological horror", "perspective": "third-person", "female_dev": "FALSE", "female_protag": "Yes", "theme_count": 3, "themes": ["violence", "girlhoodhorror", "woman_as_monster"], "creed": "Femme Castarice", "damsel": null, "female_antagonist": null}, {"title": "The Mortuary Assistant", "year": 2022, "genre": "horror", "perspective": "first-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 4, "themes": ["motherhood", "trauma_and_mental_illness", "embodiment", "captivity"], "creed": "Possessed Body", "damsel": null, "female_antagonist": null}, {"title": "The Path", "year": 2009, "genre": "psychological horror", "perspective": "first-person", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 1, "themes": ["girlhoodhorror"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "The Tartarus Key", "year": 2023, "genre": "adventure horror", "perspective": "first-person", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 1, "themes": ["captivity"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "The Town of Light", "year": 2016, "genre": "psychological horror", "perspective": "unknown", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 6, "themes": ["motherhood", "domesticity", "trauma_and_mental_illness", "sexualized_violence", "girlhoodhorror", "queer_themes"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "The Walking Dead", "year": 2012, "genre": "graphic adventure", "perspective": "point-and-click", "female_dev": "unlisted", "female_protag": "No", "theme_count": 1, "themes": ["girlhoodhorror"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "The Walking Dead: Season Two", "year": 2013, "genre": "graphic adventure", "perspective": "point-and-click", "female_dev": "TRUE", "female_protag": "Unknown", "theme_count": 4, "themes": ["motherhood", "captivity", "violence", "girlhoodhorror"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "The Walking Dead: The Final Season", "year": 2018, "genre": "adventure horror", "perspective": "point-and-click", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 5, "themes": ["trauma_and_mental_illness", "captivity", "violence", "girlhoodhorror", "queer_themes"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "The Witch\u2019s House", "year": 2012, "genre": "adventure horror", "perspective": "birds-eye view", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 3, "themes": ["embodiment", "girlhoodhorror", "woman_as_monster"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "Theresia", "year": 2008, "genre": "psychological horror", "perspective": "first-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 5, "themes": ["motherhood", "embodiment", "captivity", "violence", "girlhoodhorror"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "Tormented Souls", "year": 2021, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 5, "themes": ["motherhood", "embodiment", "captivity", "violence", "woman_as_monster"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "Unforgiving: A Northern Hymn", "year": 2017, "genre": "psychological horror", "perspective": "first-person", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 4, "themes": ["motherhood", "captivity", "violence", "woman_as_monster"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "Until Dawn", "year": 2015, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 3, "themes": ["captivity", "violence", "girlhoodhorror"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "We Know the Devil", "year": 2015, "genre": "horror", "perspective": "visual novel", "female_dev": "TRUE", "female_protag": "Yes", "theme_count": 2, "themes": ["girlhoodhorror", "queer_themes"], "creed": null, "damsel": null, "female_antagonist": null}, {"title": "What Remains of Edith Finch", "year": 2017, "genre": "adventure horror", "perspective": "first-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 6, "themes": ["motherhood", "domesticity", "trauma_and_mental_illness", "embodiment", "violence", "girlhoodhorror"], "creed": "Monstrous Mother", "damsel": null, "female_antagonist": null}, {"title": "Wilson's Heart", "year": 2017, "genre": "adventure horror", "perspective": "first-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 6, "themes": ["motherhood", "embodiment", "captivity", "violence", "girlhoodhorror", "woman_as_monster"], "creed": "Vampire, Archaic Mother", "damsel": null, "female_antagonist": null}, {"title": "Bloodborne", "year": 2015, "genre": "adventure horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "No", "theme_count": 3, "themes": ["motherhood", "embodiment", "violence"], "creed": "Monstrous Womb, Archaic Mother, Vampire", "damsel": "No", "female_antagonist": "Yes"}, {"title": "Alan Wake 2", "year": 2015, "genre": "survival horror", "perspective": "third-person", "female_dev": "unlisted", "female_protag": "Yes", "theme_count": 4, "themes": ["motherhood", "domesticity", "captivity", "violence"], "creed": "Archaic Mother", "damsel": "No", "female_antagonist": "No"}];

const THEME_LABELS = {
  motherhood: 'Motherhood', domesticity: 'Domesticity',
  trauma_and_mental_illness: 'Trauma / Mental Illness', embodiment: 'Embodiment',
  captivity: 'Captivity', violence: 'Violence', sexualized_violence: 'Sexualized Violence',
  girlhoodhorror: 'Girlhood Horror', woman_as_monster: 'Woman-as-Monster', queer_themes: 'Queer Themes'
};

const TYPE_COLORS = {
  genre: { bg: 'rgba(251,146,60,0.18)',  border: 'rgba(251,146,60,0.4)',  text: '#fdba74', bar: '#fb923c' },
  theme: { bg: 'rgba(167,139,250,0.18)', border: 'rgba(167,139,250,0.4)', text: '#c4b5fd', bar: '#a78bfa' },
  creed: { bg: 'rgba(52,211,153,0.18)',  border: 'rgba(52,211,153,0.4)',  text: '#6ee7b7', bar: '#34d399' },
};

function makePieces() {
  const pieces = [];
  const genres = [...new Set(GAMES.map(g => g.genre))].filter(Boolean).sort();
  genres.forEach(v => pieces.push({ id: `genre_${v}`, type: 'genre', label: v, filter: g => g.genre === v, vizKey: 'genre' }));
  Object.entries(THEME_LABELS).forEach(([k, label]) =>
    pieces.push({ id: `theme_${k}`, type: 'theme', label, filter: g => g.themes.includes(k), vizKey: 'themes', themeKey: k })
  );
  const creeds = [...new Set(GAMES.flatMap(g => g.creed ? [g.creed.split(',')[0].trim()] : []))].filter(Boolean).sort();
  creeds.forEach(v => pieces.push({ id: `creed_${v}`, type: 'creed', label: v, filter: g => g.creed && g.creed.includes(v), vizKey: 'creed' }));
  return pieces;
}

const ALL_PIECES = makePieces();
const slotPieces = [null, null];
let dragPieceId = null, dragFromSlot = null;

function renderTray() {
  const tray = document.getElementById('pz-tray');
  const usedIds = new Set(slotPieces.filter(Boolean).map(p => p.id));
  tray.innerHTML = '<div class="tray-title">Pieces</div>';
  [{ label: 'Genre', type: 'genre' }, { label: 'Theme', type: 'theme' }, { label: 'Archetype', type: 'creed' }].forEach(({ label, type }) => {
    const pieces = ALL_PIECES.filter(p => p.type === type && !usedIds.has(p.id));
    if (!pieces.length) return;
    const sep = document.createElement('div');
    sep.className = 'tray-title';
    sep.style.marginTop = '8px';
    sep.textContent = label;
    tray.appendChild(sep);
    pieces.forEach(piece => {
      const el = document.createElement('div');
      el.className = 'piece';
      el.dataset.type = piece.type;
      el.dataset.id = piece.id;
      el.draggable = true;
      el.innerHTML = `<span class="piece-type">${piece.type}</span><span class="piece-label">${piece.label}</span>`;
      el.addEventListener('dragstart', e => { dragPieceId = piece.id; dragFromSlot = null; el.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; });
      el.addEventListener('dragend', () => el.classList.remove('dragging'));
      el.addEventListener('touchstart', handleTouchStart, { passive: false });
      tray.appendChild(el);
    });
  });
}

function renderBoard() {
  for (let i = 0; i < 2; i++) {
    const slot = document.getElementById(`pz-slot-${i}`);
    const piece = slotPieces[i];
    if (!piece) {
      slot.innerHTML = `<span class="slot-empty-icon">⬡</span><span class="slot-empty-label">Drop a piece here</span>`;
    } else {
      const c = TYPE_COLORS[piece.type];
      const games = filterGames();
      slot.innerHTML = `<div class="slot-content">
        <div class="slot-piece-badge" style="background:${c.bg};border:1px solid ${c.border};color:${c.text}">
          ${piece.label}
          <button class="remove-btn" data-slot="${i}">✕</button>
        </div>
        <div class="viz-area" id="pz-viz-${i}"></div>
      </div>`;
      renderViz(i, piece, games);
    }
    slot.addEventListener('dragover', e => { e.preventDefault(); slot.classList.add('drag-over'); });
    slot.addEventListener('dragleave', () => slot.classList.remove('drag-over'));
    slot.addEventListener('drop', e => { e.preventDefault(); slot.classList.remove('drag-over'); dropOnSlot(i); });
  }
  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); slotPieces[parseInt(btn.dataset.slot)] = null; refresh(); });
  });
}

function makeBoardDraggable() {
  for (let i = 0; i < 2; i++) {
    const slot = document.getElementById(`pz-slot-${i}`);
    if (!slotPieces[i]) continue;
    const badge = slot.querySelector('.slot-piece-badge');
    if (!badge) continue;
    badge.draggable = true;
    badge.addEventListener('dragstart', e => { dragPieceId = slotPieces[i].id; dragFromSlot = i; e.dataTransfer.effectAllowed = 'move'; });
  }
}

function dropOnSlot(slotIndex) {
  if (!dragPieceId) return;
  const piece = ALL_PIECES.find(p => p.id === dragPieceId);
  if (!piece) return;
  if (dragFromSlot !== null) slotPieces[dragFromSlot] = null;
  slotPieces[slotIndex] = piece;
  dragPieceId = null; dragFromSlot = null;
  refresh();
}

function filterGames() {
  const active = slotPieces.filter(Boolean);
  if (!active.length) return GAMES;
  return GAMES.filter(g => active.every(p => p.filter(g)));
}

function renderResults(games) {
  const list = document.getElementById('pz-results-list');
  const count = document.getElementById('pz-results-count');
  count.textContent = `${games.length} game${games.length !== 1 ? 's' : ''}`;
  if (!games.length) { list.innerHTML = '<div class="result-empty">No games match this combination</div>'; return; }
  const sorted = [...games].sort((a, b) => (b.year || 0) - (a.year || 0));
  list.innerHTML = sorted.map(g => {
    const tags = [g.year || '—', g.genre].filter(Boolean);
    const themeChips = g.themes.slice(0, 3).map(t => `<span class="result-tag" style="color:#c4b5fd">${THEME_LABELS[t]}</span>`).join('');
    return `<div class="result-item">
      <div class="result-title">${g.title}</div>
      <div class="result-meta">${tags.map(t => `<span class="result-tag">${t}</span>`).join('')}${themeChips}</div>
    </div>`;
  }).join('');
}

function renderInsight(games) {
  const bar = document.getElementById('pz-insight-bar');
  if (!slotPieces.filter(Boolean).length || !games.length) { bar.classList.remove('visible'); return; }
  const pct = Math.round(games.length / GAMES.length * 100);
  const fpPct = games.length ? Math.round(games.filter(g => g.female_protag === 'Yes').length / games.length * 100) : 0;
  const avgThemes = (games.reduce((s, g) => s + g.theme_count, 0) / games.length).toFixed(1);
  const counts = {}; games.forEach(g => g.themes.forEach(t => counts[t] = (counts[t]||0)+1));
  const top = Object.entries(counts).sort((a,b) => b[1]-a[1])[0];
  let html = `<strong>${games.length} game${games.length !== 1 ? 's' : ''}</strong> match (${pct}% of dataset). `;
  html += `<strong>${fpPct}%</strong> have a female protagonist. Avg <strong>${avgThemes}</strong> themes per game.`;
  if (top) html += ` Most common theme: <strong>${THEME_LABELS[top[0]]}</strong>.`;
  bar.innerHTML = html;
  bar.classList.add('visible');
}

function renderViz(slotIdx, piece, games) {
  const el = document.getElementById(`pz-viz-${slotIdx}`);
  const c = TYPE_COLORS[piece.type];
  const key = piece.vizKey;
  if (key === 'themes') {
    const counts = {};
    games.forEach(g => g.themes.forEach(t => { if (t !== piece.themeKey) counts[t] = (counts[t]||0)+1; }));
    const sorted = Object.entries(counts).sort((a,b) => b[1]-a[1]).slice(0, 7);
    const max = sorted[0]?.[1] || 1;
    el.innerHTML = `<div class="bars">${sorted.map(([t, n]) => `<div class="bar-row"><span class="bar-label">${THEME_LABELS[t]||t}</span><div class="bar-track"><div class="bar-fill" style="width:${n/max*100}%;background:${c.bar}"></div></div><span class="bar-val">${n}</span></div>`).join('')}</div>`;
    return;
  }
  const dist = {};
  games.forEach(g => { const val = g[key] || 'unknown'; dist[val] = (dist[val]||0)+1; });
  const sorted = Object.entries(dist).sort((a,b) => b[1]-a[1]).slice(0, 8);
  const maxV = sorted[0]?.[1] || 1;
  el.innerHTML = `<div class="bars">${sorted.map(([label, n]) => `<div class="bar-row"><span class="bar-label">${label}</span><div class="bar-track"><div class="bar-fill" style="width:${n/maxV*100}%;background:${c.bar}"></div></div><span class="bar-val">${n}</span></div>`).join('')}</div>`;
}

function refresh() {
  const games = filterGames();
  renderTray();
  renderBoard();
  makeBoardDraggable();
  renderResults(games);
  renderInsight(games);
}

// ── touch drag ──
let touchGhost = null, touchPieceId = null;
function handleTouchStart(e) {
  const el = e.currentTarget; touchPieceId = el.dataset.id; e.preventDefault();
  const rect = el.getBoundingClientRect();
  touchGhost = el.cloneNode(true);
  touchGhost.style.cssText = `position:fixed;pointer-events:none;z-index:9999;opacity:0.85;width:${rect.width}px;top:${rect.top}px;left:${rect.left}px;transition:none;`;
  document.body.appendChild(touchGhost);
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('touchend', handleTouchEnd);
}
function handleTouchMove(e) {
  e.preventDefault(); const t = e.touches[0];
  if (touchGhost) { touchGhost.style.top = `${t.clientY - 20}px`; touchGhost.style.left = `${t.clientX - 60}px`; }
}
function handleTouchEnd(e) {
  document.removeEventListener('touchmove', handleTouchMove);
  document.removeEventListener('touchend', handleTouchEnd);
  if (!touchGhost) return;
  touchGhost.remove(); touchGhost = null;
  const t = e.changedTouches[0];
  const el = document.elementFromPoint(t.clientX, t.clientY);
  const slotEl = el?.closest?.('.slot');
  if (slotEl) { dragPieceId = touchPieceId; dragFromSlot = null; dropOnSlot(parseInt(slotEl.dataset.slot.replace('pz-slot-', ''))); }
  touchPieceId = null;
}

refresh();

})();
