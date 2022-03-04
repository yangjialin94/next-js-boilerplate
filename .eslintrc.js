module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@next/next/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "settings": {
        "react": {
            "version": "17.0"
        }
    },
    "rules": {
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "never"
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "jsx-quotes": [
            "warn",
            "prefer-double"
        ],
        "no-multi-spaces": [
            "warn"
        ],
        "keyword-spacing": [
            "warn"
        ],
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "react/jsx-key": "off"
    }
}
