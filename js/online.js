fetch('0')
    .then(response => response.text())
    .then(data => {
        let statusElement = document.getElementById('status');

        statusElement.textContent = data;

        if (data.includes('ONLINE')) {
            statusElement.style.color = 'rgb(6, 190, 0)';
        } else if (data.includes('OFFLINE')) {
            statusElement.style.color = 'rgb(158, 0, 0)';
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });

fetch('timePassed')
    .then(response => response.text())
    .then(data => {
        let onlineTime = new Date(data);
        let currentTime = new Date();
        let minutesPassed = Math.round((currentTime - onlineTime) / 60000);
        document.getElementById('timePassed').textContent = `since ${minutesPassed} minutes ago`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });

// fetch('offlineTime')
//     .then(response => response.text())
//     .then(data => {
//         let offlineTime = new Date(data);
//         let currentTime = new Date();
//         let minutesPassed = Math.round((currentTime - offlineTime) / 60000);
//         document.getElementById('offlineTime').textContent = `since ${minutesPassed} minutes ago`;
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
