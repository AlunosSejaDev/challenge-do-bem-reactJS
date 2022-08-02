import styles from './Header.module.css'

function Header () {
  return (

  <header className={styles.header}>
      <img src="cbIconHeader.svg.png"></img>      
      <a href='' style={{ color:"#d9d9d9", fontWeight:"bold" }}>Home</a>
      <a href='' target="_blank" style={{ color:"#f2f2f2", fontWeight:"bold" }}>Ações</a>
      <a href='' target="_blank" style={{ color:"#d9d9d9", fontWeight:"bold" }}>Como funciona?</a>
      <a href='' target="_blank" style={{ color:"#d9d9d9", fontWeight:"bold" }}>Sobre nós</a>
          
  </header>
    
  )
}

export default Header;