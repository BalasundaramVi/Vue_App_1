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

```
<div id="app">
  <p v-if="show">You can see me!</p>
  <p v-else>Now you see me!</p>
  <p>Do you also see me?</p>
  <template v-if="show">
    <h1>Heading</h1>
    <p>Inside a template!</p>
  </template>
  <button @click="show=!show">Switch</button>
</div>

new Vue({
  el: "#app",
  data: {
    show: true,
  }
});
```



## Rendering Lists with v-for

Use **v-for** to pull out the content of an array and use it in a repeated template format.

Add parenthesis and add i to get the index of each item in v-for.
```
<li v-for="(ingredient, i) in ingredients">{{ ingredient }} ({{ i }})</li>
```
The first element in parentheses is always the element, or the value of the element, and the second element in parentheses is the index (i) of the element in the array.

*Use templates when you want to use for loops and output more than one line.*

```
<template v-for="(ingredient, index) in ingredients">
  <p>{{ ingredient }}</p>
  <p>{{ index }}</p>
</template>
```

*Can also use v-for to loop through objects inside and outside nested loops.*

For objects, the elements in parentheses matter as well. The first element is the value, and the second element is the key (and the third element is the index).

```
<ul>
  <li v-for="person in persons">
    <div v-for="(value, key, index) in person">{{ key }}: {{ value }} ({{ index }})</div>
  </li>
</ul>

new Vue({
  el: "#app",
  data: {
    ingredients: ['meat', 'fruit', 'cookies'],
    persons: [
      {name: 'Max', age: 27, color: 'red'},
      {name: 'Anna', age: 'unknown', color: 'blue'},
    ]
  }
});
```


### Looping through a list of numbers

Use v-for="*num* in *total*"

```
<span v-for="n in 10">{{ n }}</span>
```


### Keeping Track of Elements When Using V-For

VueJS conveniently proxies event handlers.

```
<button @click="ingredients.push('spices')">Add New</button>
```

VueJS watches the value in memory to see if there are any changes, which is why it updates immediately upon changing the data.

VueJS updates the list by updating the position in the array where somthing changes. It does not keep track of the specific element, only patch it in the second position.
- If you want to be super safe and make sure VueJS updates the correct item, you must assign a unique key to the list item
- use **:key** to pass in a unique key
- do not pass the index, because it is derived from the array itself, which can be changed when rerendering
- Must use a **unique** key

This ensures that VueJS stores the position of the element and the element itself, so if the element needs to be reordered, the element itself will be reordered and not just override the values at some of the positions it finds in the array.



## Module Resources & Useful Links

Official Docs - Conditionals: <a href="http://vuejs.org/guide/conditional.html">http://vuejs.org/guide/conditional.html</a>

Official Docs - Lists: <a href="http://vuejs.org/guide/list.html">http://vuejs.org/guide/list.html</a>