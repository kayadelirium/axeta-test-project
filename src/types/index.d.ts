export interface IUser {
    name: string;
    portfolio: IPortfolio[];
    experience: IExperience[];
    place: IMap;
    sample: string;
    availability: string;
    environment: string;
    amazing: string;
    lookingfor: string;
}

export interface IExperience {
    technology: string;
    years: number;
}

export interface IPortfolio {
    technology: string;
    link: string;
}

export interface IMap {
    latitude: number;
    longitude: number;
    name: string;
}
