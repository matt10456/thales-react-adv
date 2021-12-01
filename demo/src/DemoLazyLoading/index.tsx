import { lazy, Suspense } from "react";
//import Child from "./Child";
const Child = lazy(() => import('./Child'))

export default () => (
  <>
    <h2>Demo Lazy Loading</h2>
    <Suspense fallback={<h3>Loading...</h3>}>
      <Child />
    </Suspense>
  </>
)