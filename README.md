# Monster Battle App

Welcome to the Monster Battle App!

This application allows you to engage in epic battles between various monsters with unique stats.
The current version of the application provides a list of monsters and allows the player to select their monster, and then perform a battle, showing the winner result.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Use `nvm` to install and select the appropriate Node.js version `(16.10.0 <= node < 17.0.0)`.
4. Install required packages using `npm install`.
5. Start the API server with `npm run serve:data`.

## API Endpoints

- **GET /monsters**: Returns information about all available monsters.
    - Example Response:
      ```json
      [
          {
              "id": "monster-1",
              "name": "Monster 1",
              "attack": 60,
              "defense": 40,
              "hp": 10,
              "speed": 80,
              "type": "Type",
              "imageUrl": "image url"
          }
      ]
      ```

- **POST /battle**: Receives monster IDs and returns the result of the battle.
    - Example Request Body:
      ```json
      {
          "monster1Id": "monster-1",
          "monster2Id": "monster-2"
      }
      ```
    - Example Response:
      ```json
      {
          "winner": {
              "id": "monster-1",
              "name": "Monster 1",
              "attack": 60,
              "defense": 40,
              "hp": 10,
              "speed": 80,
              "type": "Type",
              "imageUrl": "image url"
          },
          "tie": false
      }
      ```