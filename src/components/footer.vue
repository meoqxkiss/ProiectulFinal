<template>
    <div>
        <div class="footer">
        <div class="footer-content">
            <div class="footer-section contact-info">
                <h3>Contact Us</h3>
                <p>Phone: +123 456 7890</p>
                <p>Email: info@website.com</p>
                <p>Address: 123 Main Street, City, Country</p>
                <p>&copy; Acest website a fost realizat în cadrul summer-campului "GirlsGoIT" , ediția 2024.</p>

            </div>
            
        </div>
    </div>
    </div>
</template>

<style>
.footer {
    background-color: #606676; /* Light gray background */
    color: #A6A6A6;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
}

.footer-section {
    flex: 1;
    margin: 10px;
    min-width: 250px;
}

.footer-section h3 {
    margin-bottom: 10px;
}

.footer-section p {
    margin: 5px 0;
}
</style>