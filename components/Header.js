//TODO: fix margin
// TODO: link to social media
app.component('frankies-header', {
    props: {
        page: {
            type: String,
            required: true
        }
    },
    template: 
    /*html*/
    `<header class="nav row-start-1 row-end-1 col-span-3 p-1 px-4 lg:px-16">
        <!-- Navigation menu -->
        <nav class="font-playfair">
            <ul class="hidden lg:flex justify-around mt-8">
                <!-- Left -->
                <li v-if="page == 'index'" class="mt-10 flex justify-between w-1/4 h-fit">
                    <a class="border-b-2" href="./index.html">Home</a>
                    <a class="hover:border-b-2" href="./events.html">Events</a>
                    <a class="hover:border-b-2" href="./contact.html">Contact</a>
                </li>
                <li v-if="page == 'events'" class="mt-10 flex justify-between w-1/4 h-fit">
                    <a class="hover:border-b-2" href="./index.html">Home</a>
                    <a class="border-b-2" href="./events.html">Events</a>
                    <a class="hover:border-b-2" href="./contact.html">Contact</a>
                </li>
                <li v-if="page == 'contact'" class="mt-10 flex justify-between w-1/4 h-fit">
                    <a class="hover:border-b-2" href="./index.html">Home</a>
                    <a class="hover:border-b-2" href="./events.html">Events</a>
                    <a class="border-b-2" href="./contact.html">Contact</a>
                </li>
                <!-- Center -->
                <img src="./assets/frankies-logo.png" alt="" width="150"> 

                <!-- Right -->
                <li class="flex justify-between w-1/4 h-fit mt-10">
                    <i></i>
                    <i class="fab fa-instagram text-xl"></i>
                    <i class="fab fa-facebook text-xl"></i>
                </li>
            </ul>
        </nav>
        <!-- Mobile menu -->
        <a href="" class="btn lg:hidden mt-8" @click="menuClick($event)">
            <span></span>
            <span></span>
        </a>

        <div class="menu">
            <ul class="menu-list">
                <li class="menu-item">
                    <a href="./index.html" class="menu-link">Home</a>
                </li>
                <!-- 
                <li class="menu-item">
                    <a href="./drinks.html" class="menu-link">Drinks</a>
                </li>-->
                <li class="menu-item">
                    <a href="./events.html" class="menu-link">Events</a>
                </li>
                <li class="menu-item">
                    <a href="./contact.html" class="menu-link">Contact</a>
                </li>
            </ul>
        </div>
        <div class="lg:hidden p-8 text-2xl  font-playfair">
            <div class="flex flex-1 justify-between">
                <div></div>
                <a href="./index.html">
                    <img src="./img/shared/frankies-logo-white.png" alt="" width="150px"> 
                </a>
                <div></div>
            </div>
        </div>
    </header>`,
    data() {
        return {}
    },
    methods: {
      // Click method for mobile menu
      // TODO: Disable scroll
      menuClick(e) {
          var menu = document.querySelector('.menu');
          var btn = document.querySelector('.btn');

          menu.classList.toggle('is-active');
          btn.classList.toggle('is-active');
          e.preventDefault();
        }
    }
})