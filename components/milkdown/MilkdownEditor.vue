<template>
  <Milkdown class="flex justify-center items-center py-4" />
</template>

<script setup lang="ts">
import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core'
import { nord } from '@milkdown/theme-nord'
import { Milkdown, useEditor } from '@milkdown/vue'
import { commonmark } from '@milkdown/preset-commonmark'

const markdown = `
# Milkdown is an inline WYSIWYG markdown editor 🍼

![greeting bear](/polar.jpeg)

> Milkdown is a WYSIWYG markdown editor framework.
>
> 🍼 Here is the [repo](https://github.com/Milkdown/milkdown) (right click to open link). \
> We ~~only support commonmark~~. GFM is also supported!

You can check the output markdown text in **two columns editing**.

*   Features
    *   [x] 📝 **WYSIWYG Markdown** - Write markdown in an elegant way
    *   [x] 🎨 **Themable** - Theme can be shared and used with npm packages
    *   [x] 🎮 **Hackable** - Support your awesome idea by plugin
    *   [x] 🦾 **Reliable** - Built on top of [prosemirror](https://prosemirror.net/) and [remark](https://github.com/remarkjs/remark)
    *   [x] ⚡ **Slash & Tooltip** - Write fast for everyone, driven by plugin
    *   [x] 🧮 **Math** - LaTeX math equations support, driven by plugin
    *   [x] 📊 **Table** - Table support with fluent ui, driven by plugin
    *   [x] 📰 **Diagram** - Diagram support with [mermaid](https://mermaid-js.github.io/mermaid/#/), driven by plugin
    *   [x] 🍻 **Collaborate** - Shared editing support with [yjs](https://docs.yjs.dev/), driven by plugin
    *   [x] 💾 **Clipboard** - Support copy and paste markdown, driven by plugin
    *   [x] 👍 **Emoji** - Support emoji shortcut and picker, driven by plugin
*   Made by
    *   Programmer: [Mirone](https://github.com/Milkdown)
    *   Designer: [Mirone](https://github.com/Milkdown)

***
`

useEditor((root) =>
  Editor.make()
    .config(nord)
    .config((ctx) => {
      ctx.set(rootCtx, root)
      ctx.set(defaultValueCtx, markdown)
    })
    .use(commonmark)
)
</script>

<style scoped>
</style>
