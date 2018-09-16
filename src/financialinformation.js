var myInit = {
    method: 'GET',
    headers: {
      'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiZjA0YjhmNGMtNmJiMC0zZWNlLWE3N2UtZWUxMjBkMzY4MDk5IiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiI1ZTUyNGNkNC1iZThmLTRjMjctYTllOC02YTBmMjg4NzE5ZTgifQ.CGzjfiPSph1sWtqz5z0Br76nvm59BNfXjGlu8-pTVuE'
    }
  };

module.exports = {
 getCustomer: function(userId)
 {  
   var req = new Request('https://api.td-davinci.com/api/customers/' + userId, myInit);
  
  fetch(req)
    .then(response => response.json())
    .then(json => {
      return json.result.givenName + ' ' + json.result.surname;
    });
}, 
  getAccount: function(accountId)
{  
  var req = new Request('https://api.td-davinci.com/api/accounts/' + accountId, myInit);
 fetch(req)
   .then(response => response.json())
   .then(json => {
     return json;
   });
}, 
getCustomerAccounts: function(customerId)
{  
  var req = new Request('https://api.td-davinci.com/api/customers/' + customerId + '/accounts', myInit);
 
 fetch(req)
   .then(response => response.json())
   .then(json => {
     return json;
   });
}, 
transferFunds: function(fromAccount, toAccount, amount)
{  
    var bodyContent = {
        "amount": amount,
        "currency": "CAD",
        "fromAccountID": fromAccount,
        "receipt": "{ \"description\": \"From KidKoin\"}",
        "toAccountID": toAccount
    }

  fetch('https://api.td-davinci.com/api/transfers', {
    method: 'POST',
    headers: {
      'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiZjA0YjhmNGMtNmJiMC0zZWNlLWE3N2UtZWUxMjBkMzY4MDk5IiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiI1ZTUyNGNkNC1iZThmLTRjMjctYTllOC02YTBmMjg4NzE5ZTgifQ.CGzjfiPSph1sWtqz5z0Br76nvm59BNfXjGlu8-pTVuE',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyContent)
  }).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch();
}, 
}