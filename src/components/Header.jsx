import './Header.css'
 
 const Header = () => {
   return (
     <>
       <div className="hero container-fluid text-center">
         <div className="content">
           <div className="lc-block">
             <h2 className="display-5 fw-bold">¡Pizzería Mamma Mía!</h2>
           </div>
           <div className="lc-block col-lg-6 mx-auto mb-4">
             <p className="lead ">
               ¡Tenemos las mejores pizzas que podrás encontrar!
             </p>
             <hr />
           </div>
         </div>
       </div>
     </>
   )
 }
 
 export default Header