import { Card } from '../../components/Card';
import { Grid } from '../../components/Grid';
import { cards } from '../../data/cards';
import './styles.css';

const handleClick = (id: string) => {
  console.log(id);
};

export function App() {
  return (
    <div className="app">
      <Grid cards={cards} />
    </div>
  );
}
