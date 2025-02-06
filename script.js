
function toggleMode() {
    const body = document.getElementById("body");
    
    
    const randomColor1 = `hsl(${Math.floor(Math.random() * 360)}, 80%, 75%)`;
    const randomColor2 = `hsl(${Math.floor(Math.random() * 360)}, 80%, 85%)`;
    
    body.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;}
 
