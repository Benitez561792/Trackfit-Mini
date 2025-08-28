

export function Welcome() {
  return (

    <div >

    <h1
  style={{
    fontSize: "2.5rem",     
    fontWeight: "bold",      
    color: "#2563eb",  
    textAlign: "center",           
    marginBottom: "20px",   
    textShadow: "2px 2px 6px rgba(0,0,0,0.2)", 
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" 
  }}
>
  Bem-vindo(a)! Seu corpo e sua mente agradecem por essa escolha 🚀
</h1>

<h2
  style={{
    fontSize: "1.8rem",      
    fontWeight: "600",       
    color: "#1e40af",         
    textAlign: "center",      
    marginBottom: "15px",     
    textShadow: "1px 1px 4px rgba(0,0,0,0.15)", 
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    letterSpacing: "1px",     
    textTransform: "uppercase"
  }}
>
  PROJETINHO VERÃO
</h2>

<p
  style={{
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "#374151", 
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto",
    marginTop: "10px"
  }}
>
  "O corpo conquista o que a mente acredita💪🏋️‍♀️."
</p>


      
    </div>
    
  );
};

export default Welcome;