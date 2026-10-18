


function Hello({ name,role }) {
          const color = role ==="FE" ? "blue" : role ==="BE" ? "green" : "black";

    return (
        <div>
            <h1 style={{color}}>Привет, я учу React, меня зовут {name} и я занимаюсь {role}</h1>
        </div>
    )
}


export default Hello