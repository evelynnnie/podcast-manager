import * as http from "http";

import { getFilterEpisode, getListEpisode } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (req:http.IncomingMessage, res:http.ServerResponse) => {

        const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

        if (req.method === HttpMethod.GET && baseUrl === Routes.LIST){
            await getListEpisode(req, res);
        }

        if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
            await getFilterEpisode(req, res);
        }
    }