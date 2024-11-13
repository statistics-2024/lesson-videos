// Video Data
class Video {
    constructor({week, title, date, month, year, url, duration=151}) {
        this.week = week;
        this.title = title;
        this.date = date;
        this.month = month;
        this.year = year;
        this.url = url;
        this.duration = duration;
        [this.start, this.end] = this.getTimeSpan()
    }

    getTimeSpan() {
        const date = new Date(this.year, this.month - 1, this.date);
        const start = date.getTime();
        const end = start + this.duration * 3600000;
        return [start, end]
    }
}

const videoData = [
    new Video({
        week: 6,
        title: 'Pertemuan 6 - Uji Hipotesis',
        date: 3,
        month: 10,
        year: 2024,
        url: 'https://youtu.be/5gvB860H5MI'
    }),
    new Video({
        week: 8,
        title: 'Pertemuan 8 - ANOVA',
        date: 31,
        month: 10,
        year: 2024,
        url: 'https://youtu.be/UTxNvTd1wUc'
    }),
    new Video({
        week: 9,
        title: 'Pertemuan 9 - ANOVA Faktorial',
        date: 7,
        month: 11,
        year: 2024,
        url: 'https://youtu.be/X2zmRQ8KXL8'
    }),
    new Video({
        week: 10,
        title: 'Pertemuan 10 - Korelasi & Regresi Sederhana',
        date: 14,
        month: 11,
        year: 2024,
        url: 'https://youtu.be/8DWYevhoIo0'
    }),
    new Video({
        week: 11,
        title: 'Pertemuan 11 - Korelasi & Regresi Ganda',
        date: 23,
        month: 11,
        year: 2024,
        url: 'https://youtu.be/VJkY-77unbU',
        duration: 160
    }),
    new Video({
        week: 12,
        title: 'Pertemuan 12 - Statistika Nonparametrik I: Uji Kecocokan & Uji Persyaratan Analisis',
        date: 30,
        month: 11,
        year: 2024,
        url: 'https://youtu.be/JeOiwqXIF-I',
        duration: 103
    }),
    new Video({
        week: 13,
        title: 'Pertemuan 13 - Statistika Nonparametrik II: Uji Hipotesis Komparatif & Asosiatif',
        date: 5,
        month: 12,
        year: 2024,
        url: 'https://youtu.be/KD1F82-aCQg'
    }),
]

// Core Logic
const currentTime = Date.now();
let match = false;


for (let i = 0; i < videoData.length; i++) {
    const start = videoData[i].start;
    const end = videoData[i].end;

    console.log(videoData[i]);

    if (currentTime > start && currentTime < end ) {
        match = true;
        window.location.replace(videoData[i].url);
    };
};

if (!match) {
    document.querySelector('div').removeAttribute('hidden');
};
