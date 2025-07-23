import * as http from "http";

import { getFilterEpisode, getListEpisode } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import { StatusCode } from "./utils/status-code";
import { ContentType } from "./utils/content-type";

export const app = async (req:http.IncomingMessage, res:http.ServerResponse) => {

    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisode(req, res);
    } else if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisode(req, res);
    } else {
        res.writeHead(StatusCode.NOT_FOUND, { "Content-Type": ContentType.JSON });
        res.write(JSON.stringify({ message: "Rota não encontrada." }));
        res.end();
    }
}