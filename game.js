const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const imageElement = document.getElementById('imag')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}
function showTextNode(textNodeIndex) {

  var imagesDatabase = {
    '1': src="images/mine.gif",
    '2': src="images/sadbro.png",
    '3':src="images/bs1.jpg",
    '4': src="images/thechoices.png",
    '5': src="images/coffin.jpg",
    '6': src="images/tiger.jpg",
    '7': src="images/coffin.jpg",
    '8': src="images/sword.jpg",
    '9': src="images/coffin.jpg",
    '10': src="images/shoe.jpg",
    '11': src="images/bee.jpg",
    '12': src="images/fire.gif",
    '13': src="images/coffin.jpg",
    '14': src="images/coffin.jpg",
    '16': src="images/sheep.jpg",
    '17': src="images/gunsheep.jpg",
    '18': src="images/gunsheep.jpg",
    '19': src="images/beep.gif",
    '20': src="images/beep.gif",
    '21': src="images/hellokai.gif",
    '22': src="images/kairiddle.gif",
    '23': src="images/kairiddle.gif",
    '24': src="images/bs1.jpg",
    '25': src="images/cave.jpg",
    '26': src="images/kailaugh.gif",
    '27': src="images/kairiddle.gif",
    '28': src="images/kailaugh.gif",
    '29': src="images/kairiddle.gif",
    '30': src="images/kailaugh.gif",
    '31': src="images/kaigif.gif",
    '32': src="images/kaigif.gif",
    '33': src="images/drago.gif",
    '34': src="images/coffin.jpg",
    '35': src="images/wooloo.jpg",
    '36': src="images/winwin.gif",
    '37': src="images/tombstone.jpg",
    


} 

  var theImageDiv = document.createElement('div');
  theImageDiv.innerHTML = "<img id='the-image-bro' src='" + imagesDatabase[textNodeIndex] + "' height=150 width=300 style='position: fixed; top: 3%; right: 14%'>"
  
  document.getElementById('imagediv').appendChild(theImageDiv);
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Bro Listen na',
    image: 'https://i.imgur.com/5lhCbGv.jpg',
    options: [
      {
        text: 'Ya say',
        nextText: 3
      },
      {
        text: 'No',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: ':(',
    image: 'https://i.pinimg.com/originals/09/ef/32/09ef32e0bae53a4a268ae7e82dd2a9d2.png',
    options: [
      {
        text: 'Okay say',
        nextText: 3
      },
    ]
  },
  {
    id: 3,
    text: 'Wanna go on an adventure with me?',
    options: [
      {
        text: 'Hell Yea',
        nextText: 4
      },
    ]
  },
  {
    id: 4,
    text: 'Imagine you are on an island. You were on a ship and it got rekt and now you are on the island somehow. It has like lions and tigers and other animals. You managed to grab one item from the ship before it got rekt. Which one is it?',
    options: [

      {
        text: 'A badass sword',
        setState: { sword: true },
        nextText: 24
      },
      {
        text: 'A cool looking scarf thingy',
        setState: { scarf: true },
        nextText: 24
      },
      {
        text: 'Some rad sneakers',
        setState: { shoes: true },
        nextText: 24
      },
      {
        text: 'Stop imagining',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'WOW WE GOT A SMARTY PANTS OVER HERE. You grow up to become the President of the World with your sheer intellect and wit. But Modiji gets mad and kills you with a Bazzuka. You blithering idiot. You lose.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Time to explore the island. While exploring you come across a tiger. Oh god.',
    options: [
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 7
      },
      {
        text: 'He would look cool with a scarf tbh',
        requiredState: (currentState) => currentState.scarf,
        nextText: 8
      },
      {
        text: 'R U N',
        requiredState: (currentState) => currentState.shoes,
        nextText: 9
      }
    ]
  },
  {
    id: 7,
    text: 'WHAT HAVE YOU DONE. THE TIGER HAS SUPER SENSES AND HEARD YOU MOVE. THE TIGER GOT ANGRY AND KILLED YOU. CMON MAN',
    options: [
      {
         text: 'Restart',
        nextText: -1

      }
    ]
  },
  {
    id: 8,
    text: 'It does look cool on the tiger. The tiger agrees and lets you pass. He gives you a sword he found after some dumb guy tried to kill him.',
    options: [
      {
        text: 'Pat the tiger',
        setState: { sword: true },
        
        nextText: 10
      }
    ]
  },
  {
    id: 9,
    text: 'Look at Bolt over here tryna outrun a tiger. You died',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'Tiger is now your fren. He takes you to his home and gives you some rad shoes. Someone tried to outrun him lmao',
    
    options: [
      {
        text: 'Time to explore more',
        setState: { shoes: true },
        nextText: 11
      },
    ]
  },
  {
    id: 11,
    text: 'You come across a cute lil bee.',
    options: [
    {
      text: 'Attack it with your sword',
      requiredState: (currentState) => currentState.sword,
      nextText: 12
    },
    {
      text: 'He would look cool with a scarf tbh',
      requiredState: (currentState) => currentState.scarf,
      nextText: 13
    },
    {
      text: 'I hate bees imma run',
      requiredState: (currentState) => currentState.shoes,
      nextText: 14
    }
    ]
  },
  {
    id: 12,
    text: 'HELL YEAH BUDDY. Your sword turns into a fire sword or whatever that is and you burn that little shit alive. The other bees get scared and run away. Good job',
    options: [
      {
        text: 'Aight who is next.',
        nextText: 16
      }
    ]
  },
  {
    id: 13,
    text: 'BRO YOU CANNOT JUST PUT A SCARF ON EVERYTHING. THE BEES HATE IT AND KILL YOU',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 14,
    text: 'THERE WERE A LOT OF BEES HIDING. YOU COULD NOT OUTRUN THEM ALL.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }  
    ]
  },
  {
    id: 16,
    text: 'You come across a flock of sheep. They just chillin',
    options: [
    {
      text: 'Sword time',
      requiredState: (currentState) => currentState.sword,
      nextText: 17
    },
    {
      text: 'Scarf time',
      requiredState: (currentState) => currentState.scarf,
      nextText: 18
    },
    {
      text: 'Beep beep imma run',
      requiredState: (currentState) => currentState.shoes,
      nextText: 19
    }

    ]
  },
  {
    id: 17,
    text: 'WHY WOULD YOU EVEN TRY THAT. The sheep were carrying guns all along. Anyway They started blasting. Mess with the flock and you get the glock. You lose',
    options: [
      {
        text: 'Beep',
        nextText: -1
      }
    ]
  },
  {
    id: 18,
    text: 'Sheep do not need your scarf to look cooler. Mess with the flock you get the glock',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 19,
    text: 'Nice call mate. The flock was getting annoyed of you but they liked your sneakers. Now they think you are cool',
    options: [
      {
        text: 'I think they are cool too.',
        setState: { glasses: true },
        nextText: 20
      }  
      
    ]
  },
  {
    id: 20,
    text: 'You are now friends with the sheep. They give you some cool glasses. Time to explore Again ',
    options: [
      {
        text: 'Go into the cave',
        nextText: 25
      },
      
      
      {
        text: 'Go right towards the town',
        nextText: 21
      }  
      
    ]
  },
  {
    id: 21,
    text: '"Greetings! We are looking for a new ruler. Someone smart and cool. Come back when you have something cool to show us. ',
    options: [
      {
        text: 'Go back to the start',
        nextText: 24
      },
      {
        text: 'Put on the glasses',
        requiredState: (currentState) => currentState.glasses,
        nextText: 22
      },

      
    ]
  },
  {
    id: 22,
    text: 'Holy shit, those are some cool glasses you got there. But are you smart enough to answer my riddles?',
    options: [
      {
        text: 'Hell yea',
        nextText: 23
      }  
    ]
  },
  {
    id: 23,
    text: 'Pick me up and scratch my head. I’ll turn red and then black. What am I? ',
    options: [
      {
        text: 'Jamal',
        nextText: 26
      },
      {
        text: 'A matchstick',
        nextText: 27
      },
      {
        text: 'A chameleon',
        nextText: 26
      }
    ]
  },
  {
    id: 24,
    text: 'Time to explore the island. Which way do you want to go?',
    options: [

      {
        text: 'Ahead towards the jungle',
        nextText: 6
      },
      {
        text: 'Left towards the cave',
        nextText: 25
      },
      {
        text: 'Right towards the town',
        nextText: 21
      }
    ]
  },
  {
    id: 25,
    text: 'There is a cave ahead. There seems to be something scary inside. Maybe you should wait a bit before going in ',
    options: [
    {
      text: 'Go back',
      nextText: 24
    },
    {
      text: 'Super sword time',
      requiredState: (currentState) => currentState.supersword,
      nextText: 33
    },
    {
      text: 'I will just call my new friends for help',
      requiredState: (currentState) => currentState.glasses,
      nextText: 37
    }

    ]
  },
  {
    id: 26,
    text: 'Wrong answer. Try again man.',
    options: [
      {
        text: 'One more try',
        nextText: 23
      }  
    ]
  },
  {
    id: 27,
    text: 'Owow smart. Ok next one. What room do ghosts avoid? ',
    options: [
      {
        text: 'Classroom',
        nextText: 28
      },
      {
        text: 'Room of prayer',
        nextText: 28
      },
      {
        text: 'Living room',
        nextText: 29
      }
    ]
  },
  {
    id: 28,
    text: 'Wrong choice mate.',
    options: [
      {
        text: 'One more try',
        nextText: 27
      }  
    ]
  },
  {
    id: 29,
    text: 'Last one. How cool is Ishan?',
    options: [
      {
        text: 'Very cool',
        nextText: 31
      },
      {
        text: 'Cool enough',
        nextText: 30
      },
      {
        text: 'Eh',
        nextText: 30
      }
    ]
  },
  {
    id: 30,
    text: 'Hahahah unless?',
    options: [
      {
        text: 'Smh Ishan',
        nextText: 29
      }  
    ]
  },
  {
    id: 31,
    text: 'Amazing! Genius! You are fit to be our new ruler. But a ruler should be brave as well. There is a cave nearby where a dragon lives. He burns our crops and eats our people. Can you defeat him for us? ',
    options: [
      {
        text: 'Uh sure',
        setState: { supersword: true },
        nextText: 32
      }, 
    ]
  },
  {
    id: 32,
    text: 'Brilliant! I have modified your sword and made it stronger! You will have to answer a math question to charge it. Go slay the dragon!',
    options: [
      {
        text: 'Leggo',
        nextText: 25
      }, 
    ]
  },
  {
    id: 33,
    text: 'The dragon emerges. He is angry! You activate your sword. What is 21 x 7? ',
      options: [
        {
          text: '161! Slaying time!',
          nextText: 34
        },
        {
          text: '147! Fear me monster!',
          nextText: 36
        },
        {
          text: '2 lmao just kill me i cant math',
          nextText: 35
        }
      ]
    },
    {
      id: 34,
      text: 'bro you got burned alive. Cmon smh. You lose',
      options: [
        {
          text: 'Restart',
          nextText: -1
        }  
      ]
    },
    {
      id: 35,
      text: 'You start to run away as the math was hard. Just as the dragon is about to get you, BANG. The dragon is shot by the sheep you met earlier. The tiger pounces on the dragon and tries to finish it off, but the dragon uses his fire to burn one of the sheep. Ogod. The dragon died and you are the new ruler of the island. BUT AT WHAT COST? [WIN ENDING 1 OF 3]',
      options: [
        {
          text: 'Aight Imma try again',
          nextText: -1
        }  
      ]
    },
    {
      id: 36,
      text: 'The sword powers up. The dragon is no match for your might and intellect. He is defeated and you become the new ruler of the island. You rule with your friends, the tiger and the flock of sheep. Happy Happy. [WIN ENDING 2 OF 3] ',
      options: [
        {
          text: 'Aight Imma try again',
          nextText: -1
        }  
      ]
    },
    {
      id: 37,
      text: 'You enter the cave with the tiger and the glockflock. THERE IS A DRAGON THERE. The sheep open fire on it but it burns away 2 of them. You attack with your sword but it does almost no damage. The tiger sacrifices himself to save you. The last sheep shoots the dragon and kills him. But he does not want to live in a world without the other sheep, so he kills himself. You should have gone in more prepared. Congrats, dragon slayer. The villagers from the town next to the cave appoint you the ruler of the island. You won, but can you even call that a Victory? [WIN ENDING 3 of 3] ',
      options: [
        {
          text: 'Aight Imma try again',
          nextText: -1
        }  
      ]
    },




  







]






startGame()