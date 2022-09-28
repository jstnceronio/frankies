app.component('gallery', {
    template:
    /*html*/
    `<section class="col-span-3 relative sm:px-32 mt-32 w-full font-playfair">
        <div class="header text-5xl md:text-7xl text-center uppercase font-bold -ml-1 w-full">
            Photo Gallery
        </div>
        <!-- Image section --> 
        <div class="mt-16 block ml-auto mr-auto">
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
                    <img src="./img/fifth.jpg" alt="placeholder" class="object-cover">
                </div>
                <div class="slide">
                    <img src="./img/seventh.JPG" alt="placeholder" class="object-cover">
                </div>
                <div class="slide">
                    <img src="./img/sixth.JPG" alt="placeholder" class="object-cover">
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
    </section>`,
    data() {
        return {}
    }
})