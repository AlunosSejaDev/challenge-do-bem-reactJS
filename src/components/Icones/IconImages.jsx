export default function IconImages ({ imageName, type, ...props }) {
  return <img src={`/images/${imageName}.${type}`} /> 
}
