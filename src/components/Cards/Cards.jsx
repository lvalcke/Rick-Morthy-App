import Card from '../Card/Card';
import style from './Cards.module.css'


export default function Cards({ characters, onClose }) {
   return (
   <div className={style.cards}>
   {characters.length !== 0 && characters.map((e) => <Card 
      key= {e.id}
      name= {e.name} 
      gender= {e.gender}
      image= {e.image}
      species= {e.species}
      onClose= {onClose}
      />)}
   </div>
   );
}
