

function affiliateLinkClicked() {

    const analytics = firebase.analytics();
    analytics.logEvent('C bias Affiliate link Clicked');
    //console.log("affiliate link clicked");
} 

function CBIASsubscribed() {

    const analytics = firebase.analytics();
    analytics.logEvent('C bias email subscribed');
    //console.log("affiliate link clicked");
} 