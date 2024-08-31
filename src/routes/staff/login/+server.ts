import { type RequestHandler, error } from "@sveltejs/kit";
import { IPWhitelist } from "../../../../config.json";

export const GET:RequestHandler = async ({request}) => {
    if (IPWhitelist.some(address => request.headers.get("host")!.includes(address))) error(403, {message: "Access Denied!"});
    return new Response(null, {status: 200});
};