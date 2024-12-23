import React from 'react'
import ContactComp from './ContactComp'

function Booking() {

    return (
        <div>
            <div class="container mx-auto p-4">
                <h1 class="text-3xl font-bold text-center mb-6">Book Your Tour Now</h1>
                <ContactComp />
                <div id="confirmation" class="mt-6 hidden">
                    <h2 class="text-2xl font-bold text-center text-green-600">Booking Confirmed!</h2>
                    <p class="text-center">Thank you for booking with us. We will contact you shortly.</p>
                </div>
            </div>

        </div>
    )
}

export default Booking