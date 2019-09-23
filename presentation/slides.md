Vue.js — A practical introduction
================================================================================
<!-- .slide: data-background-color="#42b883" -->
<!-- .element: style="font-size: 3em; text-decoration: underline;" -->

## Henri Tukiainen
## 20.9.2019 Lilla Roberts

----


This presentation
================================================================================

- Slides + live code samples
- Maybe a coding exercise
- Ask questions when you have them
- Checklist
  <!-- .element: class="fragment" data-fragment-index="1" -->
  - Can everyone hear me?
    <!-- .element: class="fragment" data-fragment-index="2" -->
  - Presentation font size OK?
    <!-- .element: class="fragment" data-fragment-index="3" -->
  - Code editor font size OK? →
    <!-- .element: class="fragment" data-fragment-index="4" -->

```js
console.log('Can you read this?')
```
<!-- .element: class="fragment" data-fragment-index="3" -->

----

Vue
--------------------------------------------------------------------------------

- Pronounced */vjuː/*
- JavaScript framework for building user interfaces and single-page applications
- Created by Evan You, first release in 2014
- ☆ 148k on GitHub
  <span class="fragment" data-fragment-index="1">(React: 136k)</span>

----

Me
--------------------------------------------------------------------------------

- Henri Tukiainen
- Co-Founder, software consultant at Momocode Ltd.
- Full-stack web developer
- Vue since 2016

----

You
--------------------------------------------------------------------------------

- Who's familiar with...
  - React?
    <!-- .element: class="fragment" data-fragment-index="1" -->
  - AngularJS? Angular2+?
    <!-- .element: class="fragment" data-fragment-index="2" -->
  - ES6+?
    <!-- .element: class="fragment" data-fragment-index="3" -->
  - Webpack? Babel?
    <!-- .element: class="fragment" data-fragment-index="4" -->

----

Agenda
--------------------------------------------------------------------------------

- 09-12 **Part 1**: Vue principles, concepts and features
- 12-13 Lunch
- 13-16 **Part 2**: SPA development with Vue
  - Coffee break at 14

---

**Vue**
================================================================================
<!-- .slide: class="big-heading-slide" data-background-color="#42b883" -->

---

What do Vue apps look like?
--------------------------------------------------------------------------------

```html
<div id="app">
  Hello {{ name }}!
</div>

<script>
  var app = new Vue({
    data: {
      name: 'Anonymous'
    }
  }).$mount('#app')
</script>
```

---

Core principles
--------------------------------------------------------------------------------

- Progressive
  <!-- .element: class="fragment" data-fragment-index="1" -->
  - Incrementally adoptable into existing applications
- Approachable
  <!-- .element: class="fragment" data-fragment-index="2" -->
  - Low entry barrier, gradual learning curve
- Versatile
  <!-- .element: class="fragment" data-fragment-index="3" -->
  - Scalable between simple library and full featured framework
- Performant
  <!-- .element: class="fragment" data-fragment-index="4" -->
  - Small footprint, fast performance

> "I figured, what if I could just extract the part that I really
> liked about Angular and build something really lightweight."
>
> – Evan You
<!-- .element: class="fragment margin-top" data-fragment-index="5" -->

---

Architecture
--------------------------------------------------------------------------------

- Model–view–viewmodel (MVVM) inspired architecture
  - **ViewModel**: Object that syncs the Model and the View = Vue instance
  - **View**: DOM managed by Vue instances
  - **Model**: Plain JavaScript object made reactive by Vue.js

<p class="stretch center">
  <a href="./assets/images/mvvm-architecture.png" target="_blank">
    <img data-src="./assets/images/mvvm-architecture.png">
  </a>
</p>

---

Other details
--------------------------------------------------------------------------------

- Browser compatibility: IE9+
- 22.8 kB minified & gzipped
  <span class="fragment" data-fragment-index="1">(React: 37.3 KB)</span>

---

Versions
--------------------------------------------------------------------------------

- 1.0 - 27.10.2015
- 2.0 - 30.9.2016
  - 2.6 - 4.2.2019
- 3.0
  - Announced 15.11.2018
  - Expected release 2020

---

**Concepts and features overview**
================================================================================
<!-- .slide: class="big-heading-slide" data-background-color="#42b883" -->

---

Vue instance
--------------------------------------------------------------------------------

A Vue application starts by creating a Vue instance:

```js
var app = new Vue({
  // options
})
```

Vue applications consist of a root Vue instance and components – which are also
Vue instances.
<!-- .element: class="fragment" data-fragment-index="1" -->

```text
Root Instance
└─ Component A
   ├─ Component B
   │  ├─ Component D
   │  └─ Component E
   └─ Component C
      ├─ Component D
      └─ Component F
```
<!-- .element: class="fragment no-background" data-fragment-index="1" -->

---

Declarative rendering 1/2
--------------------------------------------------------------------------------

Data is declared in the Vue instance and bound to the DOM when used in a
template

```html
<div>{{ message }}</div>
```
<!-- .element: class="fragment" data-fragment-index="1" -->

```js
var app = new Vue({
  data: {
    message: 'Hello Vue!'
  }
})
```
<!-- .element: class="fragment" data-fragment-index="2" -->

<pre class="html-result">
  <div>Hello Vue!</div>
</pre>
<!-- .element: class="fragment html-result" data-fragment-index="3" -->

----

Declarative rendering 2/2
--------------------------------------------------------------------------------

You can also bind attributes, and use JavaScript expressions

```html
<div v-bind:title="tooltip">{{ message.split('').reverse().join('') }}</div>
```
<!-- .element: class="fragment" data-fragment-index="1" -->

```js
var app = new Vue({
  data: {
    tooltip: 'This is the message backwards',
    message: 'Hello Vue!'
  }
})
```
<!-- .element: class="fragment" data-fragment-index="2" -->

<pre class="html-result">
  <div title="This is the message backwards">!euV olleH</div>
</pre>
<!-- .element: class="fragment html-result" data-fragment-index="3" -->

---

Reactivity
--------------------------------------------------------------------------------

Properties in a Vue instance's `data` object are added to Vue's reactivity
system. When the data changes, the view is re-rendered.

```html
<span>The number is {{ number }}</span>
```

```js
var app = new Vue({
  data: {
    number: 1
  }
})
app.number = 2 // View is immediately updated
```

---

Directives
--------------------------------------------------------------------------------

Attributes starting with `v-` are directives that tell Vue how to render the
DOM.

Directives take care of things like

- Data binding
- Rendering text or HTML
- Conditionals
- Loops
- Forms and input
- Events

---

Components
--------------------------------------------------------------------------------

Components are Vue instances that can be used as custom elements in templates.

```html
<hello-world name="Vue"></hello-world>
```

```js
Vue.component('hello-world', {
  template: '<div>Hello {{ name }}!</div>'
})
```

<pre class="html-result">
  <div>Hello Vue!</div>
</pre>

---

*Let's code →*
--------------------------------------------------------------------------------
<!-- .slide: data-background-color="#000000" -->

---

Thoughts on demo app
--------------------------------------------------------------------------------

Pros:
<!-- .element: class="fragment" data-fragment-index="1" -->

+ Writing a working app is easy
  <!-- .element: class="fragment" data-fragment-index="2" -->
+ Basic concepts are easy to understand
  <!-- .element: class="fragment" data-fragment-index="2" -->
+ We can do quite a lot with just HTML and vanilla JS
  <!-- .element: class="fragment" data-fragment-index="2" -->

Cons:
<!-- .element: class="fragment" data-fragment-index="3" -->
- Organizing code is difficult
  <!-- .element: class="fragment" data-fragment-index="4" -->
- String templates are inconvenient to write and maintain
  <!-- .element: class="fragment" data-fragment-index="4" -->
- Using vanilla JS is inconvenient
  <!-- .element: class="fragment" data-fragment-index="4" -->
- HTML restrictions are inconvenient
  <!-- .element: class="fragment" data-fragment-index="4" -->
- We only had one page, not a proper SPA
  <!-- .element: class="fragment" data-fragment-index="4" -->
- Managing state across components in the app is difficult
  <!-- .element: class="fragment" data-fragment-index="4" -->

---

**Concepts and features**
================================================================================
<!-- .slide: class="big-heading-slide" data-background-color="#42b883" -->

---

Vue instance options
--------------------------------------------------------------------------------

----

### Data 1/2

`data` is a plain object or function that returns a plain object. Must be a
function for components.

```js
var vm = new Vue({
  data: function () {
    return {
      some: 'data'
    }
  }
})
console.log(vm.some) // Prints 'data'
```

Vue recursively adds getters and setters for all properties, making the data
object reactive. The reactive properties are made available in the Vue instance.

----

### Data 2/2

- Properties starting with `_` or `$` are reserved for Vue and are not made
  available in the instance (`vm.$data._something` works though)
- You cannot add new properties directly to the instance
  <!-- .element: class="fragment" data-fragment-index="1" -->
  ```js
  var vm = new Vue({
    data: function () {
      return {
        some: 'data'
      }
    }
  })
  vm.someOther = 'data' // Does NOT work!
  ```
  <!-- .element: class="fragment" data-fragment-index="1" -->

----

### Props

`props` is an array or object defining the data received from parent components.
Vue makes the props available as reactive properties in the Vue instance.

```js
new Vue({
  // Array syntax makes all props not required, not validated and without default values
  props: ['someProp', 'anotherProp']
})
```

```js
new Vue({
  props: {
    // Object syntax allows specifying more details
    someProp: {
      type: String,
      default: 'Some value',
      required: false,
      validator: function (value) {
        return value.length > 3
      }
    }
  }
})
```
<!-- .element: class="fragment" data-fragment-index="1" -->

Type can be `String`, `Number`, `Boolean`, `Array`, `Object`, `Date`,
`Function`, `Symbol`, or custom constructor, or array of these.
<!-- .element: class="fragment" data-fragment-index="1" -->

----

### Computed 1/2

`computed` properties are added to the Vue instance. The properties are reactive
for the reactive properties used in the computation. Computed properties can
access the Vue instance via `this`.

```js
new Vue({
  props: ['exponent'],
  data: {
    base: 5
  },
  computed: {
    power: function () {
      return Math.pow(this.base, this.exponent)
    }
  }
})
```

----

### Computed 2/2

- Computed properties are cached and only re-computed when a referenced reactive
  property changes.
- You must only use reactive properties or constants, never non-reactive values.
  <!-- .element: class="fragment" data-fragment-index="2" -->
  ```js
  new Vue({
    data: {
      factor: 0.5
    },
    computed: {
      partOfScreenWidth: function () {
        return window.innerWidth * this.factor // Does NOT work!
      }
    }
  })
  ```
  <!-- .element: class="fragment" data-fragment-index="2" -->
- Computed properties must never cause side effects.
  <!-- .element: class="fragment" data-fragment-index="3" -->
- Use computed properties instead of methods when possible, to take advantage
  of caching.
  <!-- .element: class="fragment" data-fragment-index="4" -->


----

### Methods

`methods` are functions to be added to the Vue instance, which can also be
accessed from templates. All methods can access the Vue instance via `this`.

```js
new Vue({
  data: {
    currency: '$'
  },
  methods: {
    formatCurrency: function (amount) {
      return this.currency + Number.parseFloat(number).toFixed(2) // E.g. '$123.45'
    }
  }
})
```

- Don't use arrow functions as methods, or `this` will not be bound.
- Prefer computed properties when possible, as method results are not cached.

----

### Watch 1/2

`watch` is a map of functions to be called when a watched property changes.
Watch functions have access to Vue instance via `this`.

```js
new Vue({
  data: {
    someProperty: 'Some value'
  },
  watch: {
    someProperty: function (value, oldValue) {
      console.log('Changed from ' + oldValue + ' to ' + value)
    }
  }
})
```

----

### Watch 2/2

- More options:
  ```js
  new Vue({
    watch: {
      // Method as handler
      prop1: 'someHandler',
      // Multiple handlers
      prop2: ['firstHandler', 'secondHandler'],
      // Watch nested value
      'obj1.prop1': 'someHandler'
      // Additional options
      obj1: {
        // Call handler with initial value
        immediate: true,
        // Watch changes in properties of object
        deep: true,
        handler: 'someHandler'
      }
    }
  })
  ```

- You can create watchers dynamically with
  ```js
  var unwatch = vm.$watch('prop', callback, options)
  ```
- Don't use arrow functions as handlers, or `this` will not be bound.

----

### Lifecycle hooks

Lifecycle hooks are functions to be called when Vue instance lifecycle phase
changes. All lifecycle hooks can access the Vue instance via `this`.

```js
new Vue({
  // ...
  mounted () {
    this.getDataFromApi()
  }
})
```

- Possible hooks: `beforeCreate`, `created`, `beforeMount`, `mounted`,
  `beforeUpdate`, `updated`, `activated`, `deactivated`, `beforeDestroy`,
  `destroyed`, `errorCaptured`
- Don't use arrow functions as methods, or `this` will not be bound.

----

### Mixins and extends

`mixins` provide reusable functionality that is merged with a Vue instance's own
functionality.

```js
// Both methods will be available on the instance.
var mixin = {
  methods: {
    doSomething: function () {}
  }
}
new Vue({
  mixins: [mixin],
  methods: {
    doSomethingElse: function () {}
  }
})
```

Extends adds functionality from another component.
<!-- .element: class="fragment" data-fragment-index="1" -->

```js
var componentA = {
  // Options
}
var componentB = {
  extends: componentA
  // More options
}
```
<!-- .element: class="fragment" data-fragment-index="1" -->

----

### Provide / Inject

A component can `provide` values to all child components in the hierarchy that
`inject` a value.

```js
var parentComponent = {
  provide: {
    someProperty: 'value'
  }
}
var childComponent = {
  inject: ['someProperty'],
  created () {
    console.log(this.someProperty) // The injected value is available
  }
}
```

This should be used sparingly to avoid coupling components together.

----

### More instance properties

Covered elsewhere:

- `el`: DOM element or selector to automatically mount
- `components`: custom components
- `template`: string template to replace mounted element
- `render`: render function, alternative to template

----

### Even more instance properties

Not covered:

- `directives`: custom directives
- `filters`: custom filters
- `parent`: make parent instance available to child instance
- `functional`: make component functional (stateless and instanceless)
- `model`: Custom `v-model` property and event names

---

Directives
--------------------------------------------------------------------------------

----

### Binding text and HTML content

- `v-text` is similar to `{{ }}`, but replaces the entire `textContent` of an
  element
- `v-html` replaces the `innerHTML` content of an element
  - Remember to sanitize the values to avoid XSS attacks
  - Only regular HTML elements are supported, not components

```html
<div v-text="plainMessage"></div>
<div v-html="htmlMessage"></div>
```

```js
new Vue({
  data: {
    plainMessage: 'Hello Vue!',
    htmlMessage: 'Hello <b>Vue</b>!'
  }
})
```

<pre class="html-result">
  <div>Hello Vue!</div>
  <div>Hello <b>Vue</b>!</div>
</pre>

----

### Binding attributes and props

- `v-bind`: binds one or more attribute values or component properties to an
  expression
- Use with an argument to bind specific attribute, or with an object to
  bind all properties of the object

```html
<div v-bind:title="tooltip">This element has the title attribute</div>

<!-- This component receives props matching all they keys in someObject -->
<some-component v-bind="someObject"></some-component>

<div :title="tooltip">There is also a shorthand</div>
```

----

### Binding classes and styles

- `v-bind` supports additional syntax when used with `class` or `style`
  attributes
- Style bindings are automatically vendor-prefixed

```html
<div v-bind:class="{ bold: isTextBold }"></div>
<div v-bind:class="[ 'firstClass', 'secondClass' ]"></div>
<div v-bind:class="isTextBold && 'bold'"></div>

<div v-bind:style="{ fontWeight: 'bold' }"></div>
<div v-bind:style="[{ fontWeight: 'bold' }, { textAlign: 'center' }]"></div>
<div v-bind:style="{ fontWeight: isTextBold && 'bold' }"></div>
```

----

### Conditionals

- `v-if`, `v-else-if`, `v-else`: Removes and adds elements to/from the DOM
  depending on the values
  - If you want to toggle multiple elements at once, wrap them in a `<template>`
    to avoid unnecessary wrapper elements
- `v-show`: sets the CSS `display` property to `none` when evaluated to false

```html
<div>
  <div v-if="loading">Still loading...</div>
  <template v-else>
    <p>Loading done!</p>
    <p>The data is: {{ data }}</p>
  </template>
</div>
```

----

### Loops

- `v-for`: renders an element multiple times based on an array or object
  - You should  provide `key` attribute so Vue knows which items are the same
    when data changes
  - Note DOM template restrictions when using custom components

```html
<ul>
  <!-- Loops items in an array -->
  <li v-for="(item, index) in array" v-bind:key="item.id">
    {{ item.title }}
  </li>
  <!-- Loops 10 times -->
  <li v-for="n in 10">
    {{ n }}
  </li>
  <!-- is attribute is needed because only li is valid inside ul -->
  <li
    is="some-component"
    v-for="item in array"
    v-bind:key="item.id"
    v-bind="item"
  ></li>
</ul>
<div v-for="(value, key) in object">
  {{ value }}
</div>
```

----

### Events

- `v-on` calls specified callback when specified event is fired
- With a HTML element, listens to native DOM events
- With a component, listens to custom events

```html
<button v-on:click="console.log($event)">Click me</button>
<form v-on:submit.prevent="handleSubmit"></form>
<button @click="handleClick">Shorthand</button>
```

- Many modifiers are also supported: `.stop`, `.prevent`, `.once` etc.

----

### Forms

- `v-model` creates a two-way binding on input element or custom component
- Supported modifiers: `.lazy`, `.number`, `.trim`

```html
<input type="text" v-model="firstName">
<input type="number" v-model.number="age">
```

----

### More directives

- `v-cloak`: removed when Vue instance has initialized, can be used to hide
  uncompiled HTML during initialization
- `v-pre`: element is not compiled, used for optimization
- `v-once`: element or component is rendered only once, i.e. does not update
  reactively, used for optimization
- `v-slot`: used for passing content from parent to child component

```html
<div v-cloak>The data is {{ data }}</div>
<style>
  [v-cloak] {
    display: none;
  }
</style>
```

----

### Custom directives

- You can create custom directives for interacting with the DOM
- Custom directives can be registered globally or locally, similar to components
- Use this sparingly; directives are not a replacement for components

```js
// Register a global custom directive called `v-focus`
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})
```

```html
<input v-focus>
```

---

Reactivity 1/3
--------------------------------------------------------------------------------

Vue converts a data object's properties to getters and setters when the instance
is created, making them reactive.

When you read a reactive property, Vue is notified by the getter. This allows
Vue to track dependencies.

When you set a reactive property, Vue is notified by the setter. This allows Vue
to notify dependencies and re-render.

<p class="stretch center">
  <a href="./assets/images/reactivity-loop.png" target="_blank">
    <img data-src="./assets/images/reactivity-loop.png">
  </a>
</p>

----

Reactivity 2/3
--------------------------------------------------------------------------------

- Restrictions with objects
  - Vue cannot detect when new properties are added or existing properties are
    deleted; all properties must exist in initial data for them to be reactive
  - To modify existing object's properties use `this.$set` and `this.$delete`
  - To assign multiple properties, replace the entire object:
    ```js
    this.someData = Object.assign({}, this.someData, { new: 'value' })
    ```
- Restrictions with arrays
  - Vue cannot detect when you directly set an item with the index, or modify
    the array length
  - Use `this.$set` and `this.$delete` or Array methods: `splice`, etc.

----

Reactivity 3/3
--------------------------------------------------------------------------------

- DOM updates are asynchronous. If you need to rely on the DOM being updated,
  use `$nextTick`
  ```js
  this.$nextTick(function () {
    console.log(this.$el.textContent)
  })
  // or
  await this.$nextTick()
  ```

---

Templates and rendering
--------------------------------------------------------------------------------

Templates can be defined in a number of ways:

- **Render function**
- **String**
- **Template string**
- **JSX**
- **Single file component**
- Inline HTML
- X-Template HTML

----

### Render function

- All other template types are compiled to render functions
- Render functions are usually inconvenient to write manually, but you might use
  them for certain special components

```js
new Vue({
  render (createElement) {
    return createElement('div', 'Hello World!')
  }
})
```

----

### String template

- Useful when code is not transpiled
- Gets messy for any non-trivial component
- Requires a full build of Vue

```js
new Vue({
  template: '<div>Hello Vue!</div>'
})
```

```js
new Vue({
  template:
    '<div>' +
      '<p>' +
        'Hello Vue!' +
      '</p>' +
      '<button v-on:click="doSomething">' +
        'Some text here' +
      '</button>' +
    '</div>'
})
```
<!-- .element: class="fragment" data-fragment-index="1" -->

----

### String literal template

- Useful for more complex templates.
- Requires browser support or transpilation.
- Requires a full build of Vue.

```js
new Vue({
  template: `
    <div>
      Hello Vue!
    </div>
  `
})
```

----

### JSX

- Similar to JSX in React
- Corresponds closely with render functions
- Requires transpilation
- Directives are mostly not available in JSX

```js
new Vue({
  data () {
    return {
      name: 'Vue'
    }
  },
  render () {
    return (
      <div>
        Hello {this.name}!
      </div>
    )
  }
})
```

----

### Single file component

- Template, script and style in one file
- Requires transpilation
- Most popular choice when using build tools

```html
<!-- SomeComponent.vue -->

<template>
  <div class="greeting">Hello {{ name }}!</div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Vue'
    }
  }
}
</script>

<style>
  .greeting {
    font-weight: bold;
  }
</style>
```

----

### Inline HTML

- Component element contents are used as the template rather than being replaced
- Bad for code organization since the template is separated from the rest of
  the component

```html
<my-component inline-template>
  Hello Vue!
</my-component>
```

----

### X-Template HTML

- Bad for code organization since the template is separated from the rest of
  the component

```html
<script type="text/x-template" id="my-template">
  <div>Hello Vue!</div>
</script>
```

```js
new Vue({
  template: '#my-template'
})
```

---

Components
--------------------------------------------------------------------------------

----

### Component registration

- Components can be registered globally or locally
- When using PascalCase, Vue makes it available in templates as kebab-case

```js
const SomeComponent = {
  // options
}

// Available to all Vue instances
Vue.component('some-component', SomeComponent)

// Available only to this instance
new Vue({
  components: {
    SomeComponent: SomeComponent
  }
})
```

----

### Props 1/2

- Props should be named in camelCase, but need to be written in kebab-case in
  templates

```js
Vue.component('some-component', {
  props: [ 'someString' ]
})
```

```html
<some-component some-string="Hello" />
```

----

### Props 2/2

- When passing static props (without `v-bind`), the value is always a string
- To pass any non-string prop, you must use `v-bind` even if the value is static
- Boolean value `true` can be passed by omitting the value

```html
<some-component v-bind:some-number="42" />
<some-component some-string="message" />
<some-component some-boolean />
<some-component v-bind:some-array=['a', 'b']>
```
<!-- .element: class="fragment" data-fragment-index="2" -->

```html
<!-- These are all wrong! -->
<some-component some-number="42" />         <!-- String: "42" -->
<some-component some-boolean="true" />      <!-- String: "true" -->
<some-component some-array="['a', 'b']" />  <!-- String: "['a', 'b']" -->
```
<!-- .element: class="fragment fade-in-then-out" data-fragment-index="1" -->

----

### Component lifecycle

<p class="stretch center">
  <a href="./assets/images/component-lifecycle.png" target="_blank">
    <img data-src="./assets/images/component-lifecycle.png">
  </a>
</p>

----

### Slots 1/2

- Slots allow passing content from parent component to child component
- Slot content has access to the parent's data, not the child's

```html
<!-- parent -->
<stylish-button v-bind:color="themeColor">
  {{ callToAction }}
</stylish-button>
```

```html
<!-- stylish-button -->
<button v-bind:style="{backgroundColor: color}">
  <slot></slot>
</button>
```

----

### Slots 2/2

- Slots can also be named in order to have multiple slots
- Scoped slots allow passing data from child component to the content from
  parent component

```html
<!-- parent -->
<stylish-button v-bind:color="themeColor">
  <template v-slot:icon="slotProps">
    <action-icon v-bind:color="themeColors[slotProps.buttonType]" />
  </template>
  <template slot="text">
    {{ callToAction }}
  </template>
</stylish-button>
```

```html
<!-- stylish-button -->
<button v-bind:style="{backgroundColor: color}">
  <slot v-bind:button-type="buttonType">
  <slot name="text"></slot>
</button>
```

----

### Dynamic components

- You can use the `is` attribute to switch between components for the same
  element

```html
<component v-bind:is="currentComponent"></component>
```

----

### Async components

- Asynchronous components are supported, with handling for load and error states

```js
new Vue({
  components: {
    'some-component': () => ({
      // The component to load (should be a Promise)
      component: import('./SomeComponent.vue'),
      // A component to use while the async component is loading
      loading: LoadingComponent,
      // A component to use if the load fails
      error: ErrorComponent,
      // Delay before showing the loading component. Default: 200ms.
      delay: 200,
      // The error component will be displayed if a timeout is
      // provided and exceeded. Default: Infinity.
      timeout: 3000
    })
  }
})
```

---

Transitions
--------------------------------------------------------------------------------

Vue also provides out-of-the-box support for transition animations.

- Vue adds and removes classes when element inside `<transition>` is added or
  removed
- Vue reads correct timing for adding and removing classes from css properties

```html
<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
```

```js
new Vue({
  data: {
    show: true
  }
})
```

```css
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to
  opacity: 0;
}
```

---

**SPA development with Vue**
================================================================================
<!-- .slide: class="big-heading-slide" data-background-color="#42b883" -->

---

Vue CLI
--------------------------------------------------------------------------------

- Vue CLI is a standard build tool for Vue projects, based on Node.js
- CLI
  <!-- .element: class="fragment" data-fragment-index="1" -->
  - Global command for creating projects and prototyping
- CLI service
  <!-- .element: class="fragment" data-fragment-index="2" -->
  - Local dev dependency for developing and bundling Vue apps, built on top of
    webpack
- CLI plugins
  <!-- .element: class="fragment" data-fragment-index="3" -->
  - Optional features for Vue CLI project: Babel, TypeScript, ESLint, PWA, ...

```bash
yarn global add @vue/cli
vue create demo-app
yarn serve
yarn build
yarn inspect
```
<!-- .element: class="fragment" data-fragment-index="4" -->

----

### CLI service

- Configuration without ejecting
  - Projects come with sensible defaults, but you can configure any part of
    Webpack while still using defaults for the rest
- The webpack configuration is always generated and can be inspected using
  `vue inspect`
- Build modes and environment variables are supported
- Supports building as app, library or web component

```js
// vue.config.js
module.exports = {
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('graphql')
      .test(/\.graphql$/)
      .use('graphql-tag/loader')
        .loader('graphql-tag/loader')
        .end()
  }
}
```

----

### CLI plugins

- Plugins can be added when creating a project or into an existing project
- Vue CLI provides an API for plugins to
  - Change webpack config
  - Add service commands
  - Add dependencies
  - Creating and modifying files
  - Prompt for options

```bash
vue add eslint # installs vue-plugin-eslint
```

---

Core libraries
--------------------------------------------------------------------------------

- Vue Router: official router
- Vuex: state management library

---

*Let's code →*
--------------------------------------------------------------------------------
<!-- .slide: data-background-color="#000000" -->

---

**Thank you**
================================================================================
<!-- .slide: class="big-heading-slide" data-background-color="#42b883" -->
