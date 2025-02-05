/* eslint-disable react/prop-types */

const Card = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <input type="text" onChange={(e)=>props.setName(e.target.value)} />
      <p>name var :{props.name}</p>
    </div>
  )
}

export default Card