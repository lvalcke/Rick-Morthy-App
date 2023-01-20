import style from './Card.module.css'

 function Card(props) {
   return (
   
      <div className={style.card} key={props.id}>
         <button className={style.closeBtn} onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img className={style.img}  src={props.image} alt="loading..." />
      </div>
   
   );
}

export default Card;