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



