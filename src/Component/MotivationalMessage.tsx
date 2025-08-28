interface MotivationalMessageProps {
    message: string;
    author: string;
}

export function MotivationalMessage(props: MotivationalMessageProps) {
    return (
        <div style={{
            
        }}>
            <h3 style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#2563eb",
            marginBottom: "20px",
            textShadow: "2px 2px 6px rgba(0,0,0,0.2)", 
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" 
            }}>{props.message}</h3>
            <p style={{
            textShadow: "2px 2px 6px rgba(0,0,0,0.2)", 
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" 
            }}>{props.author}</p>
        </div>
    )
}