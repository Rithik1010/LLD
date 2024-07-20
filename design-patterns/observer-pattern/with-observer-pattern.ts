interface Observer {
    name: string;
    update(news: string): void;
}

interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

class NewsAgency implements Subject {
    private observers: Observer[] = [];
    private news!: string;

    attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            console.log("NewsChannel already attached.");
        } else {
            this.observers.push(observer);
            console.log("NewsChannel attached: " + observer.name);
        }
    }

    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            console.log("NewsChannel not found.");
        } else {
            this.observers.splice(observerIndex, 1);
            console.log("NewsChannel detached: " + observer.name);
        }
    }

    notify(): void {
        console.log("Notifying news channels...");
        for (const observer of this.observers) {
            observer.update(this.news);
        }
    }

    setNews(news: string): void {
        this.news = news;
        this.notify();
    }
}

class NewsChannel implements Observer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(news: string): void {
        console.log(`${this.name} broadcasting: ${news}`);
    }
}

// Create a news agency
const newsAgency = new NewsAgency();

// Create news channels
const channel1 = new NewsChannel("Aaj Tak");
const channel2 = new NewsChannel("News 24");
const channel3 = new NewsChannel("BBC News");

// Attach news channels to the news agency
newsAgency.attach(channel1);
newsAgency.attach(channel2);

console.log("");

// Publish a news update
newsAgency.setNews("Breaking News: Observer Pattern in Action!"); // Notifies Channel 1 and Channel 2

console.log("");

// Detach Channel 1 and attach Channel 3
newsAgency.detach(channel1);
newsAgency.attach(channel3);

console.log("");

// Publish another news update
newsAgency.setNews("Latest Update: Design Patterns Simplified"); // Notifies Channel 2 and Channel 3

console.log("");
