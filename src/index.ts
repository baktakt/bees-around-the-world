/// <reference types="@types/google.maps" />
import { Person, IPerson } from "./Person";
import axios from "axios";
import { GoogleMap } from "./GoogleMap";
const map = new GoogleMap("map");
axios
    .get(
        "https://www.humblebee.se/_next/data/Di5esbeQgckYeloSWxPaC/en/start.json"
    )
    .then((response) => {
        const staff = response.data.pageProps.staff;
        staff.map((person: IPerson) => {
            const bee = new Person(person);
            map.addMarker(bee);
        });
    });
