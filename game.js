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
    '21': src="images/beep.gif",
    '22': src="images/beep.gif",
    '23': src="images/beep.gif",
    


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
        nextText: 6
      },
      {
        text: 'A cool looking scarf thingy',
        setState: { scarf: true },
        nextText: 6
      },
      {
        text: 'Some rad sneakers',
        setState: { shoes: true },
        nextText: 6
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
        nextText: 20
      }  
      
    ]
  },
  {
    id: 20,
    text: 'YOU DID IT. YOU COMPLETED THE GAME. Thank you for playing. You can exit now ',
    options: [
      {
        text: 'Ishan you are so cool',
        nextText: 21
      },
      
      
      {
        text: 'Aight imma try again tho',
        nextText: -1
      }  
      
    ]
  },
  {
    id: 21,
    text: 'Really?',
    options: [
      {
        text: 'Yeah you are smart too',
        nextText: 22
      }  
      
    ]
  },
  {
    id: 22,
    text: 'Wow thanks. You can just exit now tho',
    options: [
      {
        text: 'Nah I wanna appreciate you more',
        nextText: 23
      }  
    ]
  },
  {
    id: 23,
    text: 'OK whoever came this let me know lmao. DM me a sheep emoji or something. Thanks for playing!',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }  
    ]
  },
]






startGame()