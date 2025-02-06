
function toggleMode() {
    const body = document.getElementById("body");
    
    // Generate a random pastel background color for the entire page
    const randomColor1 = `hsl(${Math.floor(Math.random() * 360)}, 80%, 75%)`;
    const randomColor2 = `hsl(${Math.floor(Math.random() * 360)}, 80%, 85%)`;
    
    body.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;}
 
