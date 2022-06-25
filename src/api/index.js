import axios from "./axios";

class Api {
  async sendSiteId(siteId) {
    const reqHeaders = {
      "Leadhit-Site-Id": `${siteId}`,
      "Api-key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
    };
    try {
      const { data } = await axios.get("", { headers: reqHeaders });
      return data;
    } catch (err) {
      return err;
    }
  }
}

export default new Api();
