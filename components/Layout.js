import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return ( 
  <div style={{background:"#0c0c0c",color:"#BCB4B4",}}>
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout;