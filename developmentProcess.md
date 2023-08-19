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
