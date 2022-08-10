
function Images ({ imageName, type, ...props }) {
  return(
    <>
    <img src={`/images/${imageName}.${type}`} />
    </>
    
  )
}

export default Images