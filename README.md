## Welcome to the Dashboard exercise!

### What will I learn from this challenge?

- React Fundamentals
  - General concepts about theming (using styled component theming)
  - useContext hook
  - Provider pattern and how to use it to avoid prop drilling
  - Using TS maps for build time configuration checking

## The Task

- Create a dashboard to look like:
  ![](./MyThemingChallenge.png)

  - Don't try and wire the context up yet, I will show you how to do that
  - Implement styles using the themes defined in `./themes/themes.ts`. So, instead of:
    `color:red`\
     use:\
     `color: ${({ theme }) => theme.text};`
    this means the UI will change color when you change the theme provider from:\
    `<ThemeProvider theme={light}>`
    to\
    `<ThemeProvider theme={dark}>`
  - Don't try and connect the `ThemeSelector` component to anything yet, just connect it to a local `useState`
  - Don't overly gold plate it, just do something that resembles the wireframe and make sure when swap from `light` to `dark` that the display changes

  ## And when I'm done?

  - Email to Duncan sans `node_modules` and then we'll go through the context together. Then you'll be trying to do it yourself. Fun times await!
