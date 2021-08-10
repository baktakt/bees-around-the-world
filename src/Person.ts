import faker from "faker";
import { Mappable } from "./GoogleMap";

export interface IPerson {
    name: string;
    email: string;
    image: {
        url: string;
    };
}

export class Person implements Mappable {
    //if private or protected not added it's implicitly public
    name: string;
    email: string;
    image: {
        url: string;
    };
    location: {
        lat: number;
        lng: number;
    };

    constructor(person: IPerson) {
        this.name = person.name;
        this.email = person.email;
        this.image = person.image;
        this.location = {
            lat: parseFloat(faker.address.latitude(37, 69)),
            lng: parseFloat(faker.address.longitude(-11, 44)),
        };
    }

    markerContent(): string {
        return `
        <div>
            <h1>${this.name}</h1>
            <h3>${this.email}</h3>
            <img src='${this.image.url}' style='width: 100px;height: 100px'/>
        </div>
    `;
    }
}
