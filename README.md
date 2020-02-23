# loveLang
A nifty chrome extension to learn a new language easily!

## Inspiration
No one has time to spend 45 minutes a day on Duolingo to learn 3 new words in a day, but most of us spend hours browsing Reddit or Facebook. ***LoveLang allows us to learn new words in different languages as we surf the web.*** Through the given context and a pop-up meaning tool-tip, the process of improving your language skills can never be easier. 

## What it does
LoveLang identifies important words in the body of a webpage and converts them to a user-specified language that the user may want to learn. By changing some important words and relying on the context of the remaining untranslated text it allows a seamless learning of a language with real-time examples. The meaning of each translated word can be viewed by hovering the cursor over the word. 

## How we built it
We used JavaScript, jQuery, mongoDB to create our one-of-a-kind plugin. We programmed our plugin to interact with the Google Translate API to provide you with the most up to date, reliable translations out there. Our mongo Database stores the 'mastering' level for each word a user may encounter. The mastering level is increased by one every time the user reads it. ***Without collecting your data, we give you a tailored experience to linguistics.***

## Challenges we ran into
We faced some issues dealing with mongoDB and the Google API, but there's probably nothing that a good amount of StackOverflow and coding forums cannot solve. Chrome's security policies forced us to create a background script and use some other native protocols. After 3 hours of debugging, we fixed the dependencies at 9am. 

## Accomplishments that we're proud of
We're proud that we could come up with this creative project and implement it as a Minimum Viable Product within 24 hours of coding and learning new technologies. _We gave our 110% into this project over the course of 36 hours._

## What we learned
We learned a great deal about NoSQL database and the use of APIs. The creation of a web-plugin was a new, yet welcome experience. One thing we will never forget, is to never underestimate Chrome's security requirements, background scripts, and the power of four caffeinated geeks.

## What's next for LoveLang
More languages, more support, an API integration that speaks the proper pronunciation, and fluency in multiple languages. 

