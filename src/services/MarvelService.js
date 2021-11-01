class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    // _apiKey = 'apikey=73da627187167e6c6216bd7cbd93f7f2';
    _apiKey = 'apikey=c5d6fc8b83116d92ed468ce36bac6c62';
    _baseOffset = 210;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacterById = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {

        return {
            id: char.id,
            name: (char.name.length > 22) ? char.name.substr(0, 22) + '...' : char.name,
            description: char.description ? char.description.substr(0, 203) + '...' : 'There is no data for this character :(',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}

export default MarvelService;