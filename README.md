# Lego-Builder
This assignment is inspired in part by [this pretty nifty book](https://www.youtube.com/watch?v=tDnDrO7neUE) 📖

## Screenshots
<img width="1440" alt="screen shot 2018-11-12 at 6 15 22 pm" src="https://user-images.githubusercontent.com/16019344/48382514-07d31100-e6a7-11e8-986d-01778a82992b.png">
<img width="1432" alt="screen shot 2018-11-12 at 6 15 33 pm" src="https://user-images.githubusercontent.com/16019344/48382515-0ace0180-e6a7-11e8-9f20-4f24b16d04c0.png">
<img width="1434" alt="screen shot 2018-11-12 at 6 15 43 pm" src="https://user-images.githubusercontent.com/16019344/48382516-0d305b80-e6a7-11e8-9ad1-56fcd24909c1.png">

## Setup

You will have at least this many files with your setup:
```
|- db
    |- parts.json
|- src
    |- components
        |- LegoCharacter
            |- legoCharacter.js
            |- legoCharacter.scss
        |- SavedCharacters
            |- savedCharacters.js
            |- savedCharacters.scss
    |- data
        |- partsData.js
    |- index.js
    |- index.scss
    |- index.html
|- .eslintignore
|- .eslintrc
|- .gitignore
|- package.json
|- README.md
|- webpack.config.js
```

## Requirements

- Use [SASS](https://sass-lang.com/guide) for styling your page and components.
- When the user loads the page, they should see a head, a torso, and legs printed together on the page. This is your lego character.
- Your lego character should display with a name that is the mashup of names of the head + torso + legs pieces respectively.
- There should be some way for the user to change the selected head, torso, and leg pieces. You should implement at least one of these:
  1. Three dropdowns or radio button groupings that contain the different pieces within that category the user can choose. When the user chooses an option, it swaps out that lego piece and part of the name. You should populate the options with json data.
  1. When clicking on the head, torso, or leg elements, that lego piece changes (as well as that portion of the name of the character).
  1. Create a randomizer button that will randomly swap out your lego character's pieces and name.
- You should have the ability to save lego characters by clicking on a save button. The saved lego characters should show up with their character's name and optionally with smaller composite thumbnail image. You should be able to save multiple characters (but sadly these will go away when you refresh the page).
