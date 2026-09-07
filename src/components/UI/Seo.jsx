import { useEffect } from "react";

export default function Seo({
  title,
  description,
  canonical,
  image = "/fevicon2.png",
}) {
  useEffect(() => {
    document.title = title;

    const siteUrl = "https://habibullahsalmani.in";

    const currentUrl =
      canonical || `${siteUrl}${window.location.pathname}`;

    // Description
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    // Canonical
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute("href", currentUrl);

    // Open Graph Title
    setMetaProperty("og:title", title);

    // Open Graph Description
    setMetaProperty("og:description", description);

    // Open Graph URL
    setMetaProperty("og:url", currentUrl);

    // Open Graph Image
    setMetaProperty(
      "og:image",
      `${siteUrl}${image}`
    );

    // Twitter
    setMetaName("twitter:title", title);
    setMetaName("twitter:description", description);
    setMetaName(
      "twitter:image",
      `${siteUrl}${image}`
    );
  }, [title, description, canonical, image]);

  return null;
}

function setMetaProperty(property, content) {
  let meta = document.querySelector(
    `meta[property="${property}"]`
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function setMetaName(name, content) {
  let meta = document.querySelector(
    `meta[name="${name}"]`
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}