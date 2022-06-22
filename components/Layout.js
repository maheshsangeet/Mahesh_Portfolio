import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return ( 
    <div style={{background:"#070707",color:"#b2b1b1"}}>
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout;