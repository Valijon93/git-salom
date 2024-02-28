document.addEventListener('DOMContentLoaded', function() {
    const lights = document.querySelectorAll('.light');
    let currentLightIndex = 0;

    function switchLight() {
        lights.forEach(light => light.classList.remove('blink'));
        lights[currentLightIndex].classList.add('blink');
        currentLightIndex = (currentLightIndex + 1) % lights.length;
    }

    setInterval(switchLight, 2000); // 2 seconds interval
});
