export default function getVotes () {
  return (dispatch) => {
    return $.ajax({
      type: 'GET',
      url: 'https://api.backendless.com/v1/data/BringTheBand',
      headers: {
        "application-id": "24B65924-C870-5359-FF6E-4A5396B35700",
        "secret-key": "BFBB0F72-782B-9CF9-FF71-D0C15271A900",
        "application-type": "REST"
      },
      success: (data, status, xhr) => {
        console.log('here is the data', data);
      },
      error: (data, status, xhr) => {
        console.log(data);
        console.log(status);
      }
    })
  }
}
