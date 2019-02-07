# Advanced Component Usage

## Slots

### Passing Content with Slots

Use the VueJS reserved keyword **slot** to pass in specific HTML from the parent.

```
<app-quote>
  <h2>The Quote</h2>
  <p>A wonderful Quote</p>
</app-quote>

<template>
<div>
  <slot></slot>
</div>
</template>
```

### How Slot Content gets Compiled and Styled

The child component styling is applied to the data being passed in from outside, however, the parent component is the one with the data that can be passed into the component.

For compiling the template - rendering any kind of VueJS operation - the component with the code will be the one doing the changes.

### Using Multiple Slots

Slot is not an official HTML attribute, but a VueJS attribute. VueJS will detect the slot attribute and know the value of the attribute will be the name of the slot in the child components.

```
<app-quote>
  <h2 slot="title">{{ quoteTitle }}</h2>
  <p slot="content">A wonderful Quote</p>
</app-quote>


<div>
  <div class="title">
    <slot name="title"></slot>
  </div>
  <hr>
  <div>
    <slot name="content"></slot>
  </div>
</div>
```

### Default Slots and Slot Defaults

VueJS will treat unnamed slots passed in be rendered as default slots (if there is at least one other named slot).

If no slot with the name specified in the child is used, a default value can be passed in. But whenever slots with that name is specified, then it will be replaced by the parent specification.

### A Summary on Slots

Slots help distribute content in other components. It is especially useful *when building reusable widgets* - such as a slideshow.



## Dynamic Components


### Switching Multiple Components with Dynamic Components

The component selector '<component></component>' is a reserved word in VueJS. Component allows us to dynamically add components.

```
<button @click="selectedComponent = 'appQuote'">Quote</button>
<button @click="selectedComponent = 'appAuthor'">Author</button>
<button @click="selectedComponent = 'appNew'">New</button>
<hr>
<p>{{ selectedComponent }}</p>
<component :is="selectedComponent">
  <p>Default Content</p>
</component>
```

### Understanding Dynamic Component Behavior

The component is destroyed and recreated when reloaded.

```
<template>
<div>
  <h3>New Quote</h3>
  <button @click="counter++">Increase!</button>
  <p>{{ counter }}</p>
</div>
</template>

<script>

export default {
  data: () => ({
    counter: 0,
  }),
  destroyed() {
    console.log('Destroyed!');
  }
}

</script>
```

### Keeping Dynamic Components Alive

The VueJS keyword '<keep-alive></keep-alive>' will, you guessed it, will keep the component alive even when reloading.

```
<keep-alive>
  <component :is="selectedComponent">
    <p>Default Content</p>
  </component>
</keep-alive>
```

### Dynamic Component Lifecycle Hooks

Activated and Deactivated are dynamic component lifecycle hooks that are used when switching between dynamic components.

```
deactivated() {
  console.log('Deactivated!');
},
activated() {
  console.log('Activated!');
},
```


## Helpful Links


Official Docs - Slots: <a href="http://vuejs.org/guide/components.html#Content-Distribution-with-Slots">http://vuejs.org/guide/components.html#Content-Distribution-with-Slots</a>

Official Docs - Dynamic: <a href="http://vuejs.org/guide/components.html#Dynamic-Components">http://vuejs.org/guide/components.html#Dynamic-Components</a>

Official Docs - Misc: <a href="http://vuejs.org/guide/components.html#Misc">http://vuejs.org/guide/components.html#Misc</a>