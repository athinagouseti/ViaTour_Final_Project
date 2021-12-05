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

    public FirebaseToken getVerifiedToken(String authToken)  {
        FirebaseToken decodedToken = null;
        try {
            decodedToken= FirebaseAuth.getInstance().verifyIdToken(authToken);
        } catch (FirebaseAuthException e) {
            e.printStackTrace();
        }

        return decodedToken;
    }

    public String getUserUIDFromHeaders(Map<String, String> headers)  {
        String token = headers.get("auth-token");

            FirebaseToken decodedToken = this.getVerifiedToken(token);
            return decodedToken.getUid();

    }
}
