import {Request, Response} from "express"
import ShowDAO from "../dao/ShowDAO";
import { ShowModel, validateShowInput } from "../domains/ShowModel";

export default class ShowController {
    private showDAO: ShowDAO;

    constructor() {
        this.showDAO = new ShowDAO();
    }

    async save(req: Request, res: Response) {
        const errorMessages = validateShowInput(req.body);

        if(errorMessages.length === 0) {
            const { title, premiere, is_running, language, main_genre, poster_url } = req.body;

            const show = new ShowModel({
                title,
                premiere: new Date(premiere),
                is_running,
                language,
                main_genre,
                poster_url,
            })

            const savedShow = await this.showDAO.save(show);
            return res.status(201).json({ id_show: savedShow._id }); 
        }

        return res.status(400).json({errorMessages});
    }

    async findByTitle(req: Request, res: Response) {
        const {title} = req.params;

        const shows = await this.showDAO.findByTitle(title);

        if (shows.length === 0) {
          return res.status(404).json({ message: "No shows found" });
        }

        return res.status(200).json({shows})
    }
}