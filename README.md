# React + Vite + Typescript + Tailwind + Prettier
Template to spin up boilerplate for a web app

To start, run your typical vite start for dev

`npm run dev`

Then run Tailwind's watch process

`npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`

Includes a color in Tailwind called `base` which is pure grayscale values from white at base-50 to black at base-950.
It also includes basic useful colors like `error`(red), `success`(green), `info`(blue), and `special`(purple)
