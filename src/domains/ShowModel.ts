import {Document, model, Schema} from "mongoose"

export interface Show extends Document {
    title: string;
    premiere: Date;
    is_running: boolean;
    language: string;
    main_genre: string;
    poster_url: string;
}

const schema = new Schema<Show>({
    title: {type: String, required: true},
    premiere: {type: Date, required: true},
    is_running: {type: Boolean},
    language: {type: String, required: true},
    main_genre: {type: String, required: true},
    poster_url: {type: String},
})

export const ShowModel = model<Show>("Show", schema)

export const validateShowInput = (showObj: any) => {
    const {title, premiere, language, main_genre} = showObj;

    const errorMessages: string[] = [];

    if(!title || !premiere || ! language || !main_genre) {
        errorMessages.push("At least on mandatory field was not informed")
    }


    return errorMessages;
}