import { environment } from "../environments/environment";

const API = {
	host : environment.config.API.host,
	url : environment.config.API.url
};

export {API};