# React assignment 1: Restaurant Menu

(note that the original read me text that comes with installing vite is at the bottom of this file. [Jump to it](#react-compiler))

Due _*Thursday*_ 15.10.26 by 11:59pm
Canvas link:
"https://jobloop.instructure.com/courses/557/assignments/11968"
[Go to assigment text](#assignment-instructions) fetched from the link.

## My Notes:

- Having looked closer at the menu it seems clear to me that this is not a fast food place, however the many options and mid-paced prices do not lead me to think it's a high end fine dining resturant either. Conclusion; I need a color palette that gives a "calm, mid-fancy dining with affordable prices" vibe, like a family friendly place with a mix of classy and cozy/comfortable. After a look at different menus from such resturants as well as cross referencing with fast food chains and high end fine dining menu designs, I've chosen to go with a slightly darker green than forest green (optional deep dark-red, but this could for some seem like it's too fancy while others may think it's too much of a fast food place). Still considering whether the dishes should be clearly marked cards with a brighter background or if they should stay somewhat subtle, fearing that too little breaks of the dark colors will again lead to an assumption that it's too high end.

Figma idea draft link:
"https://www.figma.com/design/VyyonHlotKYLnzGV1uOd6I/react-MenyDishes?node-id=5-67&t=MJWYCUuvCLeD0amB-0"

1. Clean up base template(remove all not needed pre set text and jsx logic from the download) and make it ready with needed files and export/imports! [x]
2. Idea phase: check, other menu's, decides colors and layout. Figma, Excalidraw? [x]
3. With design in place, copy full data set on the menu and start adding needed components and styling. [x]
4. Check connection between the files/components! [X]

- Keep checking connection as I go! []

5. As menu's like these are most commonly viewed by mobile users, I will do my best at running with "mobile first" css. [x]

- need improvement, but proof of concept is in place..

6. Add and adjust Css to fit my design. [] --> Not fully there yet, fix border and price placement, plus shadows for the card(add hover?)
7. Find a suitable font option, as the one I want will need to be imported. []

- Import the actual font later and fix this! []

8. Get css modules connected correctly! []

- Add text from the assignment link to able to work offline as well!! []
  - fix hyperlinks to the assignment text for easy read in the future! [x]

9. Read the assignment text again to make certain I didn't miss anything! []
10. clean up comments and if needed css! []

---

## Assignment Instructions

1. Create the projects:
   Start by creating a new React-project with Vite.

2. Add the Data:
   Use the array with dishes below as data in your application. The data represents the menu for a restaurant and contains information on the dishes title, price, indgredients, category and a unique ID.

```
const menu = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    price: "159 kr",
    ingredients: "Spaghetti, kjøttsaus, parmesan",
    category: "Hovedrett",
  },
  {
    id: 2,
    title: "Kremet Kyllingsuppe",
    price: "129 kr",
    ingredients: "Kylling, fløte, gulrøtter, selleri",
    category: "Forrett",
  },
  {
    id: 3,
    title: "Margarita Pizza",
    price: "169 kr",
    ingredients: "Tomatsaus, mozzarella, basilikum",
    category: "Hovedrett",
  },
  {
    id: 4,
    title: "Sushi Mix",
    price: "229 kr",
    ingredients: "Laks, tunfisk, reker, ris",
    category: "Hovedrett",
  },
  {
    id: 5,
    title: "Cæsarsalat",
    price: "139 kr",
    ingredients: "Romanosalat, kylling, parmesan, dressing",
    category: "Forrett",
  },
  {
    id: 6,
    title: "Brownie med Is",
    price: "89 kr",
    ingredients: "Brownie, vaniljeis, sjokoladesaus",
    category: "Dessert",
  },
  {
    id: 7,
    title: "Taco Tallerken",
    price: "199 kr",
    ingredients: "Kjøttdeig, mais, ost, guacamole",
    category: "Hovedrett",
  },
  {
    id: 8,
    title: "Pannekaker med Syltetøy",
    pris: "99 kr",
    ingredients: "Pannekaker, jordbærsyltetøy, sukker",
    category: "Dessert",
  },
  {
    id: 9,
    title: "Reker med Sitron",
    price: "149 kr",
    ingredients: "Reker, sitron, dill, brød",
    category: "Forrett",
  },
  {
    id: 10,
    title: "Entrecôte med Grønnsaker",
    price: "289 kr",
    ingredients: "Entrecôte, asparges, poteter, peppersaus",
    category: "Hovedrett",
  },
];
```

3. Build Components: []

- Main component (App): This component imports the menu-data and passes it on as props to a subcomponent. []
- List component (Menu): This component recieves the dishes as props and displays them in a list. []
- Card component (Dish): This component recieves data for one dish as props and displays them in a card format. Use the content in the keywords title, price, ingredients og category in the display. []

4. Add styling: []

- Use CSS Modules to style your application. []
- Make a grid layout for the menu so the dishes can be displayed in a tidy and neat manner. []
- Each card must have a obvious limit, with frames(border), shadows and a highly accessible font type. []
- Make sure that the content from the keywords are clearly separated and visually pleasing. []

5. Deliver a link to Github Repo + link to GitHub pages. []

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
