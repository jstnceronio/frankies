app.component('frankies-footer', {
    template:
    /*html*/
    `<footer class="text-center col-span-3 font-playfair relative text-md mt-60 md:min-h-[400px] min-h-[900px]">
        <div class="grid gap-8 md:grid-cols-4 lg:grid-cols-5 mt-10 px-32">
            <div class="flex flex-col text-center items-center order-1">
                <span class="font-semibold">Sitemap</span>
                <span class="mt-4">
                    <a href="./index.html">Home</a> <br />
                    <a href="./events.html">Events</a> <br />
                    <a href="./contact.html">Contact</a> <br />
                </span>
            </div>
            <div class="flex flex-col text-center items-center order-2">
                <span class="font-semibold">Address</span>
                <span class="mt-4">
                    Frankies Bar <br />
                    Kammistrasse 11 <br />
                    3800 Interlaken <br />
                </span>
            </div>
            <div class="order-first col-span-full lg:col-span-1 lg:order-3 mx-auto">
                <div class="max-w-[200px]">
                    <img src="./img/shared/frankies-logo.png" alt="">
                </div>
            </div>
            <div class="flex flex-col text-center items-center order-4">
                <span class="font-semibold">Opening times</span>
                <span class="mt-4">
                    Mon: Closed <br />
                    Tue: Closed <br />
                    Wed: 16.00 – 23.30 <br />
                    Thu: 16.00 – 00.30 <br />
                    Fri: 16.00 – 00.30 <br />
                    Sat: 16.00 - 00.30 <br />
                    Sun: Closed
                </span>
            </div>
            <div class="flex flex-col text-center items-center order-5">
                <span class="font-semibold">Social Media</span>
                <span class="mt-4">
                    Instagram <br />
                    Facebook
                </span>
            </div>
        </div>
        <div class="text-center py-16">
            Copyright © Frankies Bar 2022 - Website by Justin Ceronio
        </div>
    </footer>`,
    data() {
        return {}
    }
})