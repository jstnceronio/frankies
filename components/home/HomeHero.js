app.component('home-hero', {
    template:
    /*html*/
    `<section class="col-span-3 flex flex-col md:flex-row relative mt-8">
    <!-- Text section Outstanding drinks, great tunes & a special atmosphere--> 
    <div class="md:w-3/5 h-1/4 md:mt-12 lg:text-center md:p-10">
        <div class="header lg:w-3/4 md:text-center font-ultra tracking-wide md:absolute text-center left-0 right-0 font-bold w-full ml-auto mr-auto uppercase 
        text-5xl md:text-[7.5rem] lg:text-[10rem] leading-[1]">
            Welcome to Frankies <br /> Bar
        </div>
    </div>
    <!-- Image section --> 
    <div class="mt-8 mx-auto">
        <!--image slider start-->
        <div class="slider">
            <div class="slides">
            <!--radio buttons start-->
            <input type="radio" name="radio-btn" id="radio1">
            <input type="radio" name="radio-btn" id="radio2">
            <input type="radio" name="radio-btn" id="radio3">
            <input type="radio" name="radio-btn" id="radio4">
            <!--radio buttons end-->
            <!--slide images start-->
            <div class="slide first">
                <img src="./img/second.jpg" alt="" class="object-cover">
            </div>
            <div class="slide">
                <img src="./img/first.jpg" alt="" class="object-cover">
            </div>
            <div class="slide">
                <img src="./img/homepage/DSCF0095.JPG" alt="" class="object-cover">
            </div>
            <div class="slide">
                <img src="./img/homepage/DSCF0197.JPG" alt="" class="object-cover">
            </div>
            <div class="slide">
                <img src="./img/homepage/DSCF0075.JPG" alt="" class="object-cover">
            </div>
            <!--slide images end-->
            <!--automatic navigation start-->
            <div class="navigation-auto">
                <div class="auto-btn1"></div>
                <div class="auto-btn2"></div>
                <div class="auto-btn3"></div>
                <div class="auto-btn4"></div>
            </div>
            <!--automatic navigation end-->
            </div>
            <!--manual navigation start-->
            <div class="navigation-manual">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>
            </div>
            <!--manual navigation end-->
        </div>
        <!--image slider end-->
    </div>
</section>

<section class="col-span-3 relative px-4 sm:px-32 w-full mt-16 font-playfair 2xl:w-2/3 2xl:mx-auto 2xl:mt-0">
    <div class="header text-5xl md:text-7xl text-center uppercase font-bold -ml-1 w-full">
        About Frankies
    </div>
    <div class="grid gap-8 md:grid-cols-2 mt-16">
        <div class="max-w-full h-auto">
            <img src="./img/fifth.jpg" alt="">
        </div>
        <div class="leading-relaxed max-w-lg">
            <p class="header text-xl font-bold pb-8">
                About Frankies Bar
            </p>
            <p class="max-w-96 pb-8">
                Frankie's is an "old school" Bar with a relaxing atmosphere.<br>
                Whether outside on our terrace or inside enjoying the old school ambiance.  <br> <br> 
                We serve a broad range of cocktails ranging also from the "pre prohibition" eras. <br>
                Our Cocktails are mainly served with our "crystal clear" house made ice. <br> <br> 
                We offer music ranging from Rock, Blues, Rock n' roll, Rockabilly, electro swing to mainstream, Jazz, funk and soul ... something for everyone. <br> <br> 
                We also have "Open mic" evenings ... usually Wednesdays and live music Saturdays, approximately twice a month.  <br>
                80s / 90s Disco evenings. <br> <br> 
                We are closed on Tuesdays. <br> <br> 
                Please note: you must be at least 18 years of age to visit us.
            </p>
        </div>
    </div>
</section>

<section class="col-span-3 relative px-4 sm:px-32 w-full font-playfair 2xl:w-2/3 2xl:mx-auto mt-16">
    <div class="header text-5xl md:text-7xl text-center uppercase font-bold -ml-1 w-full">
        How can you get to <br /> Frankies Bar?
    </div>
    <div class="grid gap-8 md:grid-cols-2 mt-16">
        <div class="leading-relaxed max-w-lg">
            <p class="header text-xl font-bold pb-8">
                Our location
            </p>
            <p class="font-canada max-w-96 pb-8">
                Fill in the form below and we will get back to you as soon as we can. You can also call us anytime at 
                <span class="font-bold">033 525 16 30</span> or send an email <span class="font-bold">to info@frankies.ch</span>
            </p>
            <div class="font-canada border-b-2 hover:border-b-slate-600 text-lg max-w-fit">
                <a href="./contact.html">More about our location</a>
            </div>
        </div>
        <div class="max-w-full h-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2736.6971434022657!2d7.872396815599003!3d46.691978079134664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478fa37ac111b06b%3A0x133938b9de587beb!2sFrankies%20Bar%20%26%20Caf%C3%A9!5e0!3m2!1sde!2sch!4v1652207102895!5m2!1sde!2sch" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" class="mx-auto"></iframe>
        </div>
    </div>
</section>

<section class="col-span-3 relative px-4 sm:px-32 w-full mt-16 font-playfair 2xl:w-2/3 2xl:mx-auto 2xl:mt-32">
    <div class="header text-5xl md:text-7xl text-center uppercase font-bold -ml-1 w-full">
        What's happening at Frankies?
    </div>
    <div class="grid gap-8 md:grid-cols-2 mt-16">
        <div class="first leading-relaxed max-w-lg">
            <p class="header text-xl font-bold pb-8">
                Check out our events
            </p>
            <p class="max-w-96 pb-8">
                At Frankies we host a variety of events, click below to find out more about all our upcoming events.
            </p>
            <div class="border-b-2 hover:border-b-slate-600 text-lg max-w-fit">
                <a href="./events.html">More about our events</a>
            </div>
            <p class="header text-xl font-bold pb-8 mt-8">
                Booking an event, "VIP Lounge"
            </p>
            <p class="max-w-96 pb-8">
                We have a small VIP lounge that can be booked for birthday partys, company events and more ... <br /> <br />
                It seats around 30 people. <br /> <br />
                For more information, feel free to <a href="./contact.html" class="underline">contact us</a>.
            </p>
        </div>
        <div class="max-w-full h-auto">
            <img src="./img/fourth.jpg" alt="">
        </div>
    </div>
</section>`,
    data() {
        return {}
    }
})