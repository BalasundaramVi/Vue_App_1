# Advanced Component Usage

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