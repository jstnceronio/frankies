app.component('contact-hero', {
    template:
    /*html*/
    `<section class="col-span-3 md:flex-row relative mt-8 w-full">
    <!-- Text section -->
    <div class="px-4 sm:px-32">
        <div class="w-fit mx-auto">
            <div class="header uppercase text-7xl md:text-[7.5rem] lg:text-[10rem] tracking-wide text-center font-bold leading-[1]">
                Contact us
            </div>
            <!-- XL Contact -->
            <div class="-tracking-normal font-normal">   
                <div class="text-lg w-fit mt-32 text-left">
                    <p>
                        <span class="font-bold">Frankies Bar</span>
                        Kammistrasse 11     <br />
                        3800 Interlaken     <br /> <br />
                        <span class="font-bold">Call: </span>033 525 16 30 <br />
                        <span class="font-bold">Mail: </span>info@frankies-interlaken.ch
                    </p>
                </div> 
                <div class="border-b-2 hover:border-b-slate-600 text-lg max-w-fit mt-8">
                    <a href="#contact-section">Send us a message</a>
                </div>
            </div>
        </div>
    </div> 
</section>

<!-- Way section --> 
<section class="col-span-3 md:flex-row relative mt-8 w-full">
    <div class="px-4 sm:px-32 font-playfair">
        <div class="header text-5xl md:text-7xl mt-32 uppercase font-bold text-center">
            How can you get to Frankies?
        </div>
        <div class="grid md:grid-cols-2 gap-8 mt-16 text-left">
            <div class="second max-w-full h-auto">
                <img src="./img/DSCF0270.JPG" alt="">
            </div>
            
            <div class="text-lg mt-2 lg:w-3/4">
                <div class="header font-bold">
                    Public Transport
                </div>
                <div class="mt-2">
                    The best way to find us is to go to the Interlaken East train station, go to track 8, and just after section D, turn left across the street ... simple as that.
                </div>
                <div class="header font-bold mt-16">
                    Car & Parking
                </div>
                <div class="mt-2">
                    There is plenty of parking at the Interlaken East train station if you are coming by car. <br /> 
                    If you are coming with your bicycle, you can park it in front of our bar underneath the covered bike stand.
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Form section -->
<section class="col-span-3 relative mt-40 sm:px-32 w-full font-playfair">
    <div class="header text-5xl md:text-7xl text-center uppercase font-bold -ml-1 w-full">
        Get in touch with us
    </div>
    <div class="grid gap-8 md:grid-cols-2 mt-16">
        <div class="first leading-relaxed mx-auto">
            <p class="header text-xl font-bold pb-8">
                Contact form
            </p>
            <p class="w-96 pb-16">
                Are you looking to join the Frankies team or have any feedback for us?
                Fill in the form below and we will get back to you as soon as we can. You can also call us anytime at 
                <span class="font-bold">033 525 16 30</span> or send an email <span class="font-bold">to info@frankies-interlaken.ch</span>
            </p>
            <form class="max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input id="subjectField" class="appearance-none block text-white border py-3 px-4 mb-3 leading-tight bg-transparent h-14 w-96" id="grid-first-name" type="text" placeholder="Name *">
                </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <textarea id="messageArea" class="no-resize appearance-none block text-white bg-transparent border py-3 px-4 mb-3 leading-tight h-48 w-96 resize-none" id="message" placeholder="Enter your message here *"></textarea>
                </div>
                </div>
                <div class="md:flex md:items-center" id="contact-section">
                    <div class="border-b-2 hover:border-b-slate-600 text-lg max-w-fit">
                        <a href="#" id="btnSend" onclick="sendMessage()">Send us a message</a>
                    </div>
                </div>
            </form>
        </div>
        <div class="second max-w-full h-auto">
            <img src="./img/cheers.jpg" alt="" class="object-cover">
        </div>
    </div>
</section>`,
    data() {
        return {}
    }
})