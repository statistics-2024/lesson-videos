// Video Data
const videoData = [
    {
        week: 5,
        title: 'Pertemuan 6 - Uji Hipotesis',
        date: 2,
        month: 10,
        year: 2024,
        url: 'https://youtube.com'
    },
    {
        week: 6,
        title: 'Pertemuan 6 - Uji Hipotesis',
        date: 9,
        month: 10,
        year: 2024,
        url: 'https://google.com'
    }
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