import {Faker, en} from "@faker-js/faker";

const faker = new Faker({locale: en});

export interface Albums {
    id: number;
    albumName: string;
    cover: string;
    artist: string;
    year: number;
}

export default Array.from({length: 30}, (_, i) => ({
    id: i + 1,
    albumName: faker.music.songName(),
    cover: faker.image.urlPicsumPhotos(),
    artist: faker.person.fullName(),
    year: faker.date.past().getFullYear()
})) as Albums[];