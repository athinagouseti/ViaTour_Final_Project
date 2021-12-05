package com.viatour.server;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;

public class AmadeusTest {

    public static void main(String arg[]) throws IOException {

    amadeus.client.getsdfg./

        pb.directory(new File("/home/your_user_name/Pictures"));
        pb.redirectErrorStream(true);
        Process p = pb.start();
        InputStream is = p.getInputStream();

        FileOutputStream outputStream = new FileOutputStream(
                "/home/your_user_name/Pictures/simpson_download.jpg");

        BufferedInputStream bis = new BufferedInputStream(is);
        byte[] bytes = new byte[100];
        int numberByteReaded;
        while ((numberByteReaded = bis.read(bytes, 0, 100)) != -1) {

            outputStream.write(bytes, 0, numberByteReaded);
            Arrays.fill(bytes, (byte) 0);

        }

        outputStream.flush();
        outputStream.close();

    }
}
