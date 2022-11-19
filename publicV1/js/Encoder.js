

function subscribed() {

    const analytics = firebase.analytics();
    analytics.logEvent('Subscribed to Encoder');
    console.log("Encoded");
} 