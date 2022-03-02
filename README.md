# Next.js TypeScript & TailwindCSS boilerplate

## Steps to get here

1. Create Next.js app

    ```
    yarn create next-app --typescript
    ```

    ```
    ✔ What is your project named? next_js_boilerplate
    ```

2. Install and configure ESLint

    ```
    cd next_js_boilerplate
    yarn add --dev eslint
    yarn create @eslint/config
    ```

    ```
    ? you like to use ESLint? To check syntax, find problems, and enforce code style
    ? What type of modules does your project use? JavaScript modules (import/export)
    ? Which framework does your project use? React
    ? Does your project use TypeScript? Yes
    ? Where does your code run? browser
    ? How would you like to define a style for your project? Answer questions about your style
    ? What format do you want your config file to be in? JavaScript
    ? What style of indentation do you use? Spaces
    ? What quotes do you use for strings? Double
    ? What line endings do you use? Unix
    ? Do you require semicolons? No
    The config that you've selected requires the following dependencies: ...
    ? Would you like to install them now with npm? Yes
    ```

    - In **.eslintrc.js**
        - Add
            ```
            "env": {
                "node": true
            }
            ```
        - Add
            ```
            "extends": {
                "plugin:@next/next/recommended"
            }
            ```
        - Add
            ```
            "settings": {
                "react": {
                    "version": "17.0"
                }
            }
            ```
        - Add
            ```
            "rules": {
                "object-curly-spacing": ["warn", "always"],
                "react/jsx-key": "off"
            }
            ```
    - Remove existing **.eslintrc.json**

3. Fix template files for linter

    - Reindent files from 2 to 4 spaces
    - Change quotes from single to double
    - Add `import React from "react"` to all TSX files
    - Check linting with `yarn lint`

4. Install and configure Tailwind

    ```
    yarn add tailwindcss postcss autoprefixer @tailwindcss/forms
    yarn run tailwindcss init
    ```

    - Remove `styles/Home.module.css` and its import in `pages/index.tsx`
    - Replace `styles/globals.css` with Tailwind setup:

        ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

    - Create `tailwind.config.js` according to https://tailwindcss.com/docs/guides/nextjs
    - Add plugin `@tailwindcss/forms` to `tailwind.config.js`
    - In **tailwind.config.js** add
        ```
        plugins: [
            require("@tailwindcss/forms")
        ]
        ```
    - Remove `className={...}` from `pages/index.tsx`
    - Set Tailwind classNames in `pages/index.tsx` to match original boilerplate

5. Config PostCSS

    - Create `postcss.config.js` and add the following:
        ```
        module.exports = {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        }
        ```

6. Install Recoil

    ```
    yarn add recoil
    ```

    - Edit **pages/\_app.tsx** to

        ```
        import React from "react"
        import {
            RecoilRoot,
        } from "recoil"
        import "../styles/globals.css"
        import type { AppProps } from "next/app"

        function MyApp({ Component, pageProps }: AppProps) {
            return (
                <RecoilRoot>
                    <Component {...pageProps} />
                </RecoilRoot>
            )
        }

        export default MyApp
        ```

7. Run project in dev
    ```
    yarn isntall
    yarn dev
    ```
