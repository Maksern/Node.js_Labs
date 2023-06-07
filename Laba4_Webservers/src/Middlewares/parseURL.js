// @ts-nocheck
export default (baseURL) => (req, res, next) => {
      const parsedURL = new URL(req.url, baseURL);
      let params = {}
      parsedURL.searchParams.forEach( (value, key) => {params[key] = value})
      req.pathname = parsedURL.pathname;
      req.parametrs = params;
      next();
}