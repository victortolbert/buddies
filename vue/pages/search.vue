<template>
  <PlantSearch />
</template>

<script lang="ts">
// declare const x: Record<"a", string>;
// x.b; // error, Property 'b' does not exist on type 'Record<"a", string>'

// declare function acceptR(x: Record<"a", string>): void;
// acceptR({a: "hey", b: "you"}); // error, Object literal may only specify known properties


// const y = {a: "hey", b: "you"};
// acceptR(y); // okay

// type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>
// type ThreeStringProps = {prop1: string, prop2: string, prop3: string}

// type CatNames = "miffy" | "boris" | "mordred";
// type CatList = Record<CatNames, {age: number}>

// const cats: CatList = {
//   miffy: { age:99 },
//   boris: { age:16 },
//   mordred: { age:600 }
// }

// If I forget a cat, I get an error.
// If I add a cat that's not allowed, I get an error.
// If I later change CatNames, I get an error. This is especially useful because CatNames is likely imported from another file, and likely used in many places.

// type Statuses = "failed" | "complete";

</script>
