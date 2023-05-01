// const baseUrl = "http://10.0.0.251:8080"
// const baseUrl = "http://localhost:8080"
const baseUrl = "http://55mont.ddns.net:8080"

export const createSongRequest = (data) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    fetch(baseUrl + '/song-request', options)
        .then(data => {
            if (!data.ok) {
                console.log(data.status);
                console.log(data.json());
            }
            return data.json();
        }).then(update => {
            console.log(update);
        }).catch(e => {
            console.log(e);
        });
}

export const getSongRequests = async () => {
    const response = await fetch(baseUrl + '/song-request');
    const jsonData = await response.json();
    return jsonData
}