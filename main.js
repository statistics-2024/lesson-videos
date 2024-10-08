// Video Data
const videoData = [
    {
        week: 6,
        title: 'Pertemuan 6 - Uji Hipotesis',
        date: 3,
        month: 10,
        year: 2024,
        url: 'https://youtu.be/5gvB860H5MI'
    },
    {
        week: 8,
        title: 'Pertemuan 8 - ANOVA',
        date: 31,
        month: 10,
        year: 2024,
        url: 'https://youtu.be/UTxNvTd1wUc'
    },
    {
        week: 9,
        title: 'Pertemuan 9 - ANOVA Faktorial',
        date: 7,
        month: 11,
        year: 2024,
        url: 'https://youtu.be/X2zmRQ8KXL8'
    },
    {
        week: 10,
        title: 'Pertemuan 10 - Korelasi & Regresi Sederhana',
        date: 14,
        month: 11,
        year: 2024,
        url: 'https://youtu.be/wMdQqX1bpN0'
    },
    {
        week: 11,
        title: 'Pertemuan 11 - Korelasi & Regresi Ganda',
        date: 21,
        month: 11,
        year: 2024,
        url: 'https://youtu.be/VJkY-77unbU'
    },
    {
        week: 12,
        title: 'Pertemuan 12 - Statistika Nonparametrik I: Uji Kecocokan & Uji Persyaratan Analisis',
        date: 28,
        month: 11,
        year: 2024,
        url: 'https://youtu.be/JeOiwqXIF-I'
    },
    {
        week: 13,
        title: 'Pertemuan 13 - Statistika Nonparametrik II: Uji Hipotesis Komparatif & Asosiatif',
        date: 5,
        month: 12,
        year: 2024,
        url: 'https://youtu.be/KD1F82-aCQg'
    },
];

// Core Logic
const currentTime = Date.now();
let match = false;

for (let i = 0; i < videoData.length; i++) {
    const start = getTimeSpan(videoData[i], 'start');
    const end = getTimeSpan(videoData[i], 'end');

    if (currentTime > start && currentTime < end ) {
        match = true;
        window.location.replace(videoData[i].url);
    };
};

if (!match) {
    document.querySelector('div').removeAttribute('hidden');
};

// Functions
function getTimeSpan(object, time) {
    const date = new Date(object.year, object.month - 1, object.date);
    const start = date.getTime();
    const end = start + (6 * 24 + 7) * 3600000;
    if (time == 'start') return start;
    if (time == 'end') return end;
};