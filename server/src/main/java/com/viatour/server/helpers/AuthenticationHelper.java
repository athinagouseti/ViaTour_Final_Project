package com.viatour.server.helpers;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@Scope("singleton")
public class AuthenticationHelper {

    // Gets a backend Firebase user token (contains all user info) from a given frontend Firebase auth token
    // Will throw an exception if token invalid or fails for any other reason
    public FirebaseToken getVerifiedToken(String frontendToken)  {
        FirebaseToken firebaseUserToken = null;
        try {
            firebaseUserToken= FirebaseAuth.getInstance().verifyIdToken(frontendToken);
        } catch (FirebaseAuthException e) {
            e.printStackTrace();
        }

        return firebaseUserToken;
    }

    // Gets frontend Firebase authentication token from HTTP request header and returns Firebase UID
    public String getUserUIDFromHeaders(Map<String, String> headers)  {
        String frontendToken = headers.get("auth-token");

        FirebaseToken firebaseUserToken = this.getVerifiedToken(frontendToken);
        return firebaseUserToken.getUid();

    }
}
