const axios = require('axios');

class Feed {
  getFeeds = async () => {
    const result = await axios.get(
      'https://www.flickr.com/services/feeds/photos_public.gne?format=json'
    );
    const response = result.data.substring(
      result.data.indexOf('(') + 1,
      result.data.lastIndexOf(')')
    );
    const parsed = JSON.parse(response);

    return parsed;
  };

  getSearchedFeeds = async (params) => {
    const { tags } = params;

    const result = await axios.get(
      `https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=${tags}`
    );

    const response = result.data.substring(
      result.data.indexOf('(') + 1,
      result.data.lastIndexOf(')')
    );
    const parsed = JSON.parse(response);

    return parsed;
  };
}

module.exports = new Feed();
