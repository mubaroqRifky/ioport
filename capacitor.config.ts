import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
    appId: "com.itdev.ioport",
    appName: "MyProfile",
    webDir: "dist",
    server: {
        androidScheme: "https",
    },
};

export default config;
