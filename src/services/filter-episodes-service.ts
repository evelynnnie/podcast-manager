import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisode = async (podcastName:string | undefined):Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NOCONTENT;
    responseFormat.body = data;

    return responseFormat;
}
