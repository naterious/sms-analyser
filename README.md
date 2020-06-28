# sms-analyser
A web application to analyse an SMS message.

## Technologies used
- Nodejs
- Reactjs
- Docker

## Dependencies
To run this application you must have docker desktop installed and running in order to use docker-compose

## Usage
1. Clone this repository
2. To build and run the application run `docker-compose up`
3. Go to: http://localhost:3000/

## Tests
To run backend tests run:
1. `cd backend` 
2. `yarn install`
3. `yarn test`

### Backend
The architecture of the node backend is based around onion architecture design principles. It may seem like over kill on such a small API with only one endpoint, however I set it up in this way to aid future development. It means that if or when more development is done on this application, such as adding a data store or adding more methods and functionality, it is ready for that. This is more of a product waiting for more work, rather than a proof of concept, also it helps in case of another engineer coming to work on this project, it is logically structured and follows a design pattern making it much easier to understand quickly.

### Frontend
The UI is designed to be user friendly and attractive, keeping the main focus of the application nice and large and easy to use. For the styling I used a combination of material UI react library, and some of my own css.

### If I had more time I would...
- add validation to backend and more strictly on front end to cover all cases and ensure a valid phone number is supplied, not just any number etc
- add tests to front end to ensure components are rendering properly and output is as expected
- add proxy between front and back end, I had a small issue using proxy between the two, and had to use a workaround to save some time, but I would use nginx to add a proxy in the future
- optimise for production, remove as many dependencies as possible, tree shake the front end, and build for front end, add docker-compose for production etc
