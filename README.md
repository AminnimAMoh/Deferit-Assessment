# Deferit-Assessment
 Deferit-Assessment

 Developed in Next.js and React.js.
 
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Production server:

First run:

```bash
npm run bild
# or
yarn build
```

Waith for build process to finish.

Next run the server:

```bash
npm run start
# or
yarn start
```

Unit test:

```bash
npm run test
# or
yarn run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##Discription:

##Stylings

All style files are reserved in the styles folder.
For styling, I prefer to use scss and follow BEM naming principle to make the style sheets easier to read and maintain.
Also, scss provided me with functions that helped to cleanly implement browser compatibility for animations.

Design decisions:
1-I decided to move on with the list format as it represents the perfect flow so the user eye attracts to the heading first and follows flow to the headings and listed information. 

2-I used a border for the bottom of the cards on the list to help the eye to separate the information.  It also improves the visibility and usability of the system.

3-I decided to use hover action to toggle the status snack box as the hover action is the most affordable action users would have to read a sentence. So in that case users do not have to think about unnecessary complications in the interaction system.

4-To describe the status of each receipt as fast as possible I decided to apply colour coding to the headings of snack bars so by hovering user evidently will have an idea of the state of the status.
The colours I picked are described by their meaning in:
[https://www.calendar.com/blog how-to-color-code-your-calendar-for-optimal-success/]

5-To achieve screen responsiveness I decided to use flex display controlled with a media query for mobile screens.

##Hooks:

I have developed two costume hooks that reduce the redundancy of components and improve the readability of the code.

1-I have developed a hover hook (useHover) that creates two event listeners on 'mousein" and 'mouseout' and cleans the event listeners after in a useEffect. To use this hook you have to simply import the hook and deconstruct its returns [hoveRref: React.HTMLElementReference, hoverValue: boolean]. Next, this hook listens to the elements with ref property added to them using useRef hook from React hooks.

2-I have developed a usePagination hook that subscribed to pageNumber from the application state and on its change sends a new query to the API and adds the response to an array to be printed on the list. This hook uses a promise so the process will be run asynchronously. usePagination also sets the loading state, error state, and controls the end of the API.

##TypeScript:

I always use TypeScript in my projects governing the props, arguments, and function returns that helps code readability and prevents many production errors such as undefined, possible null, etc.

Secondly, as I have used spread syntax in a few places typescript helps the reader to understand elements required in the component.

##State Management:

I decided to use built-in state management hooks from React that limits the app dependencies on external libraries like Redux and Redux toolkit. To achieve a state management system in this project I have used useContex, useMemo, useReducer. 

The state is not very complicated as the project is not performing complex state controls.

##Pagination:

As I am using JSON-Server to serve the API, JSON-Server handles the pagination using ?_page=2&_limit=11 struction to apply the middleware for pagination. I have implimented the pagination using express too but it is not in use. 

Secondly, the way JSON-Server sends the previous, next, and last page is described in response headers in the Link section. So to reach the last page of the API I had to save the Link key from the response headers using headers.get(""). More details about this section can be found in pages/api/AppFetch.tsx.
