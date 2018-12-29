// setup server
var express = require('express');
var app     = express();
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var _       = require('lodash');
var db      = low(adapter);

// setup directory used to serve static files
app.use(express.static('public'));

// check this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// allow Cross-Origin Resource Sharing (CORS)
var cors = require('cors');
app.use(cors());
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// setup data store
console.log('Load stored accounts...');
db.defaults({ accounts: []}).write();
console.log('Loaded');

/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/

app.get('/account/create/:name/:email/:password', function (req, res) {
    console.log('Creating account...');
    // YOUR CODE
    // Create account route
    // return success or failure string
 var NewAccount = {
        "name"         : req.params.name,
        "email"        : req.params.email,
        "balance"      : 0,
        "password"     : req.params.password,
        "transactions" : [_.now(),'Creation',0]
    };
          db.get('accounts').push(NewAccount).write();
          //console.log(db.get('accounts').value());   
          res.send(NewAccount);
          console.log(NewAccount);
          console.log('...created');





});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null
    
    console.log('Login to',req.params.email,'...');
    var TargetAccount =     db.get('accounts')
                              .find({email: req.params.email} && {password: req.params.password})
                              .value()
    if(TargetAccount==undefined){
        console.log('Account Error');
        res.send('Account Error');  
    }
    else{
    console.log(TargetAccount);
    res.send(TargetAccount);
    console.log('Done!');
    }
});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE 
    // Return account based on email
});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
    console.log('Deposit of',req.params.amount,'to account:',req.params.email,'...');
    db.get('accounts')
      .find({email: req.params.email})
      .update('balance', b => b + Number(req.params.amount))
      .update('transactions', n => n.concat(_.now(),'Deposit',100))
      .write()
      
          res.send('success');
          console.log('Success');



});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
    console.log('Withdraw of',req.params.amount,'to account:',req.params.email,'...');
    db.get('accounts')
      .find({email: req.params.email})
      .update('balance', n => n - Number(req.params.amount))
      .update('transactions', n => [n + "/Withdraw"])
      .write()
      
          res.send('success');
          console.log('Success');



});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
});

app.get('/account/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
    var BankAccounts = db.get('accounts').value();
     console.log('Bank Account Information...');
     res.send(BankAccounts);
     console.log(BankAccounts.body);
     console.log('Done!');

});

// start server
// -----------------------
app.listen(3000, function(){
    console.log('Running on port 3000');
});
