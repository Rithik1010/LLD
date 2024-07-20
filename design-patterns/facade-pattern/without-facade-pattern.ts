export class DVDPlayer {
    on(): void {
        console.log("DVD Player is on.");
    }

    play(movie: string): void {
        console.log(`Playing movie: ${movie}`);
    }
}

export class Projector {
    on(): void {
        console.log("Projector is on.");
    }

    setInput(source: string): void {
        console.log(`Projector input set to ${source}`);
    }
}

export class SoundSystem {
    on(): void {
        console.log("Sound system is on.");
    }

    setVolume(level: number): void {
        console.log(`Sound system volume set to ${level}`);
    }
}

// Creating subsystem objects
const dvdPlayer = new DVDPlayer();
const projector = new Projector();
const soundSystem = new SoundSystem();

// Directly interacting with subsystem objects
console.log("Get ready to watch a movie...");
dvdPlayer.on();
projector.on();
projector.setInput("DVD");
soundSystem.on();
soundSystem.setVolume(10);
dvdPlayer.play("Inception");
