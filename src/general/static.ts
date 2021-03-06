export function getStaticHome(env: string) {
  switch (env) {
    case "development":
      return "http://localhost:5000/src/static/";

    case "production":
    ///...CDN
  }
}

export function fileMapper(env: string): (filename: string) => string {
  return filename => getStaticHome(env) + filename;
}
