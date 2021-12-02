export default function requestAuthorization(){
    
    const AUTHORIZE = "https://accounts.spotify.com/authorize";
    const redirect_uri = "http://localhost:3000/callback/";
    
    const client_id = "aa367afc771140fbb0dd7e103b86e39e";
    const client_secret = "0fd5b748dbbb47aea7e759d620258254";
    //localStorage.setItem("client_id", client_id);
    //localStorage.setItem("client_secret", client_secret); // In a real app you should not expose your client_secret to the user

    let url = AUTHORIZE;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=true";
    //url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
    url += "&user-read-private user-read-email";
    window.location.href = url; // Show Spotify's authorization screen
}