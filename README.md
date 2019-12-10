This project is a technical test for Lizeo

The purpose is to display the 20 characters from the 100th from the Marvel API : https://developer.marvel.com/.
Each list item have to got a character name and is image.
If we click on a character name, several information appear (description, number of appearance in comic, list of the 3 first comucs where he appears).


For initialize project: yarn install. Then, make sure you have an .env file at the project root with these key/value :
    - REACT_APP_MARVEL_URL=http://gateway.marvel.com/v1/public/characters
    - REACT_APP_MARVEL_PRIVATE_KEY=YOUR_PRIVATE_KEY
    - REACT_APP_MARVEL_PUBLIC_KEY=YOUR_PUBLIC_KEY.

Now you can start and test the project.

For start project: yarn start
For test project: yarn test
