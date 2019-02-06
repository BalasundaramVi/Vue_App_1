# Communicating between Components

### Using Props in the Child Component

You can pass down props from parent components by binding it using **v-bind** or **:**.

In the child component, the passed in props must be labeled with the props indicator, and the name must match the name on the parent component.

Once passed into the child component, the passed in props can be used like a native property of the child component.

```
<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
    </div>
</template>

<script>
    export default {
        props: ['myName'],
        methods: {
            switchName() {
                return this.myName.split('').reverse().join('');
            },
        }
    }
</script>
```

### Validating "props"

In order to make sure no error occurs by not passing in something that is not acceptable, you must validate the props coming in.

The "props" element in the child script does not necessarily have to be an array, but can be an object.

The keys of this object are the name, and the value is the type of the key. It can also be multiple types, like one thing or another. Array of types - multiple types are valid.

```
export default {
  props: {
    myName: [String, Array]
  },
}
```

If the prop type fails, or is the wrong type passed in, then the whole component will not render. There will still be an error, and the warnings at development time will be useful for debugging.

You can also set the types as objects (but default and required contradict each other when used together):

```
export default {
  props: {
    myName: {
      type: String,
      required: true,
      default: 'helloWorld',
    }
  },
}
```

**If the type is an Object or Array, then the default should be a function that returns the Object or Array.** Otherwise set the default explicitly as the value you want.

### Using Custom Events for Child to Parent Communication

In each Vue instance, you have access to the **$emit()** method.

THe **$emit()** method has two argument.

1. The name of the event.
2. Any information to pass up from the event. The parent component can access this through **$event**.


### Understanding Unidirectional Data Flow

Communication in VueJS is unidirectional - only from parent to children or children to parent - not child to child.

Unidirectional Data flow from top to bottom.


### Communicating with Callback functions

You can use the $emit() method on another child sibling component to communicate between siblings without changing the information back up in the parent.

Another alternative to building child to parent to child chains is using the **Event Bus**.


### Using the Event Bus for Communication

The **Event Bus** is essentially a central class or object to pass data.

**main.js**
```
export const eventBus = new Vue();
```

**userEdit.vue**
```
export default {
    props: ['userAge'],
    methods: {
        editAge() {
            this.userAge = 30;
            // this.$emit('ageWasEdited', this.userAge);
            eventBus.$emit('ageWasEdited', this.userAge)
        }
    }
}
```

**userDetail.vue**
```
export default {
  created() {
      eventBus.$on('ageWasEdited', (age) => {
          this.userAge = age;
      });
  }
}
```

This is another way to edit sibling components without carrying the information into the parent but directly between children.

However, managing state can quickly get very complicated - to make this simpler, VueJS has **Vuex**.


### Centralizing Code in an Event Bus

Another way to use EventBus to generally store some centralized code that you want to access from different places in your code. *Any code that doesn't need to duplicated or needs to be stored centrally.*

Accessible from anywhere in your application as long as it is imported.

The EventBus can also be used to store data across the application.


**main.JS**
```
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});
```


**userEdit.vue**
```
<script>
import { eventBus } from '../main.js';

export default {
    props: ['userAge'],
    methods: {
        editAge() {
            this.userAge = 30;
            // this.$emit('ageWasEdited', this.userAge);
            // eventBus.$emit('ageWasEdited', this.userAge);
            eventBus.changeAge(this.userAge);
        }
    }
}
</script>
```


### Useful Links

Official Docs - Props: <a href="http://vuejs.org/guide/components.html#Props">http://vuejs.org/guide/components.html#Props</a>

Official Docs - Custom Events: <a href="http://vuejs.org/guide/components.html#Custom-Events">http://vuejs.org/guide/components.html#Custom-Events</a>

Official Docs - Non-Parent-Child Communication: <a href="http://vuejs.org/guide/components.html#Non-Parent-Child-Communication">http://vuejs.org/guide/components.html#Non-Parent-Child-Communication</a>