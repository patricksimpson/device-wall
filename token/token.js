var FirebaseTokenGenerator = require("firebase-token-generator"),
    tokenGenerator = new FirebaseTokenGenerator("<YOUR_FIREBASE_SECRET>"),
    token = tokenGenerator.createToken({uid: "1", isAdmin: true});

console.log(token);
