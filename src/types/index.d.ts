export interface IUser {
    name: string;
    portfolio: IPortfolio[];
    experience: IExperience[];
    place: string;
    sample: string;
    availability: string;
    environment: string;
    amazing: string;
    lookingfor: string;
    language: string;
}

export interface IExperience {
    technology: string;
    years: number;
}

export interface IPortfolio {
    technology: string;
    link: string;
}
