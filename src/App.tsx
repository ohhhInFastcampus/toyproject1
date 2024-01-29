import './App.css';
import { Skeleton } from '@/components/ui/skeleton';

function App() {
  return (
    <div className="nflex nflex-col nspace-y-3">
      <Skeleton className="nh-[125px] nw-[250px] nrounded-xl" />
      <div className="nspace-y-2">
        <Skeleton className="nh-4 nw-[250px]" />
        <Skeleton className="nh-4 nw-[200px] nbg-gray-400" />
      </div>
    </div>
  )
}

export default App;
