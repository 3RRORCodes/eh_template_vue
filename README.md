# FiveM Vue Template

Hey! This is a ready-to-use template for FiveM UI that looks modern and works great. I've set it up with Vue 3 to make your life easier.

## Getting Started

First time? No worries! Just follow these steps:

1. Download this template to your computer
```bash
git clone https://your-repo-url/eh_template_vue.git
cd eh_template_vue
```

2. Install what you need (in the ui folder)
```bash
cd ui
npm install
```

## Working on Your UI

Want to see your changes live while coding? Easy:
```bash
cd ui
npm run dev
```

This starts up a local server at `http://localhost:3000` where you can see your UI. Any changes you make will show up instantly - pretty cool, right?

Want to test it in FiveM? Just build it first:
```bash
cd ui
npm run build
```

Then drop the whole folder into your FiveM server's resources. Don't forget to start the resource!

## Where to Find Everything

Here's where everything lives:
```
eh_template_vue/
├── ui/           # Where you code your UI
├── web/         # Your finished UI (appears after building)
├── client/      # FiveM scripts (like key bindings)
└── server/      # Server-side stuff
```

## Controls

Super simple:
- Press F5 to show/hide your UI
- Hit ESC to close it
- Type `/toggleui` in chat if you prefer commands

## What's Included

- A clean, modern UI setup
- Nice-looking notifications
- Easy way to show player info
- Dark mode by default (easy to change)
- Everything's organized neatly

## Making Changes

Want to customize? Here's where to look:

1. Colors and style? Check out `ui/src/assets/scss/main.scss`
2. Adding new screens? Put them in `ui/src/components`
3. Need to handle new actions? Edit `client/cl_ui.lua`

## Quick Examples

Show something in the UI from your Lua:
```lua
SendNUIMessage({
    action = "updateData",
    data = {
        playerName = "Cool Player"
    }
})
```

Send something back to FiveM from the UI:
```js
nuiCallback('doAction', {
    type: 'notification',
    message: 'Hey there!'
})
```

## Need Help?

The template includes a working example (player info card) that shows you how everything connects. Feel free to use it as a reference!

Remember: This is just a starting point - make it your own! Try changing colors, adding new features, or rearranging things. It's pretty hard to break, so have fun with it! 