
function create() {
	
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------    
    var status  = document.getElementById('status');
    var name2add = document.getElementById('NameField').value;
    var email2add = document.getElementById('EmailField').value;
    var password2add = document.getElementById('PasswordField').value;
    var url = '/account/create/' + name2add + '/' + email2add + '/' + password2add;

    superagent
        .get(url)
        .end(function(err, res){

            if(err){
                console.log(err);
                console.log('Account creation error');
                status.innerHTML = JSON.stringify('Account Creation Error');
                }
                else if(res.text==""){
                    console.log('Account creation unsuccessfull: E-mail already used');
                    status.innerHTML = JSON.stringify('Account error: E-mail already used');  
                }
                else{
                    console.log(res);
                    console.log('Account Created');
                    status.innerHTML = JSON.stringify('Account Created');    
                }  
        });
};



function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
    var status  = document.getElementById('status');
    var email2log = document.getElementById('EmailField').value;
    var password2log = document.getElementById('PasswordField').value;
    var url = '/account/login/' + email2log + '/' + password2log;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                console.log('Account login error');
                status.innerHTML = JSON.stringify('Login Error');
            }
            else{
                status.innerHTML = JSON.stringify(res.text);
                console.log(res);
            }
        });

};

function deposit() {
    // -------------------------------------
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------

    var email2dep = document.getElementById('EmailField').value;
    var amount2dep = document.getElementById('DepositField').value;
    var url = '/account/deposit/' + email2dep + '/' + amount2dep;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                console.log('Account deposit error');
            }
            else{
                console.log(res);
                status.innerHTML = JSON.stringify(res);
                console.log('Account deposit correct');
            }
        });



};

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
    var email = document.getElementById('EmailField').value;
    var amount = document.getElementById('WithdrawField').value;
    var url = '/account/withdraw/' + email + '/' + amount;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                console.log('Account withdraw error');
            }
            else{
                console.log(res);
                status.innerHTML = JSON.stringify(res);
                console.log('Account withdraw correct');
            }
        });

};

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
};

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
};

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
    var status  = document.getElementById('status');
    var url = '/account/all';

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res.body);
                status.innerHTML = JSON.stringify(res.body);
            }

        });





};

