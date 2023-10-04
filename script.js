const currentip = document.getElementById('IP');
const fectdatabtn = document.getElementById('submit');

async function getUserIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');   
        const data = await response.json();
        currentip.innerText = ` ${data.ip}`;
        return data.ip;
    } catch (error) {
        console.error('Error:', error);
        currentip.innerText = 'Error fetching IP address.';
    }
}

getUserIP();

fectdatabtn.addEventListener('click', async () => {
    const ip = await getUserIP();
    if (ip) {
        window.location.href = `secondpage.html?ip=${ip}`;
    }
});