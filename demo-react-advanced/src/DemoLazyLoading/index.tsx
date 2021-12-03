import { lazy, Suspense } from "react";
//import Child from "./Child";
const Child = lazy(() => import('./Child')) // lazy loading

export default () => (
  <Suspense fallback={<h3>Loading...</h3>}>
    <Child />
  </Suspense>
)