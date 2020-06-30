# Lab: Class 37: React 1

## Open Git Pull Requests  
 

## Overview  

Create an Odometer web page using ReactJS.

## Feature Tasks and Requirements  
- [x] Display an odometer with 4 digits
    - Pad with zeroes as needed (e.g. 0045)
        - JavaScript has a method for this. Research as needed.
- [x] Add buttons to increment the “miles” by 1, 10, 100 and 1000.
    - Roll over when odometer value exceeds 9999
    - Maintain any “extra” amount when rolling over.
- [x] The root `App` component should contain `Odometer`,`Header` and `Footer` components.
    - You decide when appropriate to use class based or functional components.
    - [x] `Header` component should receive a text value via props.
    - [x] `Footer` component should receive a trademark value via props.
    - [x] `Odometer` component should store numeric value in it’s state.
        - Remember to update state in the React way.

## Implementation Notes:  
Useful Terminal Commands
- `npx create-react-app odometer`  

## User Acceptance Tests  
- [x] No testing required.  

## Dependencies  
- "@testing-library/jest-dom": "^4.2.4",
- "@testing-library/react": "^9.5.0",
- "@testing-library/user-event": "^7.2.1",
- "react": "^16.13.1",
- "react-dom": "^16.13.1",
- "react-scripts": "3.4.1"

## Authors  
- Software Developer: Joseph Zabaleta
  - [Official Github](https://github.com/joseph-zabaleta)  

## Collaborations  
- none  

## License  
This project is under the MIT License.

## Acknowledgements / Resources  
- none

## Version History  
- 1.0.0 20200630  
    - Initial files created.  
