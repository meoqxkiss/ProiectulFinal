<template>
        <header>
            <div class="logo">
                <h1>Adoptă&Ajută</h1>
            </div>
            <nav class="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/home">Success Stories</a></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                    
                </ul>
            </nav>
        </header>
</template>

<style>

header {
    background-color:#708871;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.logo h1 {
    margin: 0;
    font-size: 24px;
    color: #333;
   
      
}

.navigation ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.navigation li {
    margin-left: 20px;
}

.navigation a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    transition: color 0.3s ease;
}

.navigation a:hover {
    color: #073108; /* Change color on hover */
}

header {
    background-color: #708871; /* Pastel green background */
    display: flex;
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
    padding: 20px; /* Added padding for better alignment */
    position: relative; /* Position relative for alignment tweaks */
}

.logo {
    margin-right: 720px; /* Space between logo and menu */
}

.logo h1 {
    margin: 0;
    font-size: 24px;
    color: white; /* White color for text */
    position: relative;
    top: 2px; /* Fine-tune positioning */
    font-family: "Fraunces", serif;
}

.navigation ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex ;
    gap: 32px;
    align-items: center;
}

.navigation a {
    text-decoration: none;
    color: white; /* White color for menu items */
    font-size: 18px;
    font-weight: 700;
    position: relative;
    transition: color 0.3s ease;
}

.navigation a::after {
    content: ''; /* Empty content for underline */
    display: block;
    width: 0;
    height: 2px;
    background: white; /* White underline */
    transition: width 0.3s ease;
    position: absolute;
    bottom: -5px; /* Position it just below the text */
    left: 50%;
    transform: translateX(-50%);
}

.navigation a:hover::after, .navigation a:focus::after {
    width: 100%; /* Full width on hover */
}

</style>