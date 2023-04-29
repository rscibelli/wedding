const baseUrl = "http://10.0.0.251:8080"

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
        // if (!data.ok) {
        //   throw Error(data.status);
        // }
        return data.json();
        }).then(update => {
        console.log(update);
        }).catch(e => {
        console.log(e);
        });
}