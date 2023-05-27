import { GetImage } from "./getImage";

export function Avatar ({ person, size }) {
    <img className="avatar" src={ GetImage( person ) }
    alt={ person.name } width={ size } height={ size }/>
}