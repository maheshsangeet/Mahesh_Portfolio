import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return ( 
    <div style={{background:"#090909",color:"#BCB4B4"}}>
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout;