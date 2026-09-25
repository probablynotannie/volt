import { useEffect } from "react";

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    element.dataset.voltSeo = "true";
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function Seo({ title, description, canonical, type = "website" }) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:locale", "es_ES");

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      canonicalLink.dataset.voltSeo = "true";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
  }, [title, description, canonical, type]);

  return null;
}
