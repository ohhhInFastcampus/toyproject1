import './App.css';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input';

function App() {
  return (
    <div>
      <Input type='text' placeholder='아이디:' />
      <Button variant='default' size='sm' font='xl' weight='bold'>
        Button
      </Button>
    </div>
  );
}

export default App;
