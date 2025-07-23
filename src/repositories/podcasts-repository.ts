import fs from "fs";
import path from "path";
import { podcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastName?:string): Promise<podcastModel[]> => {
    const rawdata = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawdata);

    if (podcastName) {
        jsonFile = jsonFile.filter((podcast:podcastModel) => podcast.podcastName === podcastName);
    }

    return jsonFile;
}