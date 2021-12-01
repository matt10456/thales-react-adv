import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css' // stylise le composant Skeleton

const LoadingSkeleton = () => (
  <div>
    <Skeleton height={200} width={200} />
  </div>
)

export default LoadingSkeleton