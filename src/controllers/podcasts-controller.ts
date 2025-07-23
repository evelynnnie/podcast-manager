import { IncomingMessage, ServerResponse } from "http";

import { serviceListEpisode } from "../services/list-episodes-service"
import { serviceFilterEpisode } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

export const getListEpisode = async (req: IncomingMessage, res: ServerResponse) => {
    const content:PodcastTransferModel = await serviceListEpisode();

    res.writeHead(content.statusCode, { 'content-type': ContentType.JSON });
    res.write(JSON.stringify(content.body));
    res.end();
}

export const getFilterEpisode = async (req: IncomingMessage, res: ServerResponse) => {
    const content:PodcastTransferModel = await serviceFilterEpisode(req.url);

    res.writeHead(content.statusCode, { 'content-type': ContentType.JSON });
    res.write(JSON.stringify(content.body));
    res.end();
}