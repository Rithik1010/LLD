export class NewsAgency {
    private news!: string;
    private channels: NewsChannel[] = [];

    attach(channel: NewsChannel) {
        const isExists = this.channels.includes(channel);
        if (isExists) {
            console.log("This channel already exists");
        } else {
            this.channels.push(channel);
            console.log("Channel Attached :" + channel.name);
        }
    }

    detach(channel: NewsChannel) {
        const channelIndex = this.channels.indexOf(channel);
        if (channelIndex == -1) {
            console.log("This channel does not exist");
        } else {
            this.channels.splice(channelIndex, 1);
            console.log("Channel is detached: " + channel.name);
        }
    }

    notify() {
        console.log("Notifying all channels");
        for (const channel of this.channels) {
            channel.update(this.news);
        }
    }

    setNews(news: string) {
        this.news = news;
        this.notify();
    }
}

export class NewsChannel {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(news: string) {
        console.log(`${this.name} broadcasting: ${news}`);
    }
}

const newsAgency = new NewsAgency();

const channel1 = new NewsChannel("Aaj Tak");
const channel2 = new NewsChannel("News 24");
const channel3 = new NewsChannel("BBC News");

newsAgency.attach(channel1);
newsAgency.attach(channel2);
console.log("");

newsAgency.setNews("Breaking News: Observer Pattern in Action!");
console.log("");

newsAgency.detach(channel1);
newsAgency.attach(channel3);
console.log("");

newsAgency.setNews("Latest Update: Design Patterns Simplified");
console.log("");
