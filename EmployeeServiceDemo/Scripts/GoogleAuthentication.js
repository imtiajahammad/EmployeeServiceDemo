/// <reference path="jquery-3.3.1.min.js" />



function getAccessToken() {
    if (location.hash) {
        if (location.hash.split('access_token=')) {
            var accessToken = location.hash.split('access_token=')[1].split('&')[0];
            if (accessToken) {
                isUserRegistered(accessToken);
            }


        }
    }
}


function isUserRegistered(accessToken) {
    $.ajax({
        url: '/api/Account/UserInfo',
        method: "GET",
        headers: {
            'content-type': 'application/JSON',
            'Authorization': 'Bearer ' + accessToken
        },
        success: function (response) {
            if (response.HasRegistered) {
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('userName', response.Email);
                window.location.href = "Data.html";
            }
            else {
                signupExternalUser(accessToken);
            }
        }
    })
}


function signupExternalUser(accessToken) {
    $.ajax({
        url: '/api/Account/RegisterExternal',
        method: "POST",
        headers: {
            'content-type': 'application/JSON',
            'Authorization': 'Bearer ' + accessToken
        },
        success: function () {
            window.location.href = "api/Account/ExternalLogin?provider=Google&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A64585%2FLogin.html&state=Rm9nnGf2JqNTcQ8SMfaqFS4nRN7OM63PYV-6dHfg6vI1"; 
            
        }
    })
}