# Texas Holdem Poker

## What the project is

We'ere building our own version of the popular Texas Holdem, whilst trying to learn web development.
The goal is to make a fully playable, single-player game with a clean UI, proper logic and eventually some AI opponents.

## The Plan

### MVP

- Working deck with shuffling -> [More on shuffling](#Deck-Shuffling)
- Dealing functionality
- Betting logic (check, call, fold, raise)
- Community cards + flow (preflop -> flop -> turn -> river)
- Showdown and winner calc

### Next Steps

- Basic AI logic for opponent simulation
- Chip tracking + pot logic
- Simple UI polish (animations, cards flipping and chips stacking)

### Endgame Goals

- Side pots
- Multiple opponents
- Multiplayer online

## Tech Stack

| Area     | Tools        |
| -------- | ------------ |
| Language | JavaScript   |
| Markup   | HTML         |
| Styling  | CSS          |
| Hosting  | GitHub Pages |

# Additional Thoughts

### Deck Shuffling

Easiest way seems to be like my 6th year project. ENUM for suits and values will likely be int class as we need values 1-14 to determine kicker cards too. - Will need Deck Class to use in array for algorithm.
SHUFFLING
Found a cheeky little algorithm called Fisher–Yates shuffle Algorithm - seems easy enough to implement with arrays. Better than getting lava lamps or RNG that does (52!).
**Link** -> [_here_](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random2)

### Object Structure

Suit ENUM:

- Heart, Spade, Club, Diamond

Card:

- Suit (ENUM)
- Value (int)

Deck:

- Cards (array of cards)
- Shuffle function
- Deal function

Player:

- Hand (array of cards)
- Balance
- Action functions (raise, call, fold, etc)

Game:

- Players (array of players)
- Pot
- Game state (preflop, flop, etc.)

_Please give thoughts and change this as you please :)_
