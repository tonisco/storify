1. Created a blank expo react native project with

```shell
    npx create-expo-app storify -t expo-template-blank-typescript
```

2. Added some rules to tsconfig.
3. Set up eslint and prettier for additional code checking for syntax error, potential errors, code best practices and code formatting.
4. Run android development build with

```shell
npx expo run:android
```

5. Installed React Navigation for screen navigation and set it up with two screens:

   - Product List Screen
   - Product Details Screen

6. Created mock data and got images for mock data.
7. Added open sans font.
8. Added react native paper for ui components and moved navigation its own folder to keep the App file for future providers and state management.
9. Edited theme to include default colors and added light and dark mode option.
10. Moved all components and folders into newly created src directory.
11. Installed tailwind react native component and configure for quicker styling.
12. Created product card component since it will be used through out the app.
13. Decided to create more functionalities like cart, wishlist and orders.
14. Installed bottom tab navigator.
15. Design tab bar for all possible screens.
    - Main/Home
    - Explore
    - Favorite
    - Cart
    - Orders
16. Main tab created with two screens

    - Home
    - Categories

17. Created Home screen with different sections which have their components for reusability, edited product card to use data passed from props and other utils and methods.
18. Created a Category screen, listed all the categories using the categories card component and add route from the home page to the category list.
19. Created 3 screen for explore tab
    - Product List
    - Product Details
    - Product Filter
20. Due to time and bugs pertaining to the ui libraries i wanted to use i managed to implement the main core features of my assignment which is filtering, sorting and pagination.
21. I initially tried useMemo (a react hook), to store the sorted and filtered data. it was not performant and did not re-render even when the right dependencies where added.
22. After hours of debugging, I switched to useCallback (another react hook) to update the function which filters and sorts every time a variable it uses updates, then i added a useEffect (another react hook) to call the function any time the function updates to re-sort and re-filter
