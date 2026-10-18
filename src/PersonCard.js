
function PersonCard({name, role, capacity, onDelete}){
    return(
        <div>
            <h3>{name}</h3>
            <p>Роль:{role}</p>
            <p>Ресурс: {capacity} дней</p>
            <button onClick={onDelete}>Удалить</button>
        </div>
    )
}


export default PersonCard;