const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");



const clock = setInterval(
    function time() {
        const date = new Date();
        let hrs = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let period = "AM";


        if (hrs >= 12) {
            period = "PM";
        }
        hrs = hrs > 12 ? hrs % 12 : hrs;

        document.querySelector(".period").innerHTML = period;
        hrs = hrs.toString().padStart(2, "0");
        min = min.toString().padStart(2, "0");
        sec = sec.toString().padStart(2, "0");

        const timeString = `{hrs}:${min}:${sec}`;
        hour.textContent = hrs;
        minute.textContent = min;
        second.textContent = sec;
        let today = new Date();
        const dayNumber = today.getDate();
        const dayName = today.toLocaleString("default", { weekday: "long" });
        const monthName = today.toLocaleString("default", { month: "short" });

        document.querySelector(".month-name").innerHTML = monthName;
        document.querySelector(".day-name").innerHTML = dayName;
        document.querySelector(".date-number").innerHTML = dayNumber;

        const formatToggle = document.getElementById('format-toggle');
        const timeDisplay = document.getElementById('time-display');

        function updateTimeFormat() {
            if (formatToggle.checked) {
                timeDisplay.textContent = '24-Hour Format';
            } else {
                timeDisplay.textContent = '12-Hour Format';
            }
        }
       
        updateTimeFormat();
        formatToggle.addEventListener('change', updateTimeFormat); 
    }, 1000

);
