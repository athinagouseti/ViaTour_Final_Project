package com.viatour.server;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.*;
import java.util.List;
import java.util.Objects;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {

		ClassLoader classLoader = ServerApplication.class.getClassLoader();

		try {
			File file = new File(Objects.requireNonNull(classLoader.getResource("viatour-56112-firebase-adminsdk-tqoyp-8d850a6162.json")).getFile());
			FileInputStream viatourAccount = new FileInputStream((file.getAbsolutePath()));

			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.fromStream(viatourAccount))
					.build();

			boolean hasBeenInitialized=false;
			List<FirebaseApp> firebaseApps = FirebaseApp.getApps();
			for(FirebaseApp app : firebaseApps){
				if(app.getName().equals(FirebaseApp.DEFAULT_APP_NAME)){
					hasBeenInitialized=true;
				}
			}

			if(!hasBeenInitialized) {
				FirebaseApp.initializeApp(options);
			}

		} catch (IOException e) {
			e.printStackTrace();
		}

		SpringApplication.run(ServerApplication.class, args);
	}

}
