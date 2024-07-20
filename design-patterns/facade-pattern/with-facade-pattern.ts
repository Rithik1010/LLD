class DVDPlayer {
    on(): void {
        console.log("DVD Player is on.");
    }

    play(movie: string): void {
        console.log(`Playing movie: ${movie}`);
    }
}

class Projector {
    on(): void {
        console.log("Projector is on.");
    }

    setInput(source: string): void {
        console.log(`Projector input set to ${source}`);
    }
}

class SoundSystem {
    on(): void {
        console.log("Sound system is on.");
    }

    setVolume(level: number): void {
        console.log(`Sound system volume set to ${level}`);
    }
}

class HomeTheaterFacade {
    private dvdPlayer: DVDPlayer;
    private projector: Projector;
    private soundSystem: SoundSystem;

    constructor(
        dvdPlayer: DVDPlayer,
        projector: Projector,
        soundSystem: SoundSystem
    ) {
        this.dvdPlayer = dvdPlayer;
        this.projector = projector;
        this.soundSystem = soundSystem;
    }

    watchMovie(movie: string): void {
        console.log("Get ready to watch a movie...");
        this.dvdPlayer.on();
        this.projector.on();
        this.projector.setInput("DVD");
        this.soundSystem.on();
        this.soundSystem.setVolume(10);
        this.dvdPlayer.play(movie);
    }
}

// Creating subsystem objects
const dvdPlayer = new DVDPlayer();
const projector = new Projector();
const soundSystem = new SoundSystem();

// Creating facade object
const homeTheater = new HomeTheaterFacade(dvdPlayer, projector, soundSystem);

// Using facade to watch a movie
homeTheater.watchMovie("Inception");
