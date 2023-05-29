# Tailwind in Next.js

Simple project that uses Tailwind and Next.js.

## Setup

1. Run the application.

   ```shell
   npm install
   npm start
   ```

1. Navigate to <http://localhost:3000>.

## Notes

### Tailwind Class Naming Conventions

| Tailwind Name   | Example         | Actual Utility                                                                       |
|-----------------|-----------------|--------------------------------------------------------------------------------------|
| flex            | `flex-1`        | [flexbox & grid: flex](https://tailwindcss.com/docs/flex)                            |
| grid-cols-(col) | `grid-cols-6`   | [flexbox & grid: flex](https://tailwindcss.com/docs/grid-template-columns)           |
| gap-(length)    | `gap-x-2`       | [flexbox & grid: gap between flexbox & grid items](https://tailwindcss.com/docs/gap) |
| p-(length)      | `p-6`           | [spacing: padding](https://tailwindcss.com/docs/padding)                             |
| m-(length)      | `m-6`           | [spacing: margin](https://tailwindcss.com/docs/margin)                               |
| space-(length)  | `space-x-8`     | [spacing: space between elements](https://tailwindcss.com/docs/space)                |
| w-(length)      | `w-24`          | [sizing: width](https://tailwindcss.com/docs/width)                                  |
| h-(length)      | `h-24`          | [sizing: height](https://tailwindcss.com/docs/height)                                |
| bg-(color)      | `bg-white`      | [background: color](https://tailwindcss.com/docs/background-color)                   |
| text-(color)    | `text-slate`    | [typo: text color](https://tailwindcss.com/docs/text-color)                          |
| text-(size)     | `text-sm`       | [typo: text size](https://tailwindcss.com/docs/font-size)                            |
| font-(weight)   | `font-semibold` | [typo: font weight](https://tailwindcss.com/docs/font-weight)                        |
| rounded-(size)  | `rounded-lg`    | [border: radius](https://tailwindcss.com/docs/border-radius)                         |
| divide-(length) | `divide-x-2`    | [border: divide width](https://tailwindcss.com/docs/divide-width)                    | 

### Dynamic CSS

One great benefit of tailwind is that it will only include the css classes in the final build of the web app based on the classes are defined in the source code during build time. This keeps the final bundle small with just the css classes that are used by the app at runtime.

Tailwind does this by scanning the source code for all tailwind related css classes. Unfortunately, tailwind can only parse and interpret full, static class names in the source code. From [tailwind documentation](https://tailwindcss.com/docs/content-configuration#dynamic-class-names): "If you use string interpolation or concatenate partial class names together, Tailwind will not find them and therefore will not generate the corresponding CSS."

This is why if you have this in your code, the page will not render correctly at runtime as it does contain the `text-red-600` or `text-green-600`. Source: [Tailwind Docs: dynamic class names](https://tailwindcss.com/docs/content-configuration#dynamic-class-names)

```jsx
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>
```

You must make sure that the class names are reveal in full so that they can be picked up by tailwind during build time. Like this:

```jsx
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
```

But there are cases where we absolutely need to use string interpolation or concatenation. In such cases, we need to explicitly inject the full classes in the tailwind config file `tailwind.config.js` even if the tsx or ts files are just using the dynamically created css classes. This is technique is called [safelisting classes](https://tailwindcss.com/docs/content-configuration#safelisting-classes) by tailwind. Although, for some reason, tailwind discourages this practice. 


## Reference

* [Tailwind CSS](https://tailwindcss.com/)
* [Tailwind CSS: Docs](https://tailwindcss.com/docs)
