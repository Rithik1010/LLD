export class Config {
    // Static variable to hold the single instance of the class
    private static instance: Config;

    // Public properties of the singleton class
    public readonly databaseUrl: string;
    public readonly secretKey: string;
    public readonly port: number;

    // Private constructor to prevent direct instantiation
    private constructor() {
        this.databaseUrl = "mongo-url";
        this.secretKey = "secret-key";
        this.port = 3000;
    }

    // Public static method to provide access to the single instance
    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }
}

const config1 = Config.getInstance();
const config2 = Config.getInstance();

console.log(config1);
console.log(config2);
console.log(config1 == config2); // Returns true
