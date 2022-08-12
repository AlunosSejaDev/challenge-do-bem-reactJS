function IconImages ({ imageName, type, ...props }) {
  return(
    <>
    <img src={`/images/${imageName}.${type}`} />
    </>
    
  )
}

export default IconImages