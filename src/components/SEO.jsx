import useSeo from "./useSeo";

/**
 * Per-page SEO for the case studies.
 *
 * `url` is accepted as an alias for `canonicalUrl` because several case studies
 * were already passing `url` — under the old component that prop was silently
 * ignored, so those pages shipped with no canonical at all.
 */
const SEO = ({
  title,
  description,
  image,
  keywords,
  name,
  canonicalUrl = null,
  url = null,
  noindex = false,
}) => {
  useSeo({
    title,
    description,
    keywords,
    canonicalUrl: canonicalUrl || url,
    ogImage: image,
    twitterCreator: name,
    noindex,
  });

  return null;
};

export default SEO;
