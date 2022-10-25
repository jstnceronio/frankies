var eventList = [
    {
      title: "'The Scramblers' - Rock n Roll at its best",
      time: "October 15 @ 20:30",
      text: "",
      image: "./img/events/scramblers.jpg"
    },
    {
      title: "'Van Dox' and 'Frozen Room' - Rock at its finest",
      time: "December 3 @ 20:00",
      text: "",
      image: "./img/events/frozenroom-vandox.jpg"
    },
    {
      title: "DJ Güsche - Country & Blues evening",
      time: "October 29 @ 20:00",
      text: "",
      image: "./img/homepage/DSCF0095.JPG"
    },
    {
      title: "Mirage Disco Night",
      time: "December 10 @ 20:00 till 3:00",
      text: "Dj‘s Ama und René mit dem besten Sound aller Zeiten..",
      image: "./img/events/mirage_party.jpg"
    },
    {
      title: "Hell Brothers",
      time: "December 17",
      text: "Folk, Rock, Blues",
      image: "./img/events/hell-brothers.jpg"
    }
]
app.component('event-list', {
    template:
    /*html*/
    `<section class="col-span-3 relative px-4 sm:px-32 mt-32 w-full font-playfair">
        <div class="header text-5xl md:text-7xl text-center uppercase font-bold -ml-1 w-full mt-16 ">
            Upcoming events
        </div>
        
        <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-4 mt-16">
            <div v-for="event in events" class="max-w-full h-auto">
                <div>
                    <img :src="event.image" alt="" class="w-22">
                </div>
                <p class="text-xl font-bold pt-4 pb-2 ">
                    {{ event.title }}
                </p>
                <p class="text-lg font-semibold text-gray-400">
                    {{ event.time }}
                </p>
                <p class="pt-2">
                    {{ event.text }}
                </p>
            </div>
        </div>
    </section>`,
    data() {
        return {
          events: eventList
        }
    }
})