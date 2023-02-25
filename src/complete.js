function completeSubmit() {
    return  `
        <div id="complete">
          <div id="img">            
            <img src="./images/icon-complete.svg">
          </div>
          <div class="text">            
            <h2>thank you!</h2>
            <p>We've added your card details</p>
          </div>
          <div id="button">            
            <input type="button" value="Continue" id="bttn-continue" onclick="window.location.href = './index.html'"/>
          </div>
        </div>
      `
  }
    function addCard() {
    document.querySelector('form').innerHTML  = completeSubmit()
  }
