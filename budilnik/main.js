let alarmTime = null;

    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;

      if (alarmTime && now.getHours() === alarmTime.hours && now.getMinutes() === alarmTime.minutes) {
        triggerAlarm();
      }
    }

    function setAlarm() {
      const alarmInput = document.getElementById('alarmSet').value;
      const [hours, minutes] = alarmInput.split(':');
      alarmTime = { hours: parseInt(hours), minutes: parseInt(minutes) };
      document.getElementById('alarmTime').innerHTML = `Alarm set for ${hours}:${minutes}`;
    }

    function clearAlarm() {
      alarmTime = null;
      document.getElementById('alarmTime').innerHTML = '';
    }
    function triggerAlarm() {
        let color = 'blue';
        const intervalId = setInterval(() => {
          document.body.style.backgroundColor = color;
          color = color === 'blue' ? 'red' : 'blue';
        }, 500); 
      const audio = new Audio('ochen_gromkij_budilnik.mp3'); 
      audio.loop = true;
      audio.play();
    }

    setInterval(updateTime, 1000);