export default function saveVote (id, name, image) {
  console.log(id, name, image[0].url);
  return (dispatch) => {
    return $.ajax({
      type: 'POST',
      url: 'https://api.backendless.com/v1/data/BringTheBand',
      headers: {
        "application-id": "24B65924-C870-5359-FF6E-4A5396B35700",
        "secret-key":  "BFBB0F72-782B-9CF9-FF71-D0C15271A900",
        "user-token": null,
        "application-type": "REST",
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        "imgURL": image[0].url,
        "spotifyId": id,
        "spotifyName": name
      }),
      success: (data, status, xhr) => {
        console.log(data);
      }
    });
    }
  }
