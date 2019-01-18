# Using Conditionals and Rendering Lists

## Conditional Rendering with v-if

**v-if** is a directive that displays the element only if equates to true. Not hidden or transparent - just gone.

**v-if** attaches or detaches elements to the DOM. Does not hide visibility. Attaches and detaches all nested elements as well.

**v-else** automatically refers to the latest v-if in front of it.


### v-else-if in Vue.js 2.1

If using Vue.js version 2.1 or higher, you now actually have access to a **v-else-if** directive.

Have a look at this link to learn more: <a href="https://vuejs.org/v2/guide/conditional.html#v-else-if">https://vuejs.org/v2/guide/conditional.html#v-else-if</a>


### Using an Alternative v-if Syntax

Use **HTML5 templates** to group elements that are not nested into a single v-if. Can also use a div.


### v-show

To not completely detach the element, but instead just simply show or hide visibility, we can use **v-show**. Essentially just toggles the style *{ display: none }*.



## Rendering Lists with v-for

